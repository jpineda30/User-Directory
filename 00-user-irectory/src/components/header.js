import React, { Component } from "react";

class Head extends Component {
  
    render() {
      return (
        <>
            <header className="flex-col flex-center orange">

            <h1 className="mainFont has-text-centered is-size-2 has-text-white">Employee Directory</h1>

            <div className="semiOrange flex-row flex-center">
                <input className="p-3 m-3 secFont mx-3" type="text" placeholder="employee"/>
                <button id="search" className="p-3 secFont">Search</button>
            </div>
            </header>
        </>
      );
    }
  }
  
  export default Head;