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
    deletePurchaseReturn,
} from "Services/purchaseReturnService";

const PurchaseReturn: React.FC = () => {
    const queryClient = useQueryClient();

    // State
    const [items, setItems] = useState<any[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [vatPercent, setVatPercent] = useState<number>(0);

    // Fetch purchase returns (optional - not used here directly)
    useQuery({
        queryKey: ["purchaseReturns"],
        queryFn: fetchPurchaseReturns,
    });

    // Mutations (optional - not used in this component directly)
    const addMutation = useMutation({
        mutationFn: createPurchaseReturn,
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["purchaseReturns"] }),
    });

    const deleteMutation = useMutation({
        mutationFn: deletePurchaseReturn,
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["purchaseReturns"] }),
    });

    // Handlers
    const addItem = (item: any) => {
        if (editingIndex !== null) {
            const updated = [...items];
            updated[editingIndex] = item;
            setItems(updated);
            setEditingIndex(null);
        } else {
            setItems([...items, item]);
        }
    };

    const editItem = (index: number) => {
        setEditingIndex(index);
    };

    const deleteItem = (index: number) => {
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
