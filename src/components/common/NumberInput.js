import { Form } from "react-bootstrap";
import PropTypes from 'prop-types';

const NumberInput = (props) => {
    return (
        <Form.Control
            type="number"
            id={props.id}
            size="sm"
            className="p-1 small text-center"
            style={{ width: '40px' }}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            disabled={props.disabled}
        />
    )
};

export default NumberInput;

NumberInput.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired ,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
};
