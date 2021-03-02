import './App.css';
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import List from "./List";



const initialList = [
    {id: 1, name: 'Learn React', done: false},
    {id: 2, name: 'Learn JS', done: false},
    {id: 3, name: 'Learn Python', done: false},
];

function App() {
    const [list, setList] = useState(initialList);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        const newTodo =
            {id: Math.random(), name: inputValue, done: false}
            setList([...list, newTodo])
    };

    const inputChange = (e) => {
        setInputValue(e.target.value);
    };

    const deleteTodo = (todoId) => {
        const newList = list.filter((el)=> el.id !==todoId)
        setList(newList)
    };

    const doneTodo = (todoId) => {
        const newList = list.map((el)=> el.id === todoId ? {...el, done: true} : el)
        setList(newList)
    }
    return (
        <div className="App">
            <h1> Todo List </h1>
            <hr/>
            <input onChange={inputChange} value={inputValue} type="text"/> {" "}
            <button onClick={addTodo} type="button" className="btn btn-primary btn-sm">Add to List </button>
              <List list={list} deleteTodo={deleteTodo} doneTodo={doneTodo}/>

        </div>
    );
}

export default App;
