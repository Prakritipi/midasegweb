import { Table, Button, Input, Space, message, Popconfirm, Form } from "antd";
import { useState, useEffect } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

const Apicruduse = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState<any[]>([]);
    const [editingRecord, setEditingRecord] = useState<any>(null); // ← Track record object

    const api = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
    });

    // Fetch data
    useEffect(() => {
        api.get("/posts")
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
            if (editingRecord) {
                // Edit mode
                const updatedData = data.map((item) =>
                    item.id === editingRecord.id ? { ...editingRecord, ...values } : item
                );
                setData(updatedData);
                message.success("User updated");
            } else {
                // Add mode
                const newUser = {
                    ...values,
                    id: Date.now(),
                    key: Date.now(),
                };
                setData([...data, newUser]);
                message.success("User added");
            }

            form.resetFields();
            setEditingRecord(null);
        });
    };

    const onEdit = (record: any) => {
        form.setFieldsValue(record);
        setEditingRecord(record);
    };

    const onDelete = (recordId: number) => {
        const isApiRecord = recordId <= 100;
        if (isApiRecord) {
            api.delete(`/posts/${recordId}`)
                .then(() => {
                    const updated = data.filter(item => item.id !== recordId);
                    setData(updated);
                    message.success("Deleted successfully");
                })
                .catch(err => {
                    console.error("Delete failed:", err);
                    message.error("Delete failed");
                });
        } else {
            // Local delete only
            const updated = data.filter(item => item.id !== recordId);
            setData(updated);
            message.success("Deleted local user");
        }
    };

    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "User ID", dataIndex: "userId", key: "userId" },
        { title: "Title", dataIndex: "title", key: "title" },
        {
            title: "Actions",
            render: (_: any, record: any) => (
                <Space>
                    <EditOutlined onClick={() => onEdit(record)} />
                    <Popconfirm
                        title="Are you sure to delete?"
                        onConfirm={() => onDelete(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined className="ml-4" />
                    </Popconfirm>
                </Space>
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
                            {editingRecord ? "Update" : "Add"}
                        </Button>
                        {editingRecord && (
                            <Button onClick={() => {
                                form.resetFields();
                                setEditingRecord(null);
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
