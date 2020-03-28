import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos' ;
import AddTodo from './components/AddTodo' ;
import './App.css';
import Header from './components/layouts/header';
//import {v4 as uuid} from "uuid";
import About from './components/pages/about'
import axios from 'axios';

class App extends Component {
  state = {
    todos:[]
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5')
     .then(res => this.setState({ todos: res.data }))
  }
  
  markComplete = ( id ) => {
    this.setState({ todos: this.state.todos.map( obj => {
      if(obj.id === id)
      {
        obj.completed = !obj.completed 
      }
      return obj ;
    }) });
  }

  deleteTodo = ( id ) => {
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then( res => this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id )] }));
  }

  addtodo = (title) => {
    axios.post('http://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })
      .then( res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addtodo={this.addtodo} />  
              <Todos todos={this.state.todos} markComplete={ this.markComplete } deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component ={About} />
        </div>
      </Router>
    );
  }
}



export default App;
