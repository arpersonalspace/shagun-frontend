import Homesccreen from "./component/Homesccreen";
import "./App.css";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./component/SignIn";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Homesccreen} />
          <Route exact path="/signIN" component={SignIn}></Route>
        </Switch>
   
      </Router>
     
    </div>
  );
}

export default App;
