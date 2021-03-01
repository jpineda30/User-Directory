import React, { Component } from "react";
import API from "../utils/app";

class Head extends Component {
    


     searchUsers = async ()=>{

      const results =await API.getUsers()
        .then(res => {
          
            let result = res.data.results;
            
            
         
            return result;

        })

        
      return results;  
        
    };



    render() {
      return (
        <>
            <header className="flex-col flex-center orange">

            <h1 className="mainFont has-text-centered is-size-2 has-text-white">Employee Directory</h1>

            <div className="semiOrange flex-row flex-center">
                <input className="p-3 m-3 secFont mx-3" type="text" placeholder="employee"/>
                <button id="search" className="p-3 secFont" onClick={()=>{this.searchUsers()}}>Search</button>
            </div>
            </header>
        </>
      );
    }
  }
  
  export default Head;