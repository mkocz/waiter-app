import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTableById, getTables } from "../../redux/tablesRedux";
import { useEffect } from "react";
import TableForm from "../features/TableForm";

const Table = () => {
    const { id } = useParams();
    const tables = useSelector(getTables);
    const tableData = useSelector(state => getTableById(state, id));
    const navigate = useNavigate();

    useEffect(() => {
        if (tables.length > 0 && !tableData) {
            navigate("/");
        }
    }, [tableData, tables, navigate]);

    if (!tableData) {
        return null
    }

    return (
        <>
            <h1 className="my-4">Table: {tableData.id}</h1>
            <TableForm tableData={tableData} />
        </>
    );
};

export default Table;
