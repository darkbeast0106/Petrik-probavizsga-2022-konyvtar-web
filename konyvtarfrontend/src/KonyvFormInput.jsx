import React, { Component } from 'react';
class KonyvFormInput extends Component {
    handleInput = (e) => {
        const { onInput } = this.props;
        if (onInput) {
            onInput(e.target.value);
        }
    }
    render() {
        const { id, placeholder, type = "text", value } = this.props;
        return (
            <div className="mb-3">
                <label htmlFor={id}>{placeholder}</label>
                <input type={type} className="form-control" id={id} placeholder={placeholder} onInput={this.handleInput} value={value} />
            </div>
        );
    }
}

export default KonyvFormInput;