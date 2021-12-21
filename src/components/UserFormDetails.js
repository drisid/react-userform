import React, { Component } from "react";
import '../App.css';

class UserFormDetails extends Component {

    constructor(props)
    {
        super(props)
       // this.updateHandler.bind(this)
    }

  /*  updateHandler = (user) =>{
        console.log("child", user);
        this.props.updateUserHandler(user);
    }
*/
    render() {
        console.log("In child render", this.props.users);
    

            return (
                <div>
                    <table style = {{width : '80%'}}>
                        <caption> <h3 style = {{textAlign : 'left'}}> UserList  </h3> </caption>
                        <thead>
                            <tr>
                                <th> First Name </th>
                                <th> Last Name </th>
                                <th> Email Id </th>
                                <th> Date of Birth </th>
                               {/* <th> ID </th> */}
                                <th> Actions </th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.props.users.map((user) => {
                                return (
                                    <tr>
                                        <td> {user.firstName} </td>
                                        <td> {user.lastName} </td>
                                        <td> {user.email} </td>
                                        <td> {user.dateOfBirth} </td>
                                       {/* <td> {user.id}</td> */}
                                        
                                       <td> <button type = "button" onClick = {(event)=> {this.props.updateUserHandler(user)}} >  Edit  </button> 
                                        <button type = "button" value = {user.id} onClick = {this.props.deleteHandler}> Delete </button> </td>
                                        
                                    </tr>
                                );
                            })}

                        </tbody>

                    </table>

                </div>
            )
        }
    
}

export default UserFormDetails