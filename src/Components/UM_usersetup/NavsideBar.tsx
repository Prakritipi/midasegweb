import React from 'react';
import { Menu, Tooltip } from 'antd';
import {
    UsergroupAddOutlined,
    SettingOutlined,
    AuditOutlined,
    SearchOutlined,
    UserOutlined,
    ApiOutlined

} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Apicruduse from "./Apicruduse";



const text = <span>Audit Logs</span>;

const NavsideBar = () => {
    const navigate = useNavigate();
    const items = [
        {
            key: 'sub1',
            label: 'User Setup',
            icon: <UsergroupAddOutlined style={{ fontSize: '16px', color: '#0ABAB5' }} />,
            children: [
                { key: '3', label: (<Link to="/dashboard/usersetupuser">User</Link>) },
                { key: '4', label: (<Link to="/dashboard/userroless">Role</Link>) },
            ],
        },
        {
            key: 'sub2',
            icon: <SettingOutlined style={{ fontSize: '16px', color: '#0ABAB5' }} />,
            label: 'Organization Setup',
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
            label: 'Audit Logs',
            children: [],
        },
        {
            key: 'sub4',
            icon: <ApiOutlined style={{ fontSize: '16px', color: '#0ABAB5' }} />,
            label: 'API Examples',
            children: [
                { key: '1', label: (<Link to="/dashboard/apicruduse">ApiCrudUse</Link>) },
                { key: '2', label: (<Link to="/dashboard/apicall">ApiCall</Link>) },
            ],
        }

    ];

    return (
        <>
            <div>
                {/*Top Navbar */}
                <div className='fixed bg-white top-0 left-0 w-full m-0 p-2 z-50 border-b-2 border-gray-300'>
                    <div className='nav-bar'>
                        <div className='w-full flex flex-row justify-between left-0 p-0 m-0'>
                            <div className='logo items-start'>
                                <Link to="/dashboard">
                                    <img
                                        src="../../../MHSDark.png"
                                        alt="MIDAS Logo"
                                        className="w-[70px] mt-0 pt-0 left-0 cursor-pointer"
                                    />
                                </Link>

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

            </div>
        </>
    );
};

export default NavsideBar;
