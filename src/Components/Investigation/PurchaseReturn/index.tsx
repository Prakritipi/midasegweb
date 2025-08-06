import React, { useState } from "react";
import { Tabs } from "antd";
import SupplierForm from "./SupplierForm";
import ItemEntryForm from "./ItemEntryForm";
import PurchaseReturnTable from "./PurchaseReturnTable";
import TotalSummary from "./TotalSummary";
import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import {
    fetchPurchaseReturns,
    createPurchaseReturn,
    updatePurchaseReturn,
    deletePurchaseReturn,
} from "Services/purchaseReturnService";

const PurchaseReturn: React.FC = () => {
    const queryClient = useQueryClient();

    // Local state for form and calculations
    const [items, setItems] = useState<any[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [vatPercent, setVatPercent] = useState<number>(0);

    // Fetching purchase returns from API (not yet used in UI)
    const { data: purchaseReturns = [] } = useQuery({
        queryKey: ["purchaseReturns"],
        queryFn: fetchPurchaseReturns,
    });

    // Mutations
    const createMutation = useMutation({
        mutationFn: createPurchaseReturn,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["purchaseReturns"] }),
    });

    const updateMutation = useMutation({
        mutationFn: ({ id, data }: { id: string; data: any }) =>
            updatePurchaseReturn(id, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["purchaseReturns"] }),
    });

    const deleteMutation = useMutation({
        mutationFn: deletePurchaseReturn,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["purchaseReturns"] }),
    });

    // Add or update item in table
    const addItem = (item: any) => {
        if (editingIndex !== null) {
            const updated = [...items];
            updated[editingIndex] = item;
            setItems(updated);
            setEditingIndex(null);

            if (item.id) {
                updateMutation.mutate({
                    id: item.id,
                    data: item,
                });
            }
        } else {
            setItems([...items, item]);
            createMutation.mutate(item);
        }
    };

    const editItem = (index: number) => {
        setEditingIndex(index);
    };

    const deleteItem = (index: number) => {
        const itemToDelete = items[index];
        if (itemToDelete.id) {
            deleteMutation.mutate(itemToDelete.id);
        }

        setItems(items.filter((_, i) => i !== index));
    };

    const total = items.reduce((acc, item) => acc + item.total, 0);

    return (
        <div className="p-4 ml-11">
            <Tabs
                defaultActiveKey="1"
                items={[
                    {
                        key: "1",
                        label: "Purchase Return",
                        children: (
                            <>
                                <SupplierForm onSupplierChange={setVatPercent} />
                                <ItemEntryForm
                                    onAdd={addItem}
                                    editingItem={items[editingIndex ?? -1]}
                                    vatPercent={vatPercent}
                                    disabled={vatPercent === 0}
                                    onSubmitToAPI={(data) => createMutation.mutate(data)}
                                />
                                <PurchaseReturnTable
                                    items={items}
                                    onEdit={editItem}
                                    onDelete={deleteItem}
                                />
                                <TotalSummary total={total} />
                            </>
                        ),
                    },
                    {
                        key: "2",
                        label: "Scheme Info",
                        children: (
                            <div className="border border-gray-300 h-32 rounded p-4">
                                (Optional content)
                            </div>
                        ),
                    },
                ]}
            />
        </div>
    );
};

export default PurchaseReturn;
