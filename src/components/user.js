import React from "react";

function User(props){
  
   
      return (
        <>

            <div className="person flex-row">

                  <div className="pin"></div>
                  <img alt = "img" src={props.image} className="pic"/>
                  <div className = "std" id="firstName">{props.name}</div>
                  <div className = "std" id="lastName">{props.lastName}</div>
                  <div className = "std" id="eMail">{props.email}</div>
                  <div className = "std" id="phone">{props.phone}</div>
                  <div className = "std" id="adress">{props.adress}</div>
                  
              </div>

              
        </>
      );
    
    }
  
  export default User;