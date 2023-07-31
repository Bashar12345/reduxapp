import './App.css';
import { BrowserRouter, Routes ,Route, Link } from "react-router-dom";
import LoginPage from "./u/login";
import RegisterPage from "./u/register";
import HomePage from "./Home";
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
          <Route exact path="/login" element={ <LoginPage/> } />
          <Route  exact path="/" component={ HomePage }/>

          <Route exact path="/register" element={<RegisterPage/>} />
          {/* <Route exact path="/" component={< AuthRoute />} >
           
          </Route> */}
          {/* <AuthRoute exact path="/" component={Home} />*/}
         </Routes>  
      </div>
    </BrowserRouter>
  );
};

export default App;