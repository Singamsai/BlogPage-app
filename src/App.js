import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage/Home";
import Createblog from "./pages/createblogpage/Createblog";
import Readblog from "./pages/readblogpage/Readblog";
import Login from "./pages/loginpage/Login";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginCheck } from "./redux/Action";

function App() {
  const [checklogin, setChecklogin] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loginCheck(checklogin, setChecklogin));
  }, [checklogin, setChecklogin, dispatch]);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/home"
            element={checklogin ? <Home /> : <Login />}
          ></Route>
          <Route
            path="/createblog"
            element={checklogin ? <Createblog /> : <Login />}
          ></Route>
          <Route
            path="/readblog"
            element={checklogin ? <Readblog /> : <Login />}
          ></Route>
        </Routes>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
