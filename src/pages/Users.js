import React, { useState, useEffect } from 'react';

function Users() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    // alert(count);

  });

    return (
        <div className="container home">
        <div className="row">
        <div className="col-12">
            <h1>Users</h1>
            <hr />
            {/* <input
  type="text"
  aria-label="ojoij"
  aria-required="true"
  name="name"
/> */}
                  {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
        </div>
        </div>
    </div>

    );

}

export default Users;