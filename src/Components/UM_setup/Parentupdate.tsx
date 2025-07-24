import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import { useNavigate} from 'react-router-dom';
import { HomeOutlined, RightOutlined } from '@ant-design/icons';
import Childpath from './Childupdate';

type Fruit = {
    id: number;
    name: string;
    color: string;
    label: string;
};

const Parentupdate = () => {
    const navigate = useNavigate();

    const [fruits, setFruits] = useState<Fruit[]>([
        { id: 1, name: "Apple", color: "Red", label: "Fruits" },
        { id: 2, name: "Banana", color: "Yellow", label: "Fruits" },
        { id: 3, name: "Grapes", color: "Purple", label: "Fruits" },
        { id: 4, name: "Orange", color: "Orange", label: "Fruits" },
    ]);

    const handleUpdate = (updatedData: Fruit[]) => {
        setFruits(updatedData);
    };

    return (
        <>
            <div className="ml-14 mt-4 mb-3 font-semibold text-xs">
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
                            title: <span className="text-gray-400">Setup</span>,
                        },
                        {
                            title: (
                                <span
                                    className="text-gray-400 cursor-pointer">
                                    Props Use
                                </span>
                            ),
                        },
                    ]}
                />
            </div>

            <div className="p-6 max-w-5xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">Parent Component</h2>
                <Childpath data={fruits} onUpdate={handleUpdate} />
            </div>
        </>
    );
};

export default Parentupdate;
