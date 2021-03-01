import React, { Component } from "react";
import User from "./user";

class Users extends Component {
  
    render() {
      return (
        <>
          <div id="body" className="flex-row flex-center p-3 my-3">

            <div className="content flex-col">

            
              <div className="titles flex-row">
                  
                  <div></div>
                  <div>First Name</div>
                  <div>Last Name</div>
                  <div>E-mail</div>
                  <div>Phone</div>
                  <div>Adress</div>
                  
              </div>
             
              <User></User>
              <User></User>
              <User></User>
              <User></User>
              <User></User>
              <User></User>

            </div>

            </div>
        </>
      );
    }
  }
  
  export default Users;