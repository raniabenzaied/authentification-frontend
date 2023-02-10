import './App.css';
import NavContainer from './components/NavContainer';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import {Routes,Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>


        <Route path={"/"} element={<Register/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/app/private"} element={<PrivateRoute/>}/>

      
      </Routes>
     
    </div>
  );
}

export default App;
