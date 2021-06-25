import React from 'react';
import Input from './Input';
import Select from './Select';
import estados from './data';

class Form extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            nome: '',
            email: '',
            cpf: '',
            endereço: '',
            cidade: '',
            estado: '',
        }
    }

    handleChange({ target }) {
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        })
    }
    render() {
        return (
            <form>
                <Input 
                handleChange={this.handleChange} 
                type='text' 
                name='nome' 
                labelText='Nome' 
                value={this.state.nome}
                />
                <Input 
                handleChange={this.handleChange} 
                type='text' 
                name='email' 
                labelText='E-mail' 
                value={this.state.email}
                />
                <Input 
                handleChange={this.handleChange} 
                type='text' 
                name='cpf' 
                labelText='CPF' 
                value={this.state.cpf}
                />
                <Input 
                handleChange={this.handleChange} 
                type='text'
                name='cidade'
                labelText='Cidade'
                value={this.state.cidade}
                />
                <Select
                labelText='Estado'
                dataList={estados}
                />

            </form>
        );
    }
}

export default Form;