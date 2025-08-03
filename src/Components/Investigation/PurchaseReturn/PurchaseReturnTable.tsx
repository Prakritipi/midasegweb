import React from "react";
import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface Props {
    items: any[];
    onEdit: (index: number) => void;
    onDelete: (index: number) => void;
}

const PurchaseReturnTable: React.FC<Props> = ({ items, onEdit, onDelete }) => {
    const columns = [
        { title: "Item Name", dataIndex: "itemName" },
        { title: "Qty", dataIndex: "qty" },
        { title: "Rate", dataIndex: "rate" },
        { title: "Amount", dataIndex: "amount" },
        { title: "Disc. %", dataIndex: "discountPercent" },
        { title: "Disc. Amt", dataIndex: "discountAmt" },
        { title: "Total", dataIndex: "total" },
        {
            title: "Actions",
            render: (_: any, _record: any, index: number) => (
                <>
                    <Button
                        icon={<EditOutlined />}
                        size="small"
                        onClick={() => onEdit(index)}
                        className="mr-2"
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        size="small"
                        danger
                        onClick={() => onDelete(index)}
                    />
                </>
            ),
        },
    ];

    return <Table columns={columns} dataSource={items} rowKey="itemName" pagination={false} />;
};

export default PurchaseReturnTable;
