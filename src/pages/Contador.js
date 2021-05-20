// function Contador () {
//     return (
//         <h1>Contador</h1>
//     );
// }

// export default Contador;

import React from 'react';

class Contador extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        };
        this.counterMas = this.counterMas.bind(this);
    }
    counterMas() {
        this.setState({
            counter: this.state.counter +=1
        })
    }

    componentDidMount() {
        alert("hi")
      }
      componentWillUnmount() {
        alert("bye")
    }

    render() {
        return (
            <div>
               <h1>Counter: {this.state.counter}</h1>
               <h1>Name: {this.props.name}</h1>
               <button onClick={this.counterMas}>Counter ++</button>
            </div>
        );
    }
}

export default Contador;