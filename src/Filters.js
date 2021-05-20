import React from 'react';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.handleChenge = this.handleChenge.bind(this);
    }
    handleChenge(e) {
        const value = e.target[e.target.type === 'checkbox' ? "checked" : "value"];
        const name = e.target.name;

        this.props.onFilter({
            [name]: value
        });
    }
    render() { 
        return ( 
            <form>
                <input 
                    className="form-control" 
                    placeholder="Search..." 
                    type="text"
                    value={this.props.filterText}
                    onChange={this.handleChenge}
                    name="filterText"
                />
                <p>
                    <label>
                    <input 
                        type="checkbox" 
                        checked={this.props.inStockOnly}
                        onChange={this.handleChenge}
                        name="inStockOnly"
                    />
                    &nbsp;
                    Only shows products in Stock
                    </label>
                </p>
            </form>
         );
    }
}
 
export default Filters;