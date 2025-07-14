import { Table, Popconfirm, message, Form, Input, Button} from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useMemo, useState } from "react";
import React from 'react';

export const NewTask = () => {
    const [form] = Form.useForm();
    const [details, setDetails] = useState<any[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editMode, setEditMode] = useState(false);

    const onSubmit = () => {
        form.validateFields().then((values) => {
            const newData = {
                key: editMode && editingIndex !== null ? editingIndex : details.length,
                name: values.name,
                address: values.address,
                email: values.email,
            };

            if (editMode && editingIndex !== null) {
                // Update existing row
                const updatedData = [...details];
                updatedData[editingIndex] = newData;
                setDetails(updatedData);
                message.success("Updated successfully");
            } else {
                // Add new row
                setDetails(prev => [...prev, newData]);
                message.success("Added successfully");
            }

            // Reset form and states
            form.resetFields();
            setEditMode(false);
            setEditingIndex(null);
        }).catch((error) => {
            console.error("Form validation failed:", error);
        });
    };

    const onEdit = (record: any, index: number) => {
        console.log("Editing record:", record, "at index:", index); // Debug log
        // Populate form with row data
        form.setFieldsValue({
            name: record.name,
            address: record.address,
            email: record.email,
        });
        setEditMode(true);
        setEditingIndex(index);
    };

    const onDelete = (index: number) => {
        const updated = [...details];
        updated.splice(index, 1);
        setDetails(updated);
        message.success("Deleted successfully");
    };

    const columns = [
        {
            title: "Name",
            key: "name",
            dataIndex: "name",
        },
        {
            title: "Address",
            key: "address",
            dataIndex: "address",
        },
        {
            title: "Email",
            key: "email",
            dataIndex: "email",
        },
        {
            title: "Actions",
            render: (_text: any, record: any, index: number) => (
                <div>
                    <EditOutlined onClick={() => onEdit(record, index)} />
                    <Popconfirm
                        title="Are you sure you want to delete?"
                        onConfirm={() => onDelete(index)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined className="ml-6" />
                    </Popconfirm>
                </div>
            ),
        },
    ];

    return (
        <div className="m-1">
            <h2>New Task</h2>
            <Form form={form} layout="vertical">
                <div className="flex gap-4 m-2">
                    <div className="grid flex-1 grid-cols-3 gap-4">
                        <Form.Item
                            name="name"
                            label="Name"
                            rules={[{ required: true, message: 'Please enter a name' }]}
                        >
                            <Input placeholder="Enter your name" />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            label="Address"
                            rules={[{ required: true, message: 'Please enter an address' }]}
                        >
                            <Input placeholder="Enter your address" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { required: true, message: 'Please enter an email' },
                                { type: 'email', message: 'Please enter a valid email' },
                            ]}
                        >
                            <Input placeholder="Enter your email" />
                        </Form.Item>
                    </div>
                    <div className="flex items-center">
                        <Button className='bg-cyan-500 text-white hover:bg-cyan-600' onClick={onSubmit}>
                            {editMode ? "Update" : "Add"}
                        </Button>
                        {editMode && (
                            <Button
                                className="ml-2"
                                onClick={() => {
                                    form.resetFields();
                                    setEditMode(false);
                                    setEditingIndex(null);
                                }}
                            >
                                Cancel
                            </Button>
                        )}
                    </div>
                </div>
            </Form>

            <Table
                columns={columns}
                dataSource={details}
                rowKey="key"
            />
        </div>
    );
};

export default NewTask;