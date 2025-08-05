import { Form, Select} from "antd";

const { Option } = Select;

const suppliers = [
    { name: "Supplier A", vat: 13 },
    { name: "Supplier B", vat: 15 },
];


interface Props {
    onSupplierChange: (vat: number) => void;
}

const SupplierForm: React.FC<Props> = ({ onSupplierChange }) => {
    const handleSupplierSelect = (value: string) => {
        const selected = suppliers.find((s) => s.name === value);
        onSupplierChange(selected?.vat || 0); 
    };

    return (
        <Form layout="vertical" className="grid grid-cols-3 gap-4 mb-4">
            <Form.Item label="Supplier">
                <Select placeholder="Select Supplier" onChange={handleSupplierSelect}>
                    {suppliers.map((supplier) => (
                        <Option key={supplier.name} value={supplier.name}>
                            {supplier.name}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
        </Form>
    );
};

export default SupplierForm;
