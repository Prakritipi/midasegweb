import React, { useState } from 'react';
import {
    Button,
    Flex,
    Input,
    Table,
    Modal,
    Form,
    message,
    Popconfirm,
    Checkbox,
    Breadcrumb
} from "antd";
import {
    HomeOutlined,
    RightOutlined,
    SearchOutlined,
    PlusCircleOutlined,
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const ChildTable = ({ data, onSelectedRowsChange }: { data: any[], onSelectedRowsChange: (rows: any[]) => void, }) => {
    const navigate = useNavigate();

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [searchedText, setSearchedText] = useState('');
    const [tableData, setTableData] = useState(data);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingRecord, setEditingRecord] = useState<any>(null);
    const [form] = Form.useForm();

    const filteredData = tableData.filter((item) =>
        Object.values(item).some((value) =>
            String(value).toLowerCase().startsWith(searchedText.toLowerCase())
        )
    );

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
        const selectedRows = tableData.filter((item) =>
            newSelectedRowKeys.includes(item.key)
        );
        onSelectedRowsChange(selectedRows);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const showModal = (record: any = null) => {
        setEditingRecord(record);
        setIsModalOpen(true);
        form.setFieldsValue(record || { name: '', email: '', company: '', userId: '' });
    };

    const handleCancel = () => {
        form.resetFields();
        setEditingRecord(null);
        setIsModalOpen(false);
    };

    const handleFinish = (values: any) => {
        if (editingRecord) {
            const updated = tableData.map((item) =>
                item.key === editingRecord.key ? { ...item, ...values } : item
            );
            setTableData(updated);
            message.success('Record updated');
        } else {
            const newItem = {
                ...values,
                key: Date.now(),
                userId: Date.now(),
            };
            setTableData([...tableData, newItem]);
            message.success('Record added');
        }
        handleCancel();
    };

    const handleDelete = (key: React.Key) => {
        const updated = tableData.filter((item) => item.key !== key);
        setTableData(updated);
        message.success('Record deleted');
    };

    const columns = [
        { title: 'User ID', dataIndex: 'userId', key: 'userId' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Company', dataIndex: 'company', key: 'company' },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: any) => (
                <Flex gap="middle">
                    <EditOutlined
                        onClick={() => showModal(record)}
                        className="text-blue-500 cursor-pointer"
                    />
                    <Popconfirm
                        title="Are you sure to delete this user?"
                        onConfirm={() => handleDelete(record.key)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined className="text-red-500 cursor-pointer" />
                    </Popconfirm>
                </Flex>
            ),
        },
    ];

    return (
        <>
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
                                    Setup
                                </span>
                            ),
                        },
                        {
                            title: (
                                <span 
                                    className="text-gray-400">
                                    ApiProps
                                </span>
                            ),
                        },
                    ]}
                />
            </div>

            <div className="flex justify-between mx-20 mt-4">
                <Flex className="items-center" gap="small">
                    <Input
                        placeholder="Search table"
                        value={searchedText}
                        onChange={(e) => setSearchedText(e.target.value)}
                        prefix={<SearchOutlined className="text-gray-400" />}
                        allowClear
                    />
                    <Button
                        className="bg-cyan-500 text-white hover:bg-cyan-600"
                        onClick={() => setSearchedText(searchedText)}
                    >
                        Search
                    </Button>
                </Flex>
                <Flex align="center" gap="middle">
                    <Button
                        className="bg-cyan-500 text-white hover:bg-cyan-600"
                        icon={<PlusCircleOutlined />}
                        onClick={() => showModal()}
                    >
                        Add
                    </Button>
                </Flex>
            </div>

            {/* Table */}
            <div className="mr-5 my-9 ml-10 rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={filteredData}
                    pagination={{ pageSize: 5 }}
                    rowKey="key"
                />
            </div>

            <Modal
                title={editingRecord ? "Edit User" : "Add User"}
                open={isModalOpen}
                onCancel={handleCancel}
                onOk={() => form.submit()}
                okText={editingRecord ? "Update" : "Add"}
            >
                <Form form={form} layout="vertical" onFinish={handleFinish}>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: "Please enter name" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: "Please enter email" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="company"
                        label="Company"
                        rules={[{ required: true, message: "Please enter company" }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ChildTable;
