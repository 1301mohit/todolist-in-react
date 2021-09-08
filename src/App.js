import Header from './Components/Header';
import { Todos  } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import React, {useState, useEffect} from 'react';
import { AddTodo } from './Components/AddTodo';
import { About } from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodos;
  console.log("abcqwer",localStorage.getItem("todos"));
  if(localStorage.getItem("todos") === null) {
    initTodos = [];
  }
  else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo = (title, desc) => {

    // Deleting this way in react does not work
    //let index = todos.indexOf(todo);
    //todos.splice(index, 1);

    let sno;
    console.log("abc"+todos.length);
    if(todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    console.log("Todos "+title+" "+desc+" "+sno);
    const myTodo = {
      sno : sno,
      title : title,
      desc : desc
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  }

  const onDelete = (todo) => {
    console.log("I am delete todo",todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Router>
        <Header title="Todos List" searchBar={false}/>
        <Switch>
          <Route exact path="/" render={() => {
            return(
              <>
                <AddTodo addTodo={addTodo}/>
                <Todos todos = {todos} onDelete = {onDelete}/>
              </>
            )
          }} />
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
