import { Table, Button, Input, Space, message, Popconfirm, Form } from "antd";
import { useState, useEffect } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

const Apicruduse = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState<any[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editMode, setEditMode] = useState(false);

    const api = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
    });

    // Fetch data
    useEffect(() => {
        api
            .get("/posts")
            .then((res) => {
                const formatted = res.data.slice(0, 10).map((post, index) => ({
                    key: post.id,
                    sn: index + 1,
                    userId: post.userId,
                    title: post.title,
                    id: post.id,
                }));
                setData(formatted);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                message.error("Failed to load data");
            });
    }, []);

    const onSubmit = () => {
        form.validateFields().then((values) => {
            const newData = {
                key: editMode && editingIndex !== null ? data[editingIndex].key : Date.now(),
                userId: values.userId,
                title: values.title,
                id: values.id,
            };

            if (editMode && editingIndex !== null) {
                const updated = [...data];
                updated[editingIndex] = newData;
                setData(updated);
                message.success("Updated successfully");
            } else {
                setData(prev => [...prev, newData]);
                message.success("Added successfully (simulated)");
            }

            form.resetFields();
            setEditMode(false);
            setEditingIndex(null);
        });
    };

    const onEdit = (record: any, index: number) => {
        form.setFieldsValue(record);
        setEditMode(true);
        setEditingIndex(index);
    };

    const onDelete = (index: number) => {
        const updated = [...data];
        updated.splice(index, 1);
        setData(updated);
        message.success("Deleted successfully");
    };

    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "User ID", dataIndex: "userId", key: "userId" },
        { title: "Title", dataIndex: "title", key: "title" },
        {
            title: "Actions",
            render: (_: any, record: any, index: number) => (
                <div>
                    <EditOutlined onClick={() => onEdit(record, index)} />
                    <Popconfirm
                        title="Are you sure to delete?"
                        onConfirm={() => onDelete(index)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined className="ml-4" />
                    </Popconfirm>
                </div>
            ),
        },
    ];

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-xl font-semibold mb-4">API CRUD with AntD Table</h1>

            <Form form={form} layout="horizontal">
                <div className="flex flex-row gap-4 ">
                    <div className="flex flex-row gap-4 items-end">
                        <Form.Item
                            name="id"
                            label="ID"
                            rules={[{ required: true, message: "Please enter ID" }]}
                        >
                            <Input placeholder="ID" />
                        </Form.Item>
                        <Form.Item
                            name="title"
                            label="Title"
                            rules={[{ required: true, message: "Please enter Title" }]}
                        >
                            <Input placeholder="Title" />
                        </Form.Item>
                        <Form.Item
                            name="userId"
                            label="User ID"
                            rules={[{ required: true, message: "Please enter User ID" }]}
                        >
                            <Input placeholder="User ID" />
                        </Form.Item>
                    </div>

                    <div className="flex flex-row gap-2">
                        <Button type="primary" onClick={onSubmit}>
                            {editMode ? "Update" : "Add"}
                        </Button>
                        {editMode && (
                            <Button onClick={() => {
                                form.resetFields();
                                setEditMode(false);
                                setEditingIndex(null);
                            }}>
                                Cancel
                            </Button>
                        )}
                    </div>
                </div>
            </Form>

            <div className="mt-6">
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: 5 }}
                    rowKey="key"
                />
            </div>
        </div>
    );
};

export default Apicruduse;
