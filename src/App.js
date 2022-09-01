import "./App.css";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React, { useEffect } from "react";

function App() {
  const url = "https://catfact.ninja/docs";

  const fetchCat = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCat(url)
  }, [])

  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
