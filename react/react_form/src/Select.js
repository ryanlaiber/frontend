import React from 'react';

class Select extends React.Component {
    render() {
        const { labelText, dataList } = this.props;
        return (
            <label>
                { `${labelText}:` }
                <select>
                    {dataList.map((estado) => <option value={Object.keys(estado)} key={Object.keys(estado)}>{Object.values(estado)}</option>)}
                </select>
            </label>
        );
    }
}

export default Select;