import Dashboard from './Dashboard';
//import Login from './login';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
//import SignUp from './SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {/* <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
  <Route path="/sign-up" element={<SignUp />}></Route>*/}
          <Route path="/dashboard" element={<Dashboard />}></Route>

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
