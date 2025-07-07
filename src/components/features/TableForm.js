import { useDispatch } from "react-redux";
import { updateTableRequest } from "../../redux/tablesRedux";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import NumberInput from "../common/NumberInput";
import InputLabel from "../common/InputLabel";

const TableForm = ({ tableData }) => {
    const id = tableData.id;
    const [status, setStatus] = useState(tableData.status);
    const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
    const [bill, setBill] = useState(tableData.bill);

    const dispatch = useDispatch();

    const handleStatusChange = (e) => {
        const value = e.target.value;

        setStatus(value)
        if (value === 'Busy') {
            setBill(0)
        }

        if (value === 'Cleaning' || value === 'Free') {
            setPeopleAmount(0)
        }
    }

    const handlePeopleAmountChange = (e) => {
        const value = e.target.value;

        if (value >= 0 && value <= 10) {
            setPeopleAmount(parseInt(value))
        }
    }

    const handlePeopleAmountBlur = (e) => {
        const value = e.target.value;

        if (Number(value) > Number(maxPeopleAmount)) {
            setPeopleAmount(parseInt(maxPeopleAmount))
        }
    }

    const handleMaxPeopleAmountBlur = (e) => {
        const value = e.target.value;

        if (Number(value) < Number(peopleAmount)) {
 
            setMaxPeopleAmount(parseInt(peopleAmount))
        }
    }

    const handleMaxPeopleAmountChange = (e) => {
        const value = e.target.value;

        const newValue = value.replace(/^0+/g, '')
        console.log(value, newValue)

        if (newValue >= 0 && newValue <= 10) {
            console.log(parseInt(newValue))
            setMaxPeopleAmount(parseInt(newValue))
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault();



        try {
            await dispatch(updateTableRequest({ id, status, peopleAmount, maxPeopleAmount, bill }))
            alert('Table details have been updated.')
        }
        catch (error) {
            console.log(error)
            alert('Table details have not been saved.')
        }
    }

    return (
        <>
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
                    <NumberInput id="peopleAmount" value={peopleAmount} onChange={handlePeopleAmountChange} onBlur={handlePeopleAmountBlur} disabled={status === 'Cleaning' || status === 'Free'} />
                    <span>/</span>
                    <NumberInput id="PeopleAmount" value={maxPeopleAmount} onChange={handleMaxPeopleAmountChange} onBlur={handleMaxPeopleAmountBlur}  />
                </Form.Group>
                {(status === 'Busy') && <Form.Group className="d-flex align-items-center gap-2 my-4">
                    <InputLabel htmlFor="bill">Bill:</InputLabel>
                    <span>$</span>
                    <NumberInput id="bill" value={bill} onChange={e => setBill(e.target.value)} />
                </Form.Group>}
                <Button bg="primary" type="submit" >
                    Update
                </Button>
            </form>
        </>
    );
};

export default TableForm;
