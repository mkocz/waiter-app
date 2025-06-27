import { Form } from "react-bootstrap";
import PropTypes from 'prop-types';

const InputLabel = (props) => {
    return (
        <Form.Label htmlFor={props.htmlFor} className="mb-0 fw-bold fs-5" style={{ minWidth: '100px' }}>
            {props.children}
        </Form.Label>
    )
};

export default InputLabel;

InputLabel.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
