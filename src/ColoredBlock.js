import React from 'react';

import ChangeColorButton from './ChangeColorButton'

class ColoredBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "red"
        };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor() {
        this.setState((prevState) => {
            let newColor = prevState.backgroundColor === "red" ? "blue" : "red";
            return {
                backgroundColor: newColor
            };
        });
    }

    render() {
        return (
            <div style={{width: "200px", height: "200px", backgroundColor: this.state.backgroundColor}}>
                <ChangeColorButton onClick={this.changeColor} />
            </div>
        );
    }
}

export default ColoredBlock;