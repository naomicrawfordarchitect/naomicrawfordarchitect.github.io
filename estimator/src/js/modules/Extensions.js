import React from 'react';


export default class Extensions extends React.Component {

    state = {
        input: "0"
    };

    constructor(props) {
        super(props);
    }

    handleChange = e => {
        const target = e.currentTarget;

        this.setState({
            input: target.value.trim()
        });
    }

    addInput = e => {
        console.log('add');
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={ this.state.input }
                    onChange={ this.handleChange } />
                    &nbsp; square meters

                <div>
                    <a href="#" onClick={ this.addInput }>
                        Add another area
                    </a>
                </div>
            </div>
        );
    }
}
