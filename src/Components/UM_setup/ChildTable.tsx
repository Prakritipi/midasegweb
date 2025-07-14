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
} from "antd";
import {
    HomeOutlined,
    RightOutlined,
    SearchOutlined,
    PlusCircleOutlined,
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';

const ChildTable = ({data,onSelectedRowsChange }: {data: any[], onSelectedRowsChange: (rows: any[]) => void,}) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [searchedText, setSearchedText] = useState('');
    const [tableData, setTableData] = useState(data);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingRecord, setEditingRecord] = useState<any>(null);
    const [form] = Form.useForm();

    // Filter table data by search
    const filteredData = tableData.filter((item) =>
        Object.values(item).some((value) =>
            String(value).toLowerCase().startsWith(searchedText.toLowerCase())
        )
    );

    // Row selection logic
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
            {/* Breadcrumb */}
            <div className="flex flex-row items-center space-x-1 font-semibold mt-2 ml-[70px]">
                <HomeOutlined className="text-md" />
                <RightOutlined className="text-gray-400 text-xs" />
                <span className="text-gray-400 text-xs">DashBoard</span>
                <RightOutlined className="text-gray-400 text-xs" />
                <span className="text-gray-400 text-xs">Setup</span>
                <RightOutlined className="text-gray-400 text-xs" />
                <span className="text-gray-400 text-xs">ApiProp</span>
            </div>

            {/* Search and Add */}
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
                <Button
                    className="bg-cyan-500 text-white hover:bg-cyan-600"
                    icon={<PlusCircleOutlined />}
                    onClick={() => showModal()}
                >
                    Add
                </Button>
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

            {/* Modal for Add/Edit */} 
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
