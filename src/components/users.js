import React from "react";
import User from "./user";




function Users (props) {

      const resetName = (event)=>{

        props.sort(event);

        //reset
        let ids = ["name.first","name.last","email","phone","location"];


        let id = ids.filter((element)=>element==event.target.id);
        let selector = document.getElementById(id);
        if(selector.dataset.sort == "" || selector.dataset.sort == "↑")
        {

          selector.dataset.sort = "↓";
          selector.innerText = selector.dataset.name + " ↓";
          props.sort("↓",selector.id);
        }
        else{
          selector.dataset.sort = "↑";
          selector.innerText = selector.dataset.name + " ↑";
          props.sort("↑",selector.id);
        }


        ids = ids.filter((element)=>element!=event.target.id);
        
          ids.forEach((val)=>{
            let selector = document.getElementById(val);
            
            selector.innerText = selector.dataset.name;


          });
        
        


      }
    
      return (
        <>
          <div className="content flex-row flex-center">

            <div className="flex-col pt-6">

            
              <div className="titles flex-row">
                  
                  <div></div>
                  <div id="name.first" data-name="First Name" data-sort="↓" onClick={resetName}>First Name ↓</div>
                  <div id="name.last" data-name="Last Name" data-sort="" onClick={resetName}>Last Name</div>
                  <div id ="email" data-name="E-mail" data-sort="" onClick={resetName}>E-mail</div>
                  <div id ="phone" data-name="Phone" data-sort="" onClick={resetName}>Phone</div>
                  <div id="location" data-name="Address" data-sort="" onClick={resetName}>Address</div>
                  
              </div>
              
              {

                  props.data.length > 0 &&
                  props.data.map( (user)=>{
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
      )
    
  }
  
  export default Users;