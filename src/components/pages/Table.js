import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getTableById, updateTable, updateTableRequest } from "../../redux/tablesRedux";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import NumberInput from "../common/NumberInput";
import InputLabel from "../common/InputLabel";

const Table = () => {
    const { id } = useParams();
    const tableData = useSelector(state => getTableById(state, id))
    const [status, setStatus] = useState('Busy')
    const [peopleAmount, setPeopleAmount] = useState(0)
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(0)
    const [bill, setBill] = useState(0)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (tableData) {
            setStatus(tableData.status)
            setPeopleAmount(tableData.peopleAmount);
            setMaxPeopleAmount(tableData.maxPeopleAmount);
            setBill(tableData.bill);
        } else {
            // console.log(tableData, 'no data')
            // navigate("/");
        }
    }, [tableData]);

    console.log(tableData, 'table data')

    if (!tableData) {
        //     navigate("/");
        console.log('no data')
        // return <Navigate to="/" />
        return null
    }

    // if (tableData === undefined) {
    //     console.log(tableData, 'tableData')
    //     return null;
    // }

    const handleStatusChange = (e) => {
        setStatus(e.target.value)
        if (e.target.value === 'Busy') {
            setBill(0)
        }

        if (e.target.value === 'Cleaning' || e.target.value === 'Cleaning') {
            setPeopleAmount(0)
        }
    }

    const handlePeopleAmountChange = (e) => {
        const value = e.target.value;
        if (value >= 0 && value <= 10) {
            setPeopleAmount(value)
        }
    }

    const handlePeopleAmountBlur = (e) => {
        const value = e.target.value;

        if (Number(value) > Number(maxPeopleAmount)) {
            setPeopleAmount(maxPeopleAmount)
        }
    }

    const handleMaxPeopleAmountBlur = (e) => {
        const value = e.target.value;

        if (Number(value) < Number(peopleAmount)) {
            setMaxPeopleAmount(peopleAmount)
        }
    }

    const handleMaxPeopleAmountChange = (e) => {
        if (e.target.value >= 0 && e.target.value <= 10) {
            setMaxPeopleAmount(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // dispatch(updateTableRequest({ id, status, peopleAmount, maxPeopleAmount, bill }));
        try {
            await dispatch(updateTableRequest({ id, status, peopleAmount, maxPeopleAmount, bill }))
        }
        catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <h1 className="my-4">Table: {tableData.id}</h1>
            <form onSubmit={handleSubmit}>
                <Form.Group className="d-flex align-items-center gap-2 my-4">
                    <InputLabel htmlFor="status">Status:</InputLabel>
                    <Form.Select aria-label="booking status" className="w-25" value={status} onChange={handleStatusChange}>
                        <option value="Free">Free</option>
                        <option value="Busy">Busy</option>
                        <option value="Reserved">Reserved</option>
                        <option value="Cleaning">Cleaning</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="d-flex align-items-center gap-2 my-4">
                    <InputLabel htmlFor="peopleAmount">People:</InputLabel>
                    <NumberInput id="peopleAmount" value={peopleAmount} onChange={handlePeopleAmountChange} onBlur={handlePeopleAmountBlur} />
                    <span>/</span>
                    <NumberInput id="PeopleAmount" value={maxPeopleAmount} onChange={handleMaxPeopleAmountChange} onBlur={handleMaxPeopleAmountBlur} />
                </Form.Group>
                {(status === 'Busy') && <Form.Group className="d-flex align-items-center gap-2 my-4">
                    <InputLabel htmlFor="bill">Bill:</InputLabel>
                    <span>$</span>
                    <NumberInput id="bill" value={bill} onChange={e => setBill(e.target.value)} />
                </Form.Group>}
                <button bg="primary" type="submit" >
                    Update
                </button>
            </form>
        </>
    );
};

export default Table;
