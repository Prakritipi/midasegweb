import { useState, useEffect } from "react";
import {
    EditOutlined,
    DeleteOutlined,
    SearchOutlined,
    HomeOutlined,
    RightOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";
import {
    Table,
    Button,
    Input,
    Flex,
    Popconfirm,
    Form,
    message,
    Modal,
    Breadcrumb,
} from "antd";
import axios from "axios";
import NavsideBar from "./NavsideBar";
import { useNavigate } from 'react-router-dom';

const Apicruduse = () => {
    const navigate = useNavigate();

    const [form] = Form.useForm();
    const [data, setData] = useState<any[]>([]);
    const [searchedText, setSearchedText] = useState("");
    const [editingRecord, setEditingRecord] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const api = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
    });

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

    const handleAddClick = () => {
        form.resetFields();
        setEditingRecord(null);
        setIsModalOpen(true);
    };

    const handleEdit = (record: any) => {
        form.setFieldsValue(record);
        setEditingRecord(record);
        setIsModalOpen(true);
    };

    const handleDelete = (id: number) => {
        const isApiRecord = id <= 100;
        if (isApiRecord) {
            api.delete(`/posts/${id}`)
                .then(() => {
                    const updated = data.filter((item) => item.id !== id);
                    setData(updated);
                    message.success("Deleted successfully");
                })
                .catch(() => {
                    message.error("Failed to delete");
                });
        } else {
            const updated = data.filter((item) => item.id !== id);
            setData(updated);
            message.success("Deleted local user");
        }
    };

    const handleFormSubmit = () => {
        form.validateFields().then((values) => {
            if (editingRecord) {
                const updated = data.map((item) =>
                    item.id === editingRecord.id ? { ...editingRecord, ...values } : item
                );
                setData(updated);
                message.success("User updated");
            } else {
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
            setIsModalOpen(false);
        });
    };

    const filteredData = data.filter((item) =>
        Object.values(item).some((field) =>
            String(field).toLowerCase().startsWith(searchedText.toLowerCase())
        )
    );

    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "User ID", dataIndex: "userId", key: "userId" },
        { title: "Title", dataIndex: "title", key: "title" },
        {
            title: "Actions",
            render: (_: any, record: any) => (
                <div className="space-x-4">
                    <EditOutlined
                        style={{ color: "#1677ff" }}
                        onClick={() => handleEdit(record)}
                    />
                    <Popconfirm
                        title="Are you sure you want to delete?"
                        onConfirm={() => handleDelete(record.id)}
                    >
                        <DeleteOutlined style={{ color: "red" }} />
                    </Popconfirm>
                </div>
            ),
        },
    ];

    return (
        <>
            <NavsideBar />

            <div className="ml-9 mt-4 mb-3 font-semibold text-xs">
                <Breadcrumb
                    separator={<RightOutlined className="text-gray-400 text-xs" />}
                    items={[
                        {
                            title: (
                                <HomeOutlined
                                    className="cursor-pointer"
                                    onClick={() => navigate('/dashboard')}
                                />
                            ),
                        },
                        {
                            title: (
                                <span
                                    className="text-gray-400 cursor-pointer"
                                >
                                    Api Examples
                                </span>
                            ),
                        },
                        {
                            title: (
                                <span
                                    className="text-gray-400 cursor-pointer"
                                    onClick={() => navigate('/dashboard/apicruduse')}
                                >
                                    CRUD
                                </span>
                            ),
                        },
                    ]}
                />
            </div>

            {/* Search + Add */}
            <div className="flex justify-between mx-20 mt-4">
                <Flex className="items-center" gap="small">
                    <Input
                        placeholder="Search posts"
                        value={searchedText}
                        onChange={(e) => setSearchedText(e.target.value)}
                        prefix={<SearchOutlined className="text-gray-400" />}
                        allowClear
                    />
                    <Button className="bg-cyan-500 text-white hover:bg-cyan-600">
                        Search
                    </Button>
                </Flex>
                <Button
                    className="bg-cyan-500 text-white hover:bg-cyan-600"
                    icon={<PlusCircleOutlined />}
                    onClick={handleAddClick}
                >
                    Add
                </Button>
            </div>

            {/* Table */}
            <div className="mx-20 mt-4 rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <Table
                    className="text-12-medium w-full"
                    dataSource={filteredData}
                    columns={columns}
                    pagination={{ pageSize: 5 }}
                    rowKey="key"
                />
            </div>

            {/* Modal Form */}
            <Modal
                title={editingRecord ? "Edit Post" : "Add New Post"}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onOk={handleFormSubmit}
                okText={editingRecord ? "Update" : "Add"}
            >
                <Form layout="vertical" form={form}>
                    <Form.Item name="id" label="ID" rules={[{ required: true }]}>
                        <Input placeholder="Enter ID" />
                    </Form.Item>
                    <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                        <Input placeholder="Enter title" />
                    </Form.Item>
                    <Form.Item name="userId" label="User ID" rules={[{ required: true }]}>
                        <Input placeholder="Enter user ID" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Apicruduse;
