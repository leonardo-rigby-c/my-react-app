import React from 'react';
import MyComponent from './my-component'
// const time = new Date().toLocaleString();

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
        this.updateClock = this.updateClock.bind(this);
    }
    componentDidMount() {
        this.intervalID = setInterval(
          this.updateClock,
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
    updateClock() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    render() {
        return (
            <div className="app-clock">
                <p>The time is { this.state.time }</p>
                <MyComponent />
            </div>
        );
    }
}

export default Clock;

