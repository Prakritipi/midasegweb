// src/components/NavsideBar.tsx
import React from 'react';
import { Menu, Tooltip } from 'antd';
import {
    UsergroupAddOutlined,
    SettingOutlined,
    AuditOutlined,
    HomeOutlined,
    RightOutlined,
    SearchOutlined,
    UserOutlined

} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const text = <span>Audit Logs</span>;

const NavsideBar = () => {
    const items = [
        {
            key: 'sub1',
            icon: <UsergroupAddOutlined style={{ fontSize: '16px', color: '#0ABAB5' }} />,
            children: [
                { key: '3', label: (<Link to="usersetupuser">User</Link>) },
                { key: '4', label: (<Link to="userroless">Role</Link>) },
            ],
        },
        {
            key: 'sub2',
            icon: <SettingOutlined style={{ fontSize: '16px', color: '#0ABAB5' }} />,
            label: '',
            children: [
                { key: '5', label: 'Organization' },
                { key: '6', label: 'Sub Organization' },
                { key: '7', label: 'Department' },
                { key: '8', label: 'Salutation' },
                { key: '9', label: 'Designation' },
                { key: '10', label: 'Position' },
                { key: '11', label: 'Employee' },
            ],
        },
        {
            key: 'sub3',
            icon: <Tooltip placement="rightTop" title={text}><AuditOutlined style={{ fontSize: '16px', color: '#0ABAB5' }} /></Tooltip>,
            children: [],
        },
    ];

    return (
        <>
        <div>
            {/*Top Navbar */}
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
                                className="w-full pl-8 py-2 text-xs" />
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
        <div className='fixed bg-white top-14 left-0 h-screen p-0 m-0 z-50 border-r-2 border-gray-100'>
                <Menu style={{ width: 50 }} mode="vertical" items={items} expandIcon={false} />
            </div>
            </>
    );
};

export default NavsideBar;
