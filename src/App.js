import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Clock from './clock'
// import ColoredBlock from './ColoredBlock'
// import Products from './Products'
// import { BrowserRouter as Router , Route} from "react-router-dom";
// import Image from './components/Image';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import  Routes  from './routes';
import Navbar from './components/header/Navbar';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Users from './pages/Users';
import Settings from './pages/Settings';
import Schedule from './pages/Schedule'
import Profile from './pages/Profile'
// import Link from './components/Link';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import RouteGuard from './RouteGuard';


class App extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      path: '/',
      user: localStorage.getItem('user')
    }

    this.loginUser = this.loginUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }


    componentDidMount() {
      if(this.state.user != null ) {
        console.log(this.state.user)
        // window.location.pathname= '/home'
      }

    }

    loginUser() {
      this.setState({user: localStorage.getItem('user')})
    }
    logoutUser() {
      // setUser(null);
      this.setState({user: null})
      console.log("user => " + this.state.user)
    }
render() {

    return (
        <div>
    
          <Navbar onLogout={this.logoutUser}/>

          <div className="main-container">
              {/* <GuardedRoute path='/protected' component={Protected} auth {...isAutheticated} /> */}
              {/* <RouteGuard path='/login' component={Login} /> */}
              <Route path="/login"><Login onLogin={this.loginUser}/></Route>
              
              
              {/* <Route path="/signup"><Signup /></Route> */}
              <RouteGuard path="/signup" component={Signup} />

              <RouteGuard path='/home' component={Home} auth={this.state.user} />

              <RouteGuard path="/schedule" component={Schedule} auth={this.state.user} />

              <RouteGuard path="/users" component={Users} auth={this.state.user} />

              <RouteGuard path="/settings" component={Settings} auth={this.state.user} />
              
              <RouteGuard path="/profile" component={Profile} auth={this.state.user} />
              
                {/* <Route path="/home"><Home /></Route>
                <Route path="/login"><Login /></Route>
                <Route path="/signup"><Signup /></Route> */}

          </div>
        </div>

      // <div className="my-react-app">
      //   <Navbar />
      //   <Login />
      // </div>

      
      // <div className="App-header">
      // <div className="container">
      //   <div className="row">
      //     <div className="col-12 co-sm-12 col-md-4">

      //     </div>
      //     <div className="col-12 co-sm-12 col-md-4 text-center">
      //       {/* <img src={logo} className="App-logo" alt="logo" />
      //       <p >
      //         Hi! {this.props.name}
      //       </p> */}
      //       <Products />
      //     </div>
      //     <div className="col-12 co-sm-12 col-md-4">
      //     </div>
      //   </div>
      // </div>
      // </div>
    );
  }

}

export default App;



// import React, { useState } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// // import Clock from './clock'
// // import ColoredBlock from './ColoredBlock'
// // import Products from './Products'
// // import { BrowserRouter as Router , Route} from "react-router-dom";
// // import Image from './components/Image';
// // import ReactDOM from 'react-dom';
// // import { BrowserRouter as Router } from 'react-router-dom';
// // import  Routes  from './routes';
// import Navbar from './components/header/Navbar';
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Home from './pages/Home'
// // import Link from './components/Link';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// import RouteGuard from './RouteGuard';


// function App() {

//   const[user, setUser] = useState(localStorage.getItem('user'));
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     path: '/'
//   //   }

//   //   this.redirect = this.redirect.bind(this)
//   //   this.redirectRuta = this.redirectRuta.bind(this)
//   // }

//   // redirect(ruta) {
//   //   this.setState({
//   //     path: '/home'
//   //   })
//   // }
//   // redirectRuta(ruta) {
//   //   this.setState({
//   //     path: '/'
//   //   })
//   // }

//   //   componentDidMount() {
//   //     this.setState({
//   //       path: '/'
//   //     })

//   //   }

//     function loginUser() {
//       alert("logeado")
//       setUser(localStorage.getItem('user'));
//       console.log("user => " + user)
//     }
//     function logoutUser() {
//       setUser(null);
//     }

//     return (
//         <div>
    
//           <Navbar onLogout={logoutUser}/>
//           <div className="main-container">
//               {/* <GuardedRoute path='/protected' component={Protected} auth {...isAutheticated} /> */}
//               <RouteGuard path='/login' component={Login} />
//               <Route path="/login"><Login onLogin={loginUser}/></Route>
//               {/* <Route path="/signup"><Signup /></Route> */}
//               <RouteGuard path="/signup" component={Signup} auth={user} />

//               <RouteGuard path='/home' component={Home} auth={user} />
              
//                 {/* <Route path="/home"><Home /></Route>
//                 <Route path="/login"><Login /></Route>
//                 <Route path="/signup"><Signup /></Route> */}

//           </div>
//         </div>

//       // <div className="my-react-app">
//       //   <Navbar />
//       //   <Login />
//       // </div>

      
//       // <div className="App-header">
//       // <div className="container">
//       //   <div className="row">
//       //     <div className="col-12 co-sm-12 col-md-4">

//       //     </div>
//       //     <div className="col-12 co-sm-12 col-md-4 text-center">
//       //       {/* <img src={logo} className="App-logo" alt="logo" />
//       //       <p >
//       //         Hi! {this.props.name}
//       //       </p> */}
//       //       <Products />
//       //     </div>
//       //     <div className="col-12 co-sm-12 col-md-4">
//       //     </div>
//       //   </div>
//       // </div>
//       // </div>
//     );
// }

// export default App;
