import { useState } from 'react';
import {
    EditOutlined,
    DeleteOutlined,
    SearchOutlined,
    HomeOutlined,
    RightOutlined,
    PlusCircleOutlined,
} from '@ant-design/icons';
import {
    Button,
    Table,
    Input,
    Flex,
    Popconfirm,
    Form,
    message,
    Modal,
    Breadcrumb,
} from 'antd';
import NavsideBar from './NavsideBar';
import { dataSource } from './data';
import { useNavigate } from 'react-router-dom';

const Usersetupuser = () => {
    const navigate = useNavigate();

    const [data, setData] = useState(dataSource);
    const [searchedText, setSearchedText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingRecord, setEditingRecord] = useState<any>(null);
    const [form] = Form.useForm();

    const filteredData = data.filter((item) =>
        Object.values(item).some((field) =>
            String(field).toLowerCase().startsWith(searchedText.toLowerCase())
        )
    );

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
        const updated = data.filter((item) => item.id !== id);
        setData(updated);
        message.success('User deleted');
    };

    const handleFormSubmit = () => {
        form.validateFields().then((values) => {
            if (editingRecord) {
                const updated = data.map((item) =>
                    item.id === editingRecord.id ? { ...editingRecord, ...values } : item
                );
                setData(updated);
                message.success('User updated');
            } else {
                const newUser = {
                    ...values,
                    id: Date.now(),
                    key: Date.now(),
                };
                setData([...data, newUser]);
                message.success('User added');
            }

            form.resetFields();
            setEditingRecord(null);
            setIsModalOpen(false);
        });
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Actions',
            render: (_: any, record: any) => (
                <div className="space-x-4">
                    <EditOutlined
                        style={{ color: '#1677ff' }}
                        onClick={() => handleEdit(record)}
                    />
                    <Popconfirm
                        title="Are you sure you want to delete?"
                        onConfirm={() => handleDelete(record.id)}
                    >
                        <DeleteOutlined style={{ color: 'red' }} />
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
                                    onClick={() => navigate('/dashboard')}
                                >
                                    User Management
                                </span>
                            ),
                        },
                        {
                            title: (
                                <span
                                    className="text-gray-400 cursor-pointer"
                                    onClick={() => navigate('/dashboard/usersetupuser')}
                                >
                                    User 
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
                    <Button className="bg-cyan-500 text-white hover:bg-cyan-600">
                        Search
                    </Button>
                </Flex>
                <Button
                    className='bg-cyan-500 text-white hover:bg-cyan-600'
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
                    pagination={{ pageSize: 8 }}
                    rowKey="id"
                />
            </div>

            {/* Modal Form */}
            <Modal
                title={editingRecord ? 'Edit User' : 'Add New User'}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onOk={handleFormSubmit}
                okText={editingRecord ? 'Update' : 'Add'}
            >
                <Form layout="vertical" form={form}>
                    <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
                        <Input placeholder="Enter full name" />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                        <Input placeholder="Enter email address" />
                    </Form.Item>
                    <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
                        <Input placeholder="Enter phone number" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Usersetupuser;
