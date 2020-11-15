import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
        <>
            <Router>
              <Switch>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route exact path="/">
                  <Home></Home>
                </Route>
              </Switch>
            </Router>
        </>
  );
}

export default App;
