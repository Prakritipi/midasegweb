import { useState } from 'react';
import {
    HomeOutlined,
    RightOutlined,
    SearchOutlined,
    PlusCircleOutlined,
} from '@ant-design/icons';
import { Button, Input, Flex, Breadcrumb } from 'antd';
import { NewTask } from './NewTask';
import NavsideBar from './NavsideBar';
import { useNavigate } from 'react-router-dom';

const Userroless = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([
        {
            key: 1,
            sn: '',
            name: '',
            Username: '',
            Email: '',
            Action: '',
        },
    ]);

    const columns = [
        {
            title: 'S.N.',
            dataIndex: 'sn',
            key: 'sn',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Username',
            dataIndex: 'Username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'email',
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'action',
        },
    ];

    function setShowUserForm(arg0: boolean): void {
        throw new Error('Function not implemented.');
    }

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
                                <span className="text-gray-400">
                                    Role
                                </span>
                            ),
                        },
                    ]}
                />
            </div>

            <div className="w-full flex flex-row justify-between">
                <div className="ml-10 mt-2 p-0 h-14">
                    <div className="col-span-2 items-end">
                        <Input
                            placeholder="Search table"
                            suffix={
                                <Button className="mr-0" color="cyan" variant="solid">
                                    Search
                                </Button>
                            }
                            prefix={<SearchOutlined className="text-gray-400" />}
                        />
                    </div>
                </div>
                <Flex className="mr-4" gap="small" wrap>
                    <Button
                        color="cyan"
                        variant="solid"
                        icon={<PlusCircleOutlined />}
                        onClick={() => setShowUserForm(true)}
                    >
                        Add
                    </Button>
                </Flex>
            </div>

            <div className="mr-5 ml-10 rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <NewTask />
            </div>
        </>
    );
};

export default Userroless;
