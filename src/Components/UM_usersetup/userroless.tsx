import { useState } from 'react';
import {
    HomeOutlined,
    RightOutlined,
    SearchOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';
import { Button, Input, Flex } from 'antd';
import { NewTask } from './NewTask';
import NavsideBar from './NavsideBar'


const text = <span> Audit Logs</span>

const Userroless = () => {
    const [data, setData] = useState([
        {
            key: 1,
            sn:"",
            name: "",
            Username: "",
            Email: "",
            Action: ""
        },
    ]);

    const columns = [
        {
            title: 'S.N.',
            dataIndex: 'sn',
            key: 'sn'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Username',
            dataIndex: 'Username',
            key: 'username'
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'email'
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'action'
        },
    ];


    function setShowUserForm(arg0: boolean): void {
        throw new Error('Function not implemented.');
    }

    return (
            <>
                {<NavsideBar/>}
                    {/* Breadcrumb Navigation */}
                    <div className='flex flex-row items-center space-x-1 font-semibold mt-4 mb-3 ml-9'>
                        <HomeOutlined className='text-md' />
                        <RightOutlined className=' text-gray-400 text-xs ' />
                        <span className=' text-gray-400 text-xs '>User Management</span>
                        <RightOutlined className=' text-gray-400 text-xs ' />
                        <span className=' text-gray-400 text-xs '>User Setup</span>
                        <RightOutlined className='text-xs text-gray-400 ' />
                        <span className=' text-gray-400 text-xs '>Role</span>
                    </div>

                <div className='w-full flex flex-row justify-between'>
                    <div className=' ml-10 mt-2 p-0 h-14'>
                        <div className='col-span-2 items-end '>
                            <Input placeholder="Search table" suffix={<Button className="mr-0" color='cyan' variant='solid'>Search</Button>} prefix={<SearchOutlined className='text-gray-400' />} />
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

                <div className='mr-5 ml-10 rounded-lg border border-gray-200 shadow-sm overflow-hidden'>
                    <NewTask/>
                </div>
            </>
    );
};



            export default Userroless;

