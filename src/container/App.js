import { BrowserRouter, Routes, Route} from "react-router-dom";
import {PATH} from '../utils/index';
import Login from "../router/Login";
import System from '../router/system';
import HomePage from "../container/HomePage/home";
import Home from "../router/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={PATH.LOGIN} element={<Login />} />
          <Route path={PATH.SYSTEM} element={<System />} />
          <Route path={PATH.HOMEPAGE} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;