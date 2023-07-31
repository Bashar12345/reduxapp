import './App.css';
import { BrowserRouter, Routes ,Route, Link } from "react-router-dom";
import Login from "./u/login";
import Register from "./u/register";
import Home from "./Home";
import AuthRoute from "./u/authRoute";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        hello api
        <nav>
        <Link to='/login'> login </Link>
        <Link to='/'> Home </Link>
        
        </nav>
        
         <Routes>
          <Route exact path="/login" element={Login} />
          <Route  exact path="/Home" component={Home}/>

          {/* <Route exact path="/register" element={<Register/>} /> */}
          {/* <Route exact path="/" component={< AuthRoute />} >
           
          </Route> */}
          {/* <AuthRoute exact path="/" component={Home} />*/}
         </Routes>  
      </div>
    </BrowserRouter>
  );
};

export default App;