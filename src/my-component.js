import React from 'react';

// function handleClick() {
//     alert('handleClick');
// }
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Click Here'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            msg: 'Clicked'
        })
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.msg}
            </button>
        );
    }
}

export default MyComponent;