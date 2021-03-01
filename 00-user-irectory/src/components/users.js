import React, { Component } from "react";
import User from "./user";
import API from "../utils/app";

class Users extends Component {

  state = {
    
    results: []

  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getUsers()
      .then(res => {
        this.setState({results: res.data.results });
        console.log(this.state.results);
      })

      
      .catch(err => console.log(err));
  }


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
              
              {

                  this.state.results.length > 0 &&
                  this.state.results.map( (user)=>{
                      return <User
                      image = {user.picture.thumbnail}
                      key ={user.name.first + user.name.last}
                      name={user.name.first}
                      lastName={user.name.last}
                      email={ user.email}
                      phone={ user.phone}
                      adress={user.location.city + " " +user.location.country}
                      />;
                    } )
             
              
              }
             
             

              

            </div>

          </div>
        </>
      );
    }
  }
  
  export default Users;