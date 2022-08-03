import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./features/Layout/Layout";
import About from "./features/todo/component/About/About";
import TodoList from "./features/todo/component/TodoList/TodoList";
import Done from "./features/todo/component/Done/Done";
import PageNotFound from "./features/todo/component/PageNotFound/PageNotFound";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TodoList />} />
          <Route path="/about" element={<About />} />
          <Route path="/done" element={<Done />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
