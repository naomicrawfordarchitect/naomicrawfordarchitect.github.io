import React from 'react';

/*
  Filter field
*/
export default class Filter extends React.Component {

    state = {
        input: ''
    };

    handleChange = e => {
        const target = e.currentTarget;

        this.setState({
            input: target.value.trim()
        });
    }

    constructor(props) {
        super(props);
    }

    getObjectFilter(propName, term) {
        const matchStr = term.toLowerCase();
        return o => o[propName].toLowerCase().match(matchStr);
    }

    filterByName(input, items) {
        const nameFilter = this.getObjectFilter('name', input);
        return input ? items.filter(nameFilter) : items;
    }

    render() {
        return (
            <div>
                <input type="text"
                    value={ this.state.input }
                    onChange={ this.handleChange }
                    placeholder="Filter" />
                <ul>
                {
                    this.filterByName(this.state.input, this.props.items)
                        .map((item, i) => {
                            return (
                                <li key={i}>
                                    <a href={item.url}>{item.name}</a>
                                </li>
                            );
                        })
                }
                </ul>
            </div>
        );
    }
}
