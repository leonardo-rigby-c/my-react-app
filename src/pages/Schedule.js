import React from 'react';
import axios from 'axios';
import '../styles/Schedule.css'
class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user')),
            name: '',
            description: '',
            schedule: []
        };
        this.createNewTask = this.createNewTask.bind(this);
        // this.getSchedule = this.getSchedule.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    componentDidMount() {
        this.getSchedule();
    }

    getSchedule = () => {
        const endpoint = 'http://localhost:3000/api/schedule'
        axios.get(endpoint, {
            headers: {'Authorization': `Token ${this.state.user.token}`}
        }).then(response => {
            console.log(response);
            this.setState({
                schedule: response.data
            })

        }).catch(err => {
            console.log("error getting schedule", err);
        })
    }

    createNewTask(event) {
        const rthis = this;
        event.preventDefault();
        if(this.state.user != null) {
            let task = {
                "userId": rthis.state.user.userId,
                "name": rthis.state.name,
                "description": rthis.state.description,
                "datetime": new Date().toLocaleString(),
                "status": 'to-do'
            }
            // let task = {newTask};

            console.log(task);

            const endpoint = 'http://localhost:3000/api/schedule/';

            axios.post(endpoint, {task: JSON.stringify(task)}, {
                headers: {
                  'Authorization': `Token ${this.state.user.token}`
                }
              })
              .then(function (response) {
                  console.log(response);
                  if(response.status === 201 ){
                    // this.callCreatedAlert();
                    rthis.getSchedule();
                  }
              }
            ).catch(function (error) {
                console.log(error);
            });
        }
    }

    deleteTask(id){
        let rthis = this;
        axios.delete(`http://localhost:3000/api/schedule/${id}`, {
            headers: {
              'Authorization': `Token ${this.state.user.token}`
            }
          }).then(function (response) {
            console.log(response);
            rthis.getSchedule();
        }).catch(function(error){

            console.log("error deleting task " + error)
        })
    }
    doneTask = (task) => {
        let rthis = this;
        task.status = 'done';
        axios.put(`http://localhost:3000/api/schedule/${task._id}`,task, {
            headers: {
              'Authorization': `Token ${this.state.user.token}`
            }
          }).then(function (response) {
            console.log(response);
            rthis.getSchedule();
        }).catch(function(error){

            console.log("error updating task " + error)
        })
    }
    getTask = (id) => {
        let rthis = this;
        axios.get(`http://localhost:3000/api/schedule/${id}`, {
            headers: {
              'Authorization': `Token ${this.state.user.token}`
            }
          }).then(function (response) {
            console.log(response);
            if(response.status === 200) {
                rthis.doneTask(response.data)
            }
        }).catch(function(error){

            console.log("error deleting task " + error)
        })
    }
    //arrow function
    message = (id) => {
        console.log("remove: " + id)
       }


    render() {

        return (
            
            <div className="container schedule">
                <h1 className="text-center">My Schedule</h1>

                <div className="row justify-content-md-center">
                <div className="col-xs-12 col-sm-6 col-md-7">
                    {this.state.schedule.map((task) =>
                        task.userId === this.state.user.userId ? (
                            <div className="b-flex-center r-task" key={task._id}>
                                <div className="b-flex-left col-xs-8 col-sm-8">
                                    <span className={"taskname " + (task.status)}>{task.name}</span>
                                </div>
                                <div className="col-xs-4 col-sm-4 b-task-actions b-flex-right">
                                    <span className={"fas fa-trash "+ (task.status)} onClick={() => this.deleteTask(task._id)}> </span>
                                    <span className={"datetime "+ (task.status)}>{task.datetime}</span>
                                    <span className={"fas fa-check "+ (task.status)} onClick={() => this.getTask(task._id)}> </span>
                                </div>
                            </div>
                            ) : (
                            ""
                        )
                    )}
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                <form className="form" onSubmit={this.createNewTask}>
                    <label >Task Name</label>
                    <input className="form-control" type="text" required value={this.state.name}
                    onChange={(event) => this.setState({ name: event.target.value})} placeholder="Enter task name"/>
                    <label >Task description</label>
                    <input className="form-control" type="text" required value={this.state.description}
                    onChange={(event) => this.setState({ description: event.target.value})} placeholder="Enter task description"/>
                    <br />
                    <div className="center-item">
                    <button className="submit-btn center-item" type="submit" value="Submit" >New Task</button>
                  </div>
                </form>
                </div>
                </div>

            </div>
         );
    }
}

export default Schedule;