import { Form, Select, Input } from "antd";

const { Option } = Select;

const SupplierForm: React.FC = () => (
    <Form layout="vertical" className="grid grid-cols-3 gap-4 mb-4">
        <Form.Item label="Store">
            <Select placeholder="Select Store">
                <Option value="Store A">Store A</Option>
                <Option value="Store B">Store B</Option>
            </Select>
        </Form.Item>
        <Form.Item label="Supplier">
            <Select placeholder="Select Supplier">
                <Option value="Supplier A">Supplier A</Option>
                <Option value="Supplier B">Supplier B</Option>
            </Select>
        </Form.Item>
        
    </Form>
);

export default SupplierForm;
