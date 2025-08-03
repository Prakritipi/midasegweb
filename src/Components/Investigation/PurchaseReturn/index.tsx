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

    // get data
    const { data: purchaseReturns, isLoading } = useQuery({
        queryKey: ["purchaseReturns"],
        queryFn: fetchPurchaseReturns,
    });

    // save new datas 
    const addMutation = useMutation({
        mutationFn: createPurchaseReturn,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["purchaseReturns"] }),
    });

    const deleteMutation = useMutation({
        mutationFn: deletePurchaseReturn,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["purchaseReturns"] }),
    });

    // Local state for manual entry
    const [items, setItems] = useState([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

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
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Purchase Return" key="1">
                    <SupplierForm />
                    <ItemEntryForm onAdd={addItem} editingItem={items[editingIndex ?? -1]} />
                    <PurchaseReturnTable
                        items={items}
                        onEdit={editItem}
                        onDelete={deleteItem}
                    />
                    <TotalSummary total={total} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Scheme Info" key="2">
                    <div className="border border-gray-300 h-32 rounded p-4">
                        (Optional content)
                    </div>
                </Tabs.TabPane>
            </Tabs>
        </div>
    );
};

export default PurchaseReturn;
