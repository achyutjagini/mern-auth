import Dashboard from './Dashboard';
import Login from './login';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import logo from "./images/logo.png"
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
