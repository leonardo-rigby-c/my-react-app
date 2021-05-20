import React, { useState, useEffect } from 'react';

function Image() {
  const [count, setCountTest] = useState(100);
  // Store
  const image = localStorage.getItem("lastname");
    // localStorage.setItem("lastname", "Smith");

  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p className="btn btn-primary">You clicked {count} times {image}</p>
      <button onClick={() => setCountTest(count + 1)}>
        Click me
      </button>
    </div>
  );

}
export default Image;