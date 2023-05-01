import Dashboard from './Dashboard';
import Login from './login';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import logo from "./images/logo.png"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
