import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import {   createBrowserRouter,
//   RouterProvider, Router,Switch, Route} from "react-router-dom";  

export default class App extends Component {
  // c = 'john';
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={8} country = 'us' category="general"/>
          {/* <Route path='/'><News pageSize={8} country = 'us' category="general"/></Route>
          <Route path='/Bussiness'><News pageSize={8} country = 'us' category="Bussiness"/></Route>
          <Route path='/Entertainment'><News pageSize={8} country = 'us' category="Entertainment"/></Route>
          <Route path='/Health'><News pageSize={8} country = 'us' category="Health"/></Route>
          <Route path='/Science'><News pageSize={8} country = 'us' category="Science"/></Route>
        <Route path='/Sports'><News pageSize={8} country = 'us' category="Sports"/></Route> */}

      </div>
    )  
  }
}
