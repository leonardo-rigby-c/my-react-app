import React, { useState }  from 'react';
import '../styles/Profile.css';
import axios from 'axios';

const Profile = () => {

    const [userData, changeUser] = useState({name: 'leo'});
    const[user] = useState(JSON.parse(localStorage.getItem('user')))

    const api = 'http://localhost:3000/api/auth';
    
    // function getUserData() {
            axios.get(`http://localhost:3000/api/auth/${user.userId}`, {
                headers: {
                  'Authorization': `Token ${user.token}`
                }
              }).then(function (response) {
                console.log(response);
                if(response.status === 200) {
                    changeUser(response.data)
                }
            }).catch(function(error){
    
                console.log("error deleting task " + error)
            })
    // }

    return (
        <div className="profile container">
            <div className="row">
                <div className="col-12">
                    <h1>Profile</h1>
                </div>
                <hr />
                {user.userId}
                <br />
                {userData.name}
            </div>
        </div>
    );
}

export default Profile;
