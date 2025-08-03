import React, { useEffect, useState } from "react";
import { Input, Button, Form, InputNumber } from "antd";
import { SaveOutlined, ClearOutlined } from "@ant-design/icons";

interface Props {
    onAdd: (item: any) => void;
    editingItem?: any;
}

const ItemEntryForm: React.FC<Props> = ({ onAdd, editingItem }) => {
    const [form] = Form.useForm();
    const [discountAmt, setDiscountAmt] = useState(0);

    const updateDiscountAmt = () => {
        const values = form.getFieldsValue();
        const qty = Number(values.qty) || 0;
        const rate = Number(values.rate) || 0;
        const discountPercent = Number(values.discountPercent) || 0;

        const amount = qty * rate;
        const discAmt = (amount * discountPercent) / 100;
        setDiscountAmt(discAmt);
    };

    useEffect(() => {
        if (editingItem) {
            form.setFieldsValue(editingItem);
            updateDiscountAmt();
        } else {
            form.resetFields();
            setDiscountAmt(0);
        }
    }, [editingItem]);

    const handleInputChange = () => {
        updateDiscountAmt();
    };

    const handleSubmit = () => {
        form.validateFields().then((values) => {
            const amount = values.qty * values.rate;
            const total = amount - discountAmt;
            onAdd({ ...values, amount, discountAmt, total });
            form.resetFields();
            setDiscountAmt(0);
        });
    };

    return (
        <>
            <Form
                form={form}
                layout="inline"
                className="flex flex-wrap gap-4 mb-4"
                onValuesChange={handleInputChange}
            >
                <Form.Item name="itemName" rules={[{ required: true }]}>
                    <Input placeholder="Item Name" />
                </Form.Item>
                <Form.Item name="qty" rules={[{ required: true }]}>
                    <InputNumber placeholder="Qty" />
                </Form.Item>
                <Form.Item name="rate" rules={[{ required: true }]}>
                    <InputNumber placeholder="Rate" />
                </Form.Item>
                <Form.Item name="discountPercent" initialValue={0}>
                    <InputNumber placeholder="Disc. %" />
                </Form.Item>

                <Form.Item label="Discount Amt">
                    <InputNumber value={discountAmt} readOnly />
                </Form.Item>

                <Button type="primary" icon={<SaveOutlined />} onClick={handleSubmit}>
                    {editingItem ? "Update" : "Add"}
                </Button>
                <Button icon={<ClearOutlined />} onClick={() => form.resetFields()} />
            </Form>
        </>
    );
};

export default ItemEntryForm;
