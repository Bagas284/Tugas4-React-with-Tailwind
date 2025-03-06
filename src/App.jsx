import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoList } from "./pages/TodoList";
import { AddTodoList } from "./pages/AddList";
import { EditTask } from "./pages/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />}></Route>
        <Route path="/add" element={<AddTodoList />}></Route>
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </Router>
  );
}

export default App;
