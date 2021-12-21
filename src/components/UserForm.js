import React, { Component } from "react";
import UserFormDetails from "./UserFormDetails";
import '../App.css';
import axios from "axios";

class UserForm extends Component {
    constructor(props) 
    {
        super(props)

        this.state =
        {
            userobj: { id: '', firstName: '', lastName: '', email: '', dateOfBirth: Date },
            users: []
        }
        this.updateUserHandler.bind(this);
        this.handleDelete.bind(this);
        //this.reset.bind(this);
    }

    componentDidMount()
    {       
        this.getMethod();
    }

    handlefirstNameChange = (event) => {
        event.preventDefault();
        console.log(event.target);
        let firstName = event.target.value;
        let tempUser = {...this.state.userobj};
        tempUser.firstName = firstName;
        this.setState({ userobj: tempUser }, () => { console.log('userobj details :', this.state.userobj) });
    }

    handlelastNameChange = (event) => {
        event.preventDefault();
        let lastName = event.target.value;
        let tempUser = { ...this.state.userobj };
        tempUser.lastName = lastName;
        this.setState({ userobj: tempUser }, () => { console.log('userobj details :', this.state.userobj) });
    }

    handleEmailChange = (event) => {
        event.preventDefault();
        let email = event.target.value;
        let tempUser = { ...this.state.userobj };
        tempUser.email = email;
        this.setState({ userobj: tempUser }, () => { console.log('userobj details :', this.state.userobj) });
    }

    handleDateChange = (event) => {
        event.preventDefault();
        let dateOfBirth = event.target.value;
        let tempUser = { ...this.state.userobj };
        tempUser.dateOfBirth = dateOfBirth;
        this.setState({ userobj: tempUser }, () => { console.log('userobj details :', this.state.userobj) });
    }

    getMethod = async() =>
    {
        //console.log("In componentDidMount()");
       await axios.get("http://localhost:8080/Users")
        //.then(response=> {
          // console.log(response.data);
        .then(response => {
            this.setState({users : response.data})
        })
        .catch(err => {console.log(err);});   
        console.log("Users in parent ", this.state.users);
    }

   reset = () =>
    {
        this.setState({userobj : {firstName: '', lastName: '', email: '', dateOfBirth: ''}})
    }

    handleSubmit = async(event) => {
         //Step 1: Insert userobj into the users[]
        console.log("In handle submit", this.state.users);
        event.preventDefault();

        //Always replaces the data
        //let tempUsers = [...this.state.users];
        //tempUsers.push(this.state.userobj);
       // this.setState({ users: tempUsers });
        await axios.post("http://localhost:8080/Users/AddUser", this.state.userobj);
        this.getMethod();
        this.reset();
    }


    handleDelete = async(event) => {
        //console.log("In handledelete event", event.target.value);
       // let user = event.target.value;

       event.preventDefault();
      // console.log("User", user);
      console.log(event.target.value);
        await axios.delete(`http://localhost:8080/Users/${event.target.value}`);
        this.componentDidMount();
    }

    updateUserHandler = (user) =>
    {
        //console.log("parent" , user);
        let temp = this.state.userobj;
        temp.id = user.id;
        temp.firstName = user.firstName;
        temp.lastName = user.lastName;
        temp.email = user.email;
        temp.dateOfBirth = user.dateOfBirth;
        this.setState({userobj : temp});
        console.log("User object" , this.state.userobj);
        console.log("User id", user.id);
    } 


    render() {
        console.log("In parent render");

        return (

            <div>

                <form onSubmit={this.handleSubmit}>

                    <div className = "form1">
                    <label> First Name  </label>
                    <input type='text' name="firstname" placeHolder = "type : String" value = {this.state.userobj.firstName} onChange={this.handlefirstNameChange} /> 
                    </div>
                    <br />
                    <br />

                    <div className = "form2">
                    <label>  Last Name  </label>
                    <input type='text' name="lastname"  placeHolder = "type : String" value = {this.state.userobj.lastName} onChange={this.handlelastNameChange} />
                    </div>

                    <br />
                    <br />

                    <div className ="form3">
                    <label> Email  </label>
                    <input type='text' name="email" placeHolder = "type : String"  value = {this.state.userobj.email} onChange={this.handleEmailChange} />
                    </div>

                    <br />
                    <br />

                    <div className = "form4">
                    <label> Date of Birth </label>
                    <input type ="date" name="dateOfBirth" placeHolder = "type : Date" value = {this.state.userobj.dateOfBirth}onChange={this.handleDateChange} />
                    </div>

                    <br/>
                    <br/>

                    <div className = "form5">
                    <input type = "submit" value = "Save" />
                    </div>
                    
                </form>    

                <UserFormDetails users={this.state.users}  deleteHandler = {this.handleDelete} updateUserHandler = {this.updateUserHandler}/>
                
            </div>
        )
    }


}

export default UserForm
