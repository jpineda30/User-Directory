import React, { Component } from "react";
import Users from "./users";
import API from "../utils/app";

class List extends Component {

  state = {
    
    results: [],
    temp: []

  };

  handleInputChange = event => {

    const{value} = event.target;



    var result = this.state.results.filter(item => item.name.first.toLowerCase().includes(value));
    console.log(result);


    this.setState(
      { 
        
        temp: this.state.results.filter((item) => 
        {
          if(item.name.first.toLowerCase().includes(value) || item.name.last.toLowerCase().includes(value) || item.email.toLowerCase().includes(value))
          return item;
        })
      
      
      
      }
    );

    console.log(value);

  };

  searchUsers = async ()=>{

    document.getElementById("searchInput").value = "";

    const results =await API.getUsers()
      .then(res => {
        res.data.results.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
        this.setState({results: res.data.results });
        this.setState({temp: res.data.results });

      })

      
    return results;  
      
  };

  componentDidMount() {

    API.getUsers()
      .then(res => {
        res.data.results.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
       this.setState({results: res.data.results });
        this.setState({temp: res.data.results });
        
        
      })

      
      .catch(err => console.log(err));
  }
  


  render() {
    return (
        <>
            <header className="flex-col flex-center orange">

            <h1 className="mainFont has-text-centered is-size-2 has-text-white">Employee Directory</h1>

                <div className="semiOrange flex-row flex-center">
                    <input id="searchInput" className="p-3 m-3 secFont mx-3" type="text" onChange={this.handleInputChange} placeholder="employee"/>
                    <button id="search" className="p-3 secFont" onClick={this.searchUsers}>Search</button>
                </div>
            </header>

           

            <Users data={this.state.temp} />
        </>    

    

    );
  }
}

export default List;
