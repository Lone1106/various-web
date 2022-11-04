import { Fragment, useState } from "react";

import TodoList from "./components/TodoList/TodoList";
import Header from "./components/UI/Header";

import "./styles.css";

let DATA = [];
const savedData = localStorage.getItem("todoList");
if (savedData) DATA = JSON.parse(savedData);

function App() {
  const [data, setData] = useState(DATA);
  const [error, setError] = useState(false);
  const noteAmount = data.length;

  const saveList = () => {
    localStorage.setItem("todoList", JSON.stringify(data));
  };

  const addItemHandler = (newItem) => {
    if (newItem.text === "") {
      setError(true);
      return;
    } else setError(false)

    setData((prevData) => {
      return [...prevData, newItem];
    });
  };

  const clearItemsHandler = (e) => {
    e.preventDefault();
    setData([]);
  };

  const removeSingleItemHandler = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <Fragment>
      <Header clearData={clearItemsHandler} save={saveList} />
      {error && <h4>Please enter some text!</h4>}
      <TodoList
        addTodo={addItemHandler}
        data={data}
        amount={noteAmount}
        removeOne={removeSingleItemHandler}
      />
    </Fragment>
  );
}

export default App;
