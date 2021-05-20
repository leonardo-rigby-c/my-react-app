import React from 'react';
import '../../styles/sidebar/Sidebar.css'
import { Link, NavLink } from "react-router-dom";

export class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.logOut = this.logOut.bind(this)
    }

    logOut() {
      localStorage.clear();
      this.props.logoutUser();
    }

    render() {

      // let isActive = this.context.router.isActive(this.props.to, true);
      //   let className = isActive ? "active" : "";

        return (
            <div  className={"sidebar " + (this.props.sidebarOpen ? 'active' : '' )}>
              <NavLink exact className="link" activeClassName="active" to="/home">
                <div className="b-col b-flex-center">
                  <div className="b-link b-flex-center">
                    <i className="fas fa-home icon-menu"></i>
                  </div>
                </div>
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/users">
                <div className="b-col b-flex-center">
                  <div className="b-link b-flex-center">
                    <i className="fas fa-users icon-menu"></i>
                  </div>
                </div>
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/schedule">
                <div className="b-col b-flex-center">
                  <div className="b-link b-flex-center">
                    <i className="fas fa-tasks icon-menu"></i>
                  </div>
                </div>
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/profile">
                <div className="b-col b-flex-center">
                  <div className="b-link b-flex-center">
                    <i className="fas fa-user-cog icon-menu"></i>
                  </div>
                </div>
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/settings">
                <div className="b-col b-flex-center">
                  <div className="b-link b-flex-center">
                    <i className="fas fa-sliders-h icon-menu"></i>
                  </div>
                </div>
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/signup">
                <div className="b-col b-flex-center">
                  <div className="b-link b-flex-center">
                    <i className="fas fa-sign-out-alt icon-menu"></i>
                  </div>
                </div>
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/login">
                <div className="b-col b-flex-center">
                  <div className="b-link b-flex-center">
                    <i className="fas fa-sign-in-alt icon-menu"></i>
                  </div>
                </div>
              </NavLink>
              <NavLink exact className="link" onClick={this.logOut} to="/">
                <div className="b-col b-flex-center">
                  <div className="b-link b-flex-center">
                    <i className="fas fa-power-off icon-menu"></i>
                  </div>
                </div>
              </NavLink>
                           
            </div>
        )
    }
}


export default Sidebar;