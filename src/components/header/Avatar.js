import React from "react";

export class Avatar extends React.Component {

    render() {
        const mystyle = {
            width: "54px",
            height: "54px",
            borderRadius: "50%"
          };
        return (
            <img style={mystyle} src={this.props.src} alt="avatar-img"/>
        );
    }
}
export default Avatar;