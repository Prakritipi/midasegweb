import { Card } from "antd";

interface Props {
    total: number;
}

const TotalSummary: React.FC<Props> = ({ total }) => (
    <Card className="mt-6">
        <p className="text-lg font-semibold text-right">
            Grand Total: <span className="text-blue-600">Rs. {total.toFixed(2)}</span>
        </p>
    </Card>
);

export default TotalSummary;
