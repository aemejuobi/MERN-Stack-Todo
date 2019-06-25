import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";
import './App.css';

class App extends Component {
  render(){
    return (
        <div className="container">
          <Router>
            <Navbar />
            <Route path="/" exact component={TodoList} />
            <Route path="/create" exact component={CreateTodo} />
            <Route path="/edit/:id" exact component={EditTodo} />
          </Router>
        </div>
    );
  }
}

export default App;
