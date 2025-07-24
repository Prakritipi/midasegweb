import React, {useEffect} from 'react'
import axios from "axios";
import { Spin } from "antd";
import ChildTable from './ChildTable'; 

const PropsCallback = () => {

    const [data, setData] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [selectedRow, setSelectedRow] = React.useState<any>(null);


    useEffect(() => {
        setLoading(true);
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                const formatted = res.data.slice(0, 10).map((users: { id: any; name: any; email: any; company: { name: any; }; }, index: any) => ({
                    key: index,
                    userId: users.id,
                    name: users.name,
                    email: users.email,
                    company: users.company.name
                }));
                setData(formatted);
            })
            .catch((error: any) => {
                console.error("Error fetching data:", error);
                // message.error("Failed to fetch data"); // Uncomment if 'message' is defined
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleSelectedRow = (rows: any[]) => {
        setSelectedRow(rows);
    }

    return (
        <>
            <div className="p-6 max-w-5xl mx-auto">
                <h2 className='text-xl font-semibold mb-4'>Parent Component</h2>

            { loading ? (
                    <Spin />
                ) : (
                    <ChildTable
                        data={data}
                        onSelectedRowsChange={handleSelectedRow}
                        />
                )}

                <div>
                    <h3 className='text-lg font-medium'>Selected Rows</h3>
                    <pre>{JSON.stringify(selectedRow, null,2)}</pre>
                </div>
            </div>
        </>
    )
}

export default PropsCallback