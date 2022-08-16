import React, { Component } from 'react';
import Header from './pages/Header';
import List from './pages/List';
import Footer from './pages/Footer';
import './App.css';
export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        todoName: '吃饭',
        isDone: true
      },
      {
        id: 2,
        todoName: '睡觉',
        isDone: false
      },
      {
        id: 3,
        todoName: '找富婆',
        isDone: false
      },
    ]
  };
  addTodo = todoName => {
    let { todos } = this.state;
    const todoObj = {
      id: Date.now(),
      todoName,
      isDone: false
    };
    const newTodos = [...todos];
    newTodos.push(todoObj);
    this.setState({ todos: newTodos });
  };
  updateTodo = (checked, id) => {
    // console.log(checked, id);
    let { todos } = this.state;
    let newTodos = [...todos];
    newTodos.forEach(item => {
      if (item.id === id) {
        item.isDone = checked;
      }
    });
    this.setState({ todos: newTodos });
  };
  delTodo = id => {
    // console.log(id);
    let { todos } = this.state;
    let newTodos = [...todos];
    newTodos = newTodos.filter(item => {
      return item.id !== id;
    });
    this.setState({ todos: newTodos });
  };
  updateTodoIsDone = () => {
    let { todos } = this.state;
    let newTodos = [...todos];
    let allCheckedIsDone = newTodos.every(item => item.isDone);
    // console.log(allCheckedIsDone)
    newTodos.forEach(item => { item.isDone = !allCheckedIsDone; });
    this.setState({ todos: newTodos });
  };
  delAllDone = () => {
    let { todos } = this.state;
    let newTodos = [...todos];
    newTodos = newTodos.filter(item => !item.isDone);
    this.setState({ todos: newTodos });
  };
  render() {
    const allTotal = this.state.todos.length;
    const doneTotal = this.state.todos.filter(item => item.isDone).length;
    return (<div className='todo-container'>
      <div className='todo-wrap'>
        <Header addTodo={this.addTodo} />
        <List todos={this.state.todos} updateTodo={this.updateTodo}
          delTodo={this.delTodo}
        ></List>
        <Footer allTotal={allTotal} doneTotal={doneTotal}
          updateTodoIsDone={this.updateTodoIsDone} delAllDone={this.delAllDone} />
      </div>
    </div>);
  }
}
