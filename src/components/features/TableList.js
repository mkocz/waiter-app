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
                    className="d-flex justify-content-between align-items-center border-bottom ps-0"
                >
                    <div className="me-auto">
                        <div ><span className="fw-bold fs-4 me-1">Table {table.id}</span> - <span className="fw-bold ms-1">Status:</span> {table.status}</div>
                    </div>
                    <Button as={Link} bg="primary" to={`/table/${table.id}`}>
                        Show more
                    </Button>
                </ListGroup.Item>))}
        </ListGroup>
    );
};

export default TableList
