import React from 'react';

class Input extends React.Component {
    render() {
        const { name, value, handleChange, type, labelText } = this.props;
        return (
            <label>
                {`${labelText}:`}
                <input name={name} type={type} value={value} onChange={handleChange} />
            </label>
        );
    }
}

export default Input;