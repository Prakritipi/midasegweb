import React from "react";
import {
  Input,
  Button,
  Table,
  Spin,
  Alert,
  Popconfirm,
  message,
  Modal,
  Form,
  Breadcrumb,
} from "antd";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { fetchUsers } from "./api";
import { useNavigate } from 'react-router-dom';


import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  HomeOutlined,
  RightOutlined,
} from "@ant-design/icons";

const ApiCall = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  type User = {
    id: number;
    name: string;
    email: string;
    company: { name: string };
  };

  const [editingUser, setEditingUser] = React.useState<User | null>(null);
  const [userData, setUserData] = React.useState<User[]>([]);
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  React.useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);

  const deleteUserMutation = useMutation({
    mutationFn: (id: number) =>
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`),
    onSuccess: (_, id) => {
      message.success("User deleted");
      setUserData((prev) => prev.filter((user) => user.id !== id));
    },
    onError: () => {
      message.error("Failed to delete user");
    },
  });

  const updatedUserMutation = useMutation({
    mutationFn: (updatedUser: User) =>
      axios.put(
        `https://jsonplaceholder.typicode.com/users/${updatedUser.id}`,
        updatedUser
      ),
    onSuccess: (_data, updatedUser) => {
      message.success("User updated");
      setUserData((prev) =>
        prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
      setIsModalOpen(false);
      console.log('aaa');
    },
    onError: () => {
      message.error("Failed to update user");
    },
  });

  const filteredData = userData.filter((user) =>
    user.name.toLowerCase().startsWith(searchText.toLowerCase()) ||
    user.email.toLowerCase().startsWith(searchText.toLowerCase()) ||
    user.company.name.toLowerCase().startsWith(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Company",
      dataIndex: ["company", "name"],
      key: "company",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: User) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setEditingUser(record);
              form.setFieldsValue(record);
              setIsModalOpen(true);
            }}
          />
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => deleteUserMutation.mutate(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              danger
              loading={deleteUserMutation.isPending}
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  if (isLoading)
    return (
      <div className="flex justify-center items-center mt-10">
        <Spin tip="Loading..." />
      </div>
    );

  if (isError)
    return (
      <Alert
        message="Error loading users"
        description={error.message}
        type="error"
        className="m-5"
      />
    );

  return (
    <>
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
                >
                  Api Examples
                </span>
              ),
            },
            {
              title: (
                <span
                  className="text-gray-400 cursor-pointer"
                  onClick={() => navigate('/dashboard/ApiCall')}
                >
                  Api Call
                </span>
              ),
            },
          ]}
        />
      </div>

      <div className="w-full flex flex-row justify-between">
        <div className="ml-5 mt-4 p-0 h-14">
          <div className="col-span-2 items-end">
            <Input
              placeholder="Search table"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              prefix={<SearchOutlined className="text-gray-400" />}
            />
          </div>
        </div>
      </div>

      <Table
        className="text-12-medium mx-5 my-4 rounded-lg border border-gray-200 shadow-sm"
        dataSource={filteredData}
        columns={columns}
        rowKey="id"
      />

      <Modal
        title="Edit User"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => {
          form.validateFields().then((values) => {
            const updatedUser = { ...(editingUser || {}), ...values };
            updatedUserMutation.mutate(updatedUser as User);
          });
        }}
        confirmLoading={updatedUserMutation.isPending}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input the user's name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input the user's email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["company", "name"]}
            label="Company"
            rules={[{ required: true, message: "Please input the company name!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ApiCall;
