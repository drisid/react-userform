import React, { Component } from "react";
import UserFormDetails from "./UserFormDetails";
import '../App.css';

class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            userobj: { firstName: '', lastName: '', email: '', date: '' },
            users: []
        }
    }

    handlefirstNameChange = (event) => {
        console.log(event.target);
        let firstName = event.target.value;
        let tempUser = {...this.state.userobj};
        tempUser.firstName = firstName;
        this.setState({ userobj: tempUser }, () => { console.log('userobj details :', this.state.userobj) });

    }

    handlelastNameChange = (event) => {
        let lastName = event.target.value;
        let tempUser = { ...this.state.userobj };
        tempUser.lastName = lastName;
        this.setState({ userobj: tempUser }, () => { console.log('userobj details :', this.state.userobj) });

    }

    handleEmailChange = (event) => {
        let email = event.target.value;
        let tempUser = { ...this.state.userobj };
        tempUser.email = email;
        this.setState({ userobj: tempUser }, () => { console.log('userobj details :', this.state.userobj) });
    }

    handleDateChange = (event) => {
        let date = event.target.value;
        let tempUser = { ...this.state.userobj };
        tempUser.date = date;
        this.setState({ userobj: tempUser }, () => { console.log('userobj details :', this.state.userobj) });

    }

    handleSubmit = (event) => {

        //Step 1: Insert userobj into the users[]
        console.log("In handle submit", this.state.users);
        //Always replaces the data
        let tempUsers = [...this.state.users];
        tempUsers.push(this.state.userobj);
        this.setState({ users: tempUsers });

        event.preventDefault();
        event.target.reset();

    }

    render() {
        console.log("In parent render");
        return (

            <div>

                <form onSubmit={this.handleSubmit}>

                    <br/> <br/>

                    <div className = "form1">
                    <label> First Name  </label>
                    <input type='text' name="firstname" placeHolder = "type : String" onChange={(event) => this.handlefirstNameChange(event)} />
                    </div>
                    <br />
                    <br />

                    <div className = "form2">
                    <label>  Last Name  </label>
                    <input type='text' name="lastname"  placeHolder = "type : String" onChange={(event) => this.handlelastNameChange(event)} />
                    </div>

                    <br />
                    <br />

                    <div className ="form3">
                    <label> Email  </label>
                    <input type='text' name="email" placeHolder = "type : String" onChange={(event) => this.handleEmailChange(event)} />
                    </div>

                    <br />
                    <br />

                    <div className = "form4">
                    <label> Date of Birth </label>
                    <input type ='date' name="date" placeHolder = "type : Date" onChange={(event) => this.handleDateChange(event)} />
                    </div>

                    <br/>
                    <br/>

                    <div className = "form5">
                    <input type = "submit" value="Save" />
                    </div>
                    
                </form>
                

                <UserFormDetails users={this.state.users} />

                
            </div>
        )
    }


}

export default UserForm
