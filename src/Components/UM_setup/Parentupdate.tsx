import React, { useState } from 'react';
import Childupdate from './Childupdate';

type Fruit = {
    id: number;
    name: string;
    color: string;
    label: string;
};

function Parentupdate() {
    const [fruits, setFruits] = useState([
        {
            id: 1,
            name: "Apple",
            color: "Red",
            label: "Fruits"
        },
        {
            id: 2,
            name: "Banana",
            color: "Yellow",
            label: "Fruits"
        },
        {
            id: 3,
            name: "Grapes",
            color: "Purple",
            label: "Fruits"
        },
        {
            id: 4,
            name: "Orange",
            color: "Orange",
            label: "Fruits"
        },
    ]);

    const handleUpdate = (newData: Fruit[]) => {
        setFruits(newData); 
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h2>Parent Component</h2>
            <Childupdate data={fruits} onUpdate={handleUpdate} />
        </div>
    );
}

export default Parentupdate;
