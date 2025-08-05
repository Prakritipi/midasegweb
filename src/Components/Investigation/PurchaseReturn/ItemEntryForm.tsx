import React, { useEffect, useState } from "react";
import { Input, Button, Form, InputNumber } from "antd";
import { SaveOutlined, ClearOutlined } from "@ant-design/icons";

interface Props {
    onAdd: (item: any) => void;
    editingItem?: any;
    vatPercent: number;
    disabled: boolean;
}

const ItemEntryForm: React.FC<Props> = ({ onAdd, editingItem, vatPercent, disabled }) => {
    const [form] = Form.useForm();
    const [discountAmt, setDiscountAmt] = useState(0);
    const [vatAmt, setVatAmt] = useState(0);
    const [total, setTotal] = useState(0);

    const updateAmounts = () => {
        const { qty = 0, rate = 0, discountPercent = 0 } = form.getFieldsValue();
        const amount = qty * rate;
        const discAmt = (amount * discountPercent) / 100;
        const taxable = amount - discAmt;
        const vat = (taxable * vatPercent) / 100;
        const finalTotal = taxable + vat;

        setDiscountAmt(discAmt);
        setVatAmt(vat);
        setTotal(finalTotal);
    };

    useEffect(() => {
        if (editingItem) {
            form.setFieldsValue(editingItem);
            updateAmounts();
        } else {
            form.resetFields();
            setDiscountAmt(0);
            setVatAmt(0);
            setTotal(0);
        }
    }, [editingItem, vatPercent]);

    const handleSubmit = () => {
        const values = form.getFieldsValue();
        const amount = values.qty * values.rate;
        const discAmt = (amount * values.discountPercent) / 100;
        const taxable = amount - discAmt;
        const vat = (taxable * vatPercent) / 100;
        const finalTotal = taxable + vat;

        onAdd({
            ...values,
            amount,
            discountAmt: discAmt,
            vatPercent,
            vatAmt: vat,
            total: finalTotal,
        });

        form.resetFields();
        setDiscountAmt(0);
        setVatAmt(0);
        setTotal(0);
    };

    return (
        <Form
            form={form}
            layout="inline"
            className="flex flex-wrap gap-2 mb-4"
            onValuesChange={updateAmounts}
        >
            <Form.Item name="itemName" rules={[{ required: true }]}>
                <Input placeholder="Item Name" disabled={disabled}/>
            </Form.Item>

            <Form.Item name="qty" rules={[{ required: true }]}>
                <InputNumber placeholder="Qty" disabled={disabled} />
            </Form.Item>

            <Form.Item name="rate" rules={[{ required: true }]}>
                <InputNumber placeholder="Rate" disabled={disabled} />
            </Form.Item>

            <Form.Item name="discountPercent" initialValue={0}>
                <InputNumber placeholder="Disc. %" disabled={disabled}/>
            </Form.Item>

            <Form.Item label="Discount Amt">
                <InputNumber value={discountAmt} readOnly disabled={disabled} />
            </Form.Item>

            <Form.Item label="VAT %" tooltip="Auto-filled from supplier">
                <InputNumber value={vatPercent} readOnly/>
            </Form.Item>

            <Form.Item label="VAT Amt">
                <InputNumber value={vatAmt} readOnly />
            </Form.Item>

            <Form.Item label="Total">
                <InputNumber value={total} readOnly />
            </Form.Item>

            <Button type="primary" icon={<SaveOutlined />} onClick={handleSubmit}>
                {editingItem ? "Update" : "Add"}
            </Button>

            <Button icon={<ClearOutlined />} 
            onClick={() => {
                form.resetFields();
                setDiscountAmt(0);
                setVatAmt(0);
                setTotal(0);        
                }} />
        </Form>
    );
};

export default ItemEntryForm;
