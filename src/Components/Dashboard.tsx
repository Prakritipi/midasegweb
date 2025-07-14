// import React from 'react'
import {
    RightOutlined,
    UserOutlined,
    PlusOutlined,
    UserAddOutlined,
    SearchOutlined,
    MedicineBoxOutlined,
    CalculatorOutlined,
    SmileOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
// import { Menu } from 'antd';
import { Link } from 'react-router-dom';
// import Usersetupuser from './usersetupuser';
// import Userroless from './userroless';
// import AnotherUser from './anotheruser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear,faBed, faUserPlus, faFlask,faBriefcaseMedical, faUserTie } from '@fortawesome/free-solid-svg-icons';




const Dashboard = () => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'User Setup',
            children: [
                {
                    key: '1-1',
                    label: (
                        <Link to="usersetupuser">
                            User
                        </Link>
                    ),
                },
                {
                    key: '1-2',
                    label: (
                        <Link to="./userroless">
                            Role
                        </Link>
                    ),
                },
            ],
        },
        {
            key: '2',
            label: 'Setup',
            children: [
                {
                    key: '2-1',
                    label: (
                        <Link to="propscallback">
                            ApiProp
                        </Link>
                    ),
                },
                
            ],
        },
        {
            key: '3',
            label: 'Audit Logs',
        },
    ];
    const admission: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/profile' className='flex justify-between'>
                    Admissions <RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Admissions & Discharge <RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Setup <RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '4',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Report <RightOutlined className='ml-2' />
                </a>
            ),
        },
    ];

    const patient: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/profile' className='flex justify-between'>
                    Dashboard
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Patient Administration <RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Patient Billing <RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '4',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Appointments <RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '5',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Setup <RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '6',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Approval List<RightOutlined className='ml-2' />
                </a>
            ),
        },

    ];

    const investigation: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/profile' className='flex justify-between'>
                    Dashboard
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Pathology<RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Histology <RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '4',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Cardiology <RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '5',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Enthoscopy <RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '6',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Setup<RightOutlined className='ml-2' />
                </a>
            ),
        },

    ];

    const pharmacy: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/profile' className='flex justify-between'>
                    Dashboard
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Sales<RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Purchase <RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '4',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Purchase Report <RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '5',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Stock <RightOutlined className='ml-2' />
                </a>
            ),
        },
        {
            key: '6',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://example.com/password' className='flex justify-between'>
                    Stock Report<RightOutlined className='ml-2' />
                </a>
            ),
        },

    ];


    const userin: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target='' rel='noopener noreferrer' href='./src/components/login.tsx' className='flex justify-between'>
                    User <RightOutlined className='ml-2 ' />
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com' className='flex justify-between'>
                    Role <RightOutlined className='ml-2' />
                </a>
            ),
        },

    ];






    return (
        <main className='px-[40px] py-[40px] my-[22px] mx-[42px] '>
            <div className='fixed bg-white top-0 left-0 w-full m-0 p-2 z-50 border-b-2 border-gray-300'>
                <div className='nav-bar'>
                    <div className='w-full flex flex-row justify-between left-0 p-0 m-0'>
                        <div className='logo items-start'>
                            <img src='MHSDark.png' alt='MIDAS Logo' className="w-[70px] mt-0 pt-0 left-0" />
                        </div>

                        <div className="relative w-96">
                            <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
                                <SearchOutlined />
                            </span>
                            <input
                                type="text"
                                placeholder="Search for modules, sub-modules, setting, etc (ctrl+e)"
                                className="w-full pl-8 py-2 border border-gray-100 rounded-lg text-xs"
                            />
                        </div>

                        <button className='flex text-sm items-center text-black font-normal border border-black rounded-md mr-0 m-1 pr-6'>
                            <UserOutlined className='mr-1 px-2' /> Superadmin
                        </button>
                    </div>
                </div>

            </div>
            <div className='fixed w-full top-12 bg-white flex justify-between font-light mt-1 px-6 z-40'>

                <div>
                    <h3 className='text-s font-semibold text-[#0f1b4a] p-2 mt-2'>Modules</h3>
                </div>
                <button className='flex text-sm items-center text-black  font-normal border border-[#1b1b1b]text-base border-black rounded-md mr-36 m-2 p-2 py-0'>
                    All Modules <RightOutlined className='ml-2 py-0' />
                </button>
            </div>

            <div className='grid md:grid-cols-4 items-center mt-10'>

                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#e0dbdb] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                                <FontAwesomeIcon icon={faUserGear} style={{ color: "#FFD43B" }} />                     </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>User Management </h1>
                            <Dropdown menu={{ items }} placement='topLeft' arrow>
                                <h3>User Setup Audit Logs</h3>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <div className='m-2 p-5 flex items-center hover:shadow-md'>

                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <FontAwesomeIcon icon= {faBed} style={{color: "#29477f",}} />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Admission And Discharge </h1>
                            <Dropdown menu={{ items: admission }} placement='top' arrow>
                                <h3> Admission &</h3>
                            </Dropdown>
                        </div>
                    </div>

                </div>

                <div className='m-2 p-5 flex items-center hover:shadow-md'>

                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <FontAwesomeIcon icon= {faUserPlus} style={{color: "#509558"}} />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Patient Administration </h1>
                            <Dropdown menu={{ items: patient }} placement="topRight" arrow>
                                <h3>Dashboard Patient</h3>
                            </Dropdown>
                        </div>
                    </div>

                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>

                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <FontAwesomeIcon icon={faFlask} style={{color: "#74C0FC",}} />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Investigation </h1>
                            <Dropdown menu={{ items: investigation }} placement='top' arrow>
                                <h3>Dashboard Pathalogy Histology</h3>
                            </Dropdown>
                        </div>
                    </div>

                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <FontAwesomeIcon icon= {faBriefcaseMedical}  style={{color: "#6cb3ea",}} />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Pharmacy</h1>
                            <Dropdown menu={{ items: pharmacy }} placement='topLeft' arrow>
                                <h3>Dashboard Sales Purchase Purchase Stock</h3>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-700'>
                            <CalculatorOutlined />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Account</h1>
                            <h3>Dashboard Account</h3>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <FontAwesomeIcon icon= {faUserTie}  style={{color: "#273959",}} />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Agent Portal</h1>
                            <h3>Dashboard Patient</h3>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <SmileOutlined />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Account </h1>
                            <h3>Dashboard Account</h3>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'></div>
                    <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                        <SmileOutlined />
                    </div>
                    <div className='inside-text'>
                        <h1 className='text-[#0f1b4a] font-semibold'>Clinic Management </h1>
                        <h3>OPD List Ward List OT</h3>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <SmileOutlined />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Canteen Management </h1>
                            <h3>Sales Setup</h3>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <SmileOutlined />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Account </h1>
                            <h3>Dashboard </h3>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <SmileOutlined />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Claim Management </h1>
                            <h3>Claim</h3>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <SmileOutlined />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Reception</h1>
                            <h3>Dashboard </h3>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <SmileOutlined />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Blood Bank </h1>
                            <h3>Dashboard </h3>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <UserOutlined />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>My Profile</h1>
                            <h3>My Profile</h3>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <SmileOutlined />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'> Physiotherapy</h1>
                            <h3>Dashboard</h3>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <SmileOutlined />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>MIS Report </h1>
                            <h3>Patient Administration</h3>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <SmileOutlined />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>PIS</h1>
                            <h3>Dashboard</h3>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <SmileOutlined />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Mero Doctor </h1>
                            <h3>Dashboard</h3>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            {' '}
                            <SmileOutlined />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Assets Management</h1>
                            <h3>Dashboard</h3>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-5 flex items-center hover:shadow-md'>
                    <div className='md:flex m-0 p-0 xs:flex flex-row'>
                        <div className='border border-[#bcb9b9] mr-1 p-2 w-[45px] h-[45px] flex items-center justify-center rounded font-medium text-[25px] text-green-600'>
                            <SmileOutlined />
                        </div>
                        <div className='inside-text'>
                            <h1 className='text-[#0f1b4a] font-semibold'>Form Setting </h1>
                            <h3>Setup</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fixed bottom-0 w-full bg-white shadow-md'>
                <h3>My Favorite</h3>

                <div className='grid md:grid-cols-5 sm:grid-cols-4 items-center m-2'>
                    <div className='md:flex m-0 p-0'>
                        <div className='mr-[5px] p-[20px] w-[45px] h-[45px] items-center justify-center flex rounded-[5px] text-[25px]'>
                            <UserAddOutlined />
                        </div>
                        <div className='dinside-text'>
                            <h1>User Management</h1>
                        </div>
                    </div>

                    <div className='md:flex m-0 p-0'>
                        <div className='mr-[5px] p-[20px] w-[45px] h-[45px] items-center justify-center flex rounded-[5px] text-[25px]'>
                            <UserAddOutlined />
                        </div>
                        <div className='dinside-text'>
                            <h1>Patient Administration</h1>
                        </div>
                    </div>

                    <div className='md:flex m-0 p-0'>
                        <div className='mr-[5px] p-[20px] w-[45px] h-[45px] items-center justify-center flex rounded-[5px] text-[25px]'>
                            <UserAddOutlined />
                        </div>
                        <div className='dinside-text'>
                            <h1>Account</h1>
                        </div>
                    </div>

                    <div className='md:flex m-0 p-0'>
                        <div className='mr-[5px] p-[20px] w-[45px] h-[45px] items-center justify-center flex rounded-[5px] text-[25px]'>
                            <SearchOutlined />
                        </div>
                        <div className='dinside-text'>
                            <h1>Investigation</h1>
                        </div>
                    </div>

                    <div className='md:flex m-0 p-0'>
                        <div className='mr-[5px] p-[20px] w-[45px] h-[45px] items-center justify-center flex rounded-[5px] text-[25px]'>
                            <MedicineBoxOutlined />
                        </div>
                        <div className='dinside-text'>
                            <h1>Pharmacy</h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;


