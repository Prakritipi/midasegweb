import React, { useState } from 'react';
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
import { Button, Table, Flex, Tooltip, Input, Menu } from 'antd'; // Removed unused imports
import type { MenuProps } from 'antd'; // Keep only necessary types
import { Link } from 'react-router-dom';
import NavsideBar from './NavsideBar';



const text = <span>Audit Logs</span>;

const Usersetupuser = () => {
    const [showUserForm, setShowUserForm] = useState(false); // Controls visibility of the combined user form modal

    // Combined state for all user details
    const [userDetails, setUserDetails] = useState({
        name: '',
        username: '',
        id: '',
        email: '',
        phone: '',
        department: ''
    });

    // State for the table data
    const [data, setData] = useState([
        {
            key: 1,
            sn: 1,
            name: "AMRENDRA KUMAR MAHATO ",
            Username: "amrendram",
            Email: "amrendram@org133.com",
            Action: '...'
        },
        {
            key: 2,
            sn: 2,
            name: "BIBEK POKHAREL",
            Username: "bibekp",
            Email: "bibekp@org133.com",
            Action: '...'
        },
        {
            key: 3,
            sn: 3,
            name: "MANOJ LAMICHHANE ",
            Username: "nmcthmanoj",
            Email: "manoj@gmail.com",
            Action: '...'
        },
        {
            key: 4,
            sn: 4,
            name: "ALEENA BASKOTA ",
            Username: "nmcthalenna",
            Email: "afeena@gmail.com",
            Action: '...'
        },
        {
            key: 5,
            sn: 5,
            name: "abhiranjan adhikari ",
            Username: "abhiranjan",
            Email: "abhiranjan@ORG133.com",
            Action: '...'
        },
        {
            key: 6,
            sn: 6,
            name: "RAUNAK NIROULA ",
            Username: "raunakn",
            Email: "raunak@gmail.com",
            Action: '...'
        },
        {
            key: 7,
            sn: 7,
            name: "SANDEEP ACHARYA ",
            Username: "sandeepa",
            Email: "sandeepa@org133.com",
            Action: '...'
        },
        {
            key: 8,
            sn: 8,
            name: "ANU SHIWA",
            Username: "anuk",
            Email: "anuk@org133.com",
            Action: '...'
        },
        {
            key: 9,
            sn: 9,
            name: "MAHESH GAUTAM ",
            Username: "maheshm",
            Email: "maheshm@org133.com",
            Action: '...'
        },
        
    ]);

    // This is the missing handleChange function
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle adding a new user (combines basic and additional submission logic)
    const handleAddUser = () => {
        // Validate required basic fields
        if (!userDetails.name || !userDetails.username || !userDetails.id) {
            alert('Please fill in all required basic user details (Full Name, Username, ID Number).');
            return;
        }

        // Validate email if it's considered required for any user
        if (!userDetails.email) {
            alert('Please fill in the Email ID.');
            return;
        }

        const newUser = {
            key: data.length + 1,
            sn: data.length + 1,
            name: userDetails.name,
            Username: userDetails.username,
            Email: userDetails.email, // Now directly from the combined state
            Action: '...'
        };

        setData(prev => [...prev, newUser]); // Add the new user to the table
        setShowUserForm(false); // Close the modal
        setUserDetails({ name: '', username: '', id: '', email: '', phone: '', department: '' }); // Reset form fields
        alert('New user added successfully and added to table!');
    };

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
            children: [
                { key: '3', label: (<Link to="usersetupuser">User</Link>), },
                { key: '4', label: (<Link to="userroless">Role</Link>) },
            ],
        },
        {
            key: 'sub2',
            icon: <SettingOutlined style={{ fontSize: '16px', color: '#0ABAB5' }} />,
            label: '', // Label is empty, so the icon will be the primary visual
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
            icon: <Tooltip placement="rightTop" title={text}><AuditOutlined style={{ fontSize: '16px', color: '#0ABAB5' }} /></Tooltip>,
            children: [],
        },
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };

    return (
        <>
            {<NavsideBar/>}
            {/* <div> */}
                {/* Top Navbar */}
                {/* <div className='fixed bg-white top-0 left-0 w-full m-0 p-2 z-50 border-b-2 border-gray-300'>
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
                                    className="w-full pl-8 py-2 text-xs"
                                />
                            </div>

                            <button className='flex text-sm items-center text-black font-normal border border-black rounded-md mr-0 m-1 pr-6'>
                                <UserOutlined className='mr-1 px-2' /> Superadmin
                            </button>
                        </div>
                    </div>
                </div> */}

                {/* Sidebar Icons */}
                {/* <div className='fixed bg-white top-14 left-0 h-screen p-0 m-0 z-50 border-r-2 border-gray-100'>
                    <div className='flex flex-col items-start space-y-1'>
                        <Menu style={{ width: 50 }} mode="vertical" items={items} expandIcon={false} />
                    </div>
                </div> */}

                {/* Breadcrumb Navigation */}
                {/* <div className='flex flex-row items-center space-x-1 font-semibold mt-[65px] ml-[70px]'>
                    <HomeOutlined className='text-md' />
                    <RightOutlined className=' text-gray-400 text-xs ' />
                    <span className=' text-gray-400 text-xs '>User Management</span>
                    <RightOutlined className=' text-gray-400 text-xs ' />
                    <span className=' text-gray-400 text-xs '>User Setup</span>
                    <RightOutlined className='text-xs text-gray-400 ' />
                    <span className=' text-gray-400 text-xs '>User</span>
                </div>
            </div> */}

            <div className='w-full flex flex-row justify-between'>
                <div className=' ml-20 mt-4 p-0 h-14'>
                    <div className='col-span-2 items-end '>
                        <Input placeholder="Search table" suffix={<Button className="mr-0" color='cyan' variant='solid'>Search</Button>} prefix={<SearchOutlined className='text-gray-400' />} />
                    </div>
                </div>
                {/* The "Add" button in the top right corner */}
                <Flex className="mr-4" gap="small" wrap>
                    <Button
                        color="cyan"
                        variant="solid"
                        icon={<PlusCircleOutlined />}
                        onClick={() => setShowUserForm(true)} // This button opens the combined modal
                    >
                        Add
                    </Button>
                </Flex>
            </div>

            <div className='mr-5 ml-20 mt-4 rounded-lg border border-gray-200 shadow-sm overflow-hidden'>
                {/* <div className='mr-5 ml-20 mt-4 overflow-hidden'> */}
                <Table className='text-12-medium w-full'
                    dataSource={data}
                    columns={columns}
                />
                   {/* <NewTask/> */}
            </div>
            

            {/* Combined User Details Form Modal */}
            {showUserForm && ( // This state now controls the combined modal
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">New User Details</h3>
                        <div className="space-y-6"> {/* Increased spacing for clarity */}
                            {/* Basic Details Section */}
                            <div className="border-b pb-4 mb-4">
                                <h4 className="text-lg font-semibold text-gray-700 mb-4">Basic Information</h4>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={userDetails.name}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter full name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Username *
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            value={userDetails.username}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter username"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ID Number *
                                        </label>
                                        <input
                                            type="text"
                                            name="id"
                                            value={userDetails.id}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter ID number"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Additional Details Section */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700 mb-4">Additional Information</h4>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email ID *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={userDetails.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                            placeholder="Enter email address"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={userDetails.phone}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                            placeholder="Enter phone number"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Department
                                        </label>
                                        <input
                                            type="text"
                                            name="department"
                                            value={userDetails.department}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                            placeholder="Enter department"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <Button
                                    type="primary"
                                    onClick={handleAddUser} // This button now calls the combined function
                                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                                >
                                    Add User to Table
                                </Button>
                                <Button
                                    onClick={() => setShowUserForm(false)} // This will close the combined modal
                                    className="flex-1"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Usersetupuser;


 
