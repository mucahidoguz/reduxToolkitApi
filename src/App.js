import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/header/header";
import Home from "./Pages/home/home";
import Login from "./Pages/login/login";

function App(){
  return (
    <div className=" container py-3">
     <Header/>

     <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
     </HashRouter>
    </div>
  );
}

export default App;
