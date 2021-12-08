import React, { Component } from "react";
import '../App.css';

class UserFormDetails extends Component {

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

                            </tr>
                        </thead>
                        <tbody>
                            {this.props.users.map((user) => {
                                return (
                                    <tr>
                                        <td> {user.firstName} </td>
                                        <td> {user.lastName} </td>
                                        <td> {user.email} </td>
                                        <td> {user.date} </td>
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