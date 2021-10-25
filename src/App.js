import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from "./Components/Signup/Signup";
import Navbar from './Components/NavBar/Navbar';
import Survey from "./Components/Survey/Survey";
import PageNotFount from './Components/PageNotFount';
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/survey">
            <Survey />
          </PrivateRoute>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route component={PageNotFount} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
