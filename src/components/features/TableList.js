import { useSelector } from "react-redux";
import { getTables } from "../../redux/tablesRedux";
import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const TableList = () => {
    const tables = useSelector(getTables);

    if (!tables.length) return <p>Loading...</p>;

    return (
        <ListGroup as="ul" className="list-group-flush">
            {tables.map(table => (
                <ListGroup.Item
                    as="li"
                    key={table.id}
                    className="d-flex justify-content-between align-items-start border-bottom"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Table {table.id} - Status: {table.status}</div>
                    </div>
                    <Button as={Link} bg="primary" to={`/table/${table.id}`}>
                        Show more
                    </Button>
                </ListGroup.Item>))}
        </ListGroup>
    );
};

export default TableList
