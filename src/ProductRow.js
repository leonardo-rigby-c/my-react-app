import React from 'react';
import './ProductRow-out-of-stock.css'

class ProductRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <span className={this.props.product.stocked ? '' : 'ProductRow-out-of-stock' }> 
                        { this.props.product.name }
                    </span>
                </td>
                <td>
                    { this.props.product.price }
                </td>
                <td>
                    <button className="btn btn-primary">X</button>
                </td>
            </tr>
        );
    }
}

export default ProductRow;