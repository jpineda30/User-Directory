import React, { Component } from "react";

class User extends Component {
  
    render() {
      return (
        <>

            <div class="person flex-row">
                  <div class="pin"></div>
                  <div class="pic"></div>
                  <div class = "std" id="firstName">First Name</div>
                  <div class = "std" id="lastName">Last Name</div>
                  <div class = "std" id="eMail">E-mail</div>
                  <div class = "std" id="phone">Phone</div>
                  <div class = "std" id="adress">Adress</div>
                  
              </div>

              
        </>
      );
    }
  }
  
  export default User;