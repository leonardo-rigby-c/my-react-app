import React, { useState } from 'react';

import '../styles/Alert.css';

function Alert(props) {
    const[active, setActive] = useState(props.active);

    setInterval(
        () => closeAlert(),
        3000
      );

    function closeAlert() {
        setActive(false);
        props.onClose();
    }
    // Correct
    // this.setState((state, props) => ({
    //     counter: state.counter + props.increment
    // }));

        return (
            <div className={"alert " + (props.type) + " " + (active ? "active" : "")} >
                <span className="alert-msg">{ props.msg }</span>
            </div>
        );

}

export default Alert;