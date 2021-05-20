import React from 'react';

class ProductForm extends React.Component {
    render() { 
        return (
            <form>
              <h3>Enter a new product</h3>
              <p>
                <label>
                  Name
                  <br />
                  <input className="form-control" type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Category
                  <br />
                  <input className="form-control" type="text" name="category" />
                </label>
              </p>
              <p>
                <label>
                  Price
                  <br />
                  <input className="form-control" type="text" name="price" />
                </label>
              </p>
              <p>
                <label>
                  <input className="form-control" type="checkbox" name="stocked" />
                  &nbsp;In stock?
                </label>
              </p>
              <input className="form-control btn btn-primary" type="submit" value="Save" />
            </form>
          );;
    }
}
 
export default ProductForm;