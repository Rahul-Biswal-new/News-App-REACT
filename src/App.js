import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter as Router,
  
  Route,
  
} from "react-router-dom";
import { Routes } from 'react-router-dom';


export default class App extends Component {
  // c = 'john';
  render() {
    return (

      <div>
         <Router>
        <Navbar/>
        {/* <News pageSize={8} country = 'us' category="general"/> */}
          
          <Routes>
          {/* <Route path='/'><News pageSize={8} country = 'us' category="general"/></Route>
          <Route path='/Bussiness'><News pageSize={8} country = 'us' category="Bussiness"/></Route>
          <Route path='/Entertainment'><News pageSize={8} country = 'us' category="Entertainment"/></Route>
          <Route path='/Health'><News pageSize={8} country = 'us' category="Health"/></Route>
          <Route path='/Science'><News pageSize={8} country = 'us' category="Science"/></Route>
          <Route path='/Sports'><News pageSize={8} country = 'us' category="Sports"/></Route> */}
          <Route exact path="/" element={<News key="general" pageSize={8} country = 'us' category="general"/>}/>
          <Route exact path="/business" element={<News key="business" pageSize={8} country = 'us' category="business"/>}/>
          <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={8} country = 'us' category="Entertainment"/>}/>
          <Route exact path="/Health" element={<News key="Health" pageSize={8} country = 'us' category="Health"/>}/>
          <Route exact path="/Science" element={<News key="Science" pageSize={8} country = 'us' category="Science"/>}/>
          <Route exact path="/Sports" element={<News key="Sports" pageSize={8} country = 'us' category="Sports"/>}/>
          <Route exact path="/Technology" element={<News key="Technology" pageSize={8} country = 'us' category="Technology"/>}/>

          </Routes>
        </Router>
      </div>
    )  
  }
}
