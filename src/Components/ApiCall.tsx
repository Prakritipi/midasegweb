import { Table, Button, Input } from "antd";
import { useState, useEffect } from "react";
import axios from 'axios';
// import NavsideBar from "./NavsideBar";

const ApiCall = () => {
  const [data, setData] = useState([]);

  const [userDetails, setUserDetails] = useState({
    userId: '',
    title: '',
    id: ''
  });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const apiUsers = response.data.slice(0, 10).map((post, index) => ({
          key: post.id,
          sn: index + 1,
          userId: post.userId,
          title: post.title,
          id: post.id,
        }));
        setData(apiUsers);
      })
      .catch(error => {
        console.error("Failed to fetch users:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleAddUser = () => {
    if (!userDetails.userId || !userDetails.title || !userDetails.id) {
      alert('Please fill in all required fields.');
      return;
    }

    const newUser = {
      userId: userDetails.userId,
      id: userDetails.id,
      title: userDetails.title,
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', newUser)
      .then(response => {
        const addedUser = {
          key: response.data.id,
          userId: response.data.userId,
          title: response.data.title,
          id: response.data.id,
        };
        setData(prev => [...prev, addedUser]);
        setUserDetails({ userId: '', title: '', id: '' });
        alert('User added (simulated)!');
      })
      .catch(error => {
        console.error("Failed to add user:", error);
      });
  };

  const columns = [
    { title: "S.N.", dataIndex: "sn", key: "sn" },
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "User ID", dataIndex: "userId", key: "userId" },
    { title: "Title", dataIndex: "title", key: "title" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">API CRUD with Ant Design Table</h1>

      <div className="mb-4 space-y-2">
        <Input name="id" value={userDetails.id} onChange={handleChange} placeholder="ID" />
        <Input name="title" value={userDetails.title} onChange={handleChange} placeholder="Title" />
        <Input name="userId" value={userDetails.userId} onChange={handleChange} placeholder="User ID" />
        <Button type="primary" onClick={handleAddUser}>Add User</Button>
      </div>

      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default ApiCall;
