import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Contador from './Contador';
// import Users from './Users';
// import Settings from './Settings';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user')),
            stuff: []
        };
        
        this.getStuff = this.getStuff.bind(this);
    }
    componentDidMount() {
        // console.log(this.state.user);
        // if(this.state.user != null) {
        // let user = this.state.user;
        // console.log(user.userId);
        // 
        // }
        this.getStuff();
    }

    getStuff() {
        let rthis = this;
        const api = 'http://localhost:3000/api/stuff';

                axios.get('http://localhost:3000/api/stuff', {
                    headers: {
                      'Authorization': `Token ${this.state.user.token}`
                    }
                  })
                .then(function (response) {
                    console.log(response);
                    rthis.setState({stuff: response.data})
                    // if(response.data.status === 201 ){
                    //     alert("User registered successfully!");
                    // }
                    // if(response.data.status === 501 ){
                    //     alert("User already exists!");
                    // }
                })
    }

    render() { 
        // if(this.state.user != null) {
            // <h1>Stuff</h1>
            // const listItems = this.state.stuff.map((item) =>
            
            //     <li key={item._id}>
            //         {item.title}
            //     </li>
            // );
            return (
                <div className="container home">
                    <div className="row">
                    <div className="col-12">
                        <h1>Home</h1>
                        <hr />
                            <Contador name="LEonardo"/>
                        {/* <Users />
                        <Settings /> */}
                    </div>
                    </div>
                </div>
                // <ul>{listItems}</ul>
              );

        // }else {
            // return <Redirect to='/login' />
        // }

    }
}
 
export default Home;