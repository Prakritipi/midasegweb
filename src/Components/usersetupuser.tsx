import React, { useMemo, useState } from 'react';
import {
    UserOutlined,
    UsergroupAddOutlined,
    SettingOutlined,
    AuditOutlined,
    HomeOutlined,
    RightOutlined,
    SearchOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';
import { Space, ConfigProvider, Button, Table, Flex, Tag, Dropdown, Segmented, Tooltip } from 'antd';
import type { TableColumnsType, MenuProps, TooltipProps } from 'antd';
import { Link } from 'react-router-dom';
import { Input, Menu } from 'antd';

const text = <span>Audit Logs</span>;

const Usersetupuser = () => {

    const data = [
        {
            sn: 1,
            name: "AMRENDRA KUMAR MAHATO ",
            Username: "amrendram",
            Email: "amrendram@org133.com",
            Action: '...'
        },
        {
            sn: 2,
            name: "BIBEK POKHAREL",
            Username: "bibekp",
            Email: "bibekp@org133.com",
            Action: '...'
        },
        {
            sn: 3,
            name: "MANOJ LAMICHHANE ",
            Username: "nmcthmanoj",
            Email: "manoj@gmail.com",
            Action: '...'
        },
        {
            sn: 4,
            name: "ALEENA BASKOTA ",
            Username: "nmcthalenna",
            Email: "afeena@gmail.com",
            Action: '...'
        },
        {
            sn: 5,
            name: "abhiranjan adhikari ",
            Username: "abhiranjan",
            Email: "abhiranjan@ORG133.com",
            Action: '...'
        },
        {
            sn: 6,
            name: "RAUNAK NIROULA ",
            Username: "raunakn",
            Email: "raunak@gmail.com",
            Action: '...'
        },
        {
            sn: 7,
            name: "SANDEEP ACHARYA ",
            Username: "sandeepa",
            Email: "sandeepa@org133.com",
            Action: '...'
        },
        {
            sn: 8,
            name: "ANU SHIWA",
            Username: "anuk",
            Email: "anuk@org133.com",
            Action: '...'
        },
        {
            sn: 9,
            name: "MAHESH GAUTAM ",
            Username: "maheshm",
            Email: "maheshm@org133.com",
            Action: '...'
        },
        {
            sn: 10,
            name: "DR RAM KRISHNA SINGH ",
            Username: "ramkrishna",
            Email: "ramkrishna583.rks@gmail.com",
            Action: '...'
        },
    ];

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

    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
        {
            key: 'sub1',
            icon: <UsergroupAddOutlined style={{ fontSize: '16px', color: '#0ABAB5' }} />,
            // label: 'Navigation One',
            children: [
                { key: '3', label: 'User' },
                { key: '4', label: 'Role' },
            ],
        },
        {
            key: 'sub2',
            icon: <SettingOutlined style={{ fontSize: '16px', color: '#0ABAB5' }} />,
            label: '',
            children: [
                { key: '5', label: 'Organization' },
                { key: '6', label: 'Sub Organization' },
                { key: '11', label: 'Department' },
                { key: '12', label: 'Salutation' },
                { key: '11', label: 'Designation' },
                { key: '12', label: 'Position' },
                { key: '12', label: 'Employee' },

            ],
        },
        {
            key: 'sub3',
            // label: '',
            icon: <div><Tooltip placement="rightTop" title={text}><AuditOutlined style={{ fontSize: '16px', color: '#0ABAB5' }} /></Tooltip></div>,
            children: [

            ],
        },
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };

    const Usersetupuser: React.FC = () => (
        <Menu onClick={onClick} style={{ width: 256 }} mode="vertical" items={items} />
    );

    return (
        <>
            <div>
                {/* Top Navbar */}
                <div className='fixed bg-white top-0 left-0 w-full m-0 p-2 z-50 border-b-2 border-gray-300'>
                    <div className='nav-bar'>
                        <div className='w-full flex flex-row justify-between left-0 p-0 m-0'>
                            <div className='logo items-start'>
                                <img src='../../MHSDark.png' alt='MIDAS Logo' className="w-[70px] mt-0 pt-0 left-0" />
                            </div>

                            <div className="relative w-96">
                                <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
                                    <SearchOutlined />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search for modules, sub-modules, setting, etc (ctrl+e)"
                                    className="w-full pl-8 py-2  text-xs"
                                />
                            </div>

                            <button className='flex text-sm items-center text-black font-normal border border-black rounded-md mr-0 m-1 pr-6'>
                                <UserOutlined className='mr-1 px-2' /> Superadmin
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar Icons */}
                <div className='fixed bg-white top-14 left-0 h-screen p-0 m-0 z-50 border-r-2 border-gray-100'>
                    <div className='flex flex-col items-start space-y-1'>
                        {/* <UsergroupAddOutlined className="text-s items-center border border-[#fbf9f9] m-1 px-4 py-2 hover:bg-teal-300 rounded-md text-teal-500" />
                        <SettingOutlined className="text-s items-center border border-[#f9fbfb] m-1 px-4 py-2 hover:bg-teal-300 rounded-md text-teal-500" />
                        <AuditOutlined className="text-s items-center border border-[#fbf9f9] m-1 px-4 py-2 hover:bg-teal-300 rounded-md text-teal-500" /> */}
                        <Menu style={{ width: 50 }} mode="vertical" items={items} expandIcon={false} />
                    </div>
                </div>

                {/* Breadcrumb Navigation */}
                <div className='flex flex-row items-center space-x-1 font-semibold mt-[65px] ml-[70px]'>
                    <HomeOutlined className='text-md' />
                    <RightOutlined className=' text-gray-400 text-xs ' />
                    <span className=' text-gray-400 text-xs '>User Management</span>
                    <RightOutlined className=' text-gray-400 text-xs ' />
                    <span className=' text-gray-400 text-xs '>User Setup</span>
                    <RightOutlined className='text-xs text-gray-400 ' />
                    <span className=' text-gray-400 text-xs '>User</span>
                </div>
            </div>
            <div className='w-full flex flex-row justify-between  '>
                <div className=' ml-20 mt-4 p-0 h-14'>

                    <div className='col-span-2 items-end '>
                        <Input placeholder="Search table" suffix={<Button className="mr-0" color='cyan' variant='solid'>Search</Button>} prefix={<SearchOutlined className='text-gray-400' />} />
                    </div>

                </div>
                <Flex className="mr-4" gap="small" wrap>
                    <Button color="cyan" variant="solid" icon={<PlusCircleOutlined />}>
                        Add
                    </Button>
                </Flex>
            </div>

            <div className='mr-5 ml-20 mt-4 rounded-lg border border-gray-200 shadow-sm overflow-hidden'>


                <Table className='text-12-medium w-full'
                    dataSource={data}
                    columns={columns}
                >
                </Table>

            </div>
        </>

    );
};

export default Usersetupuser;
