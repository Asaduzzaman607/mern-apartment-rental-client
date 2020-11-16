import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookHouse from "./Components/BookHouse/BookHouse/BookHouse";


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

                <Route path="/booking">
                  <BookHouse></BookHouse>
                </Route>


              </Switch>
            </Router>
        </>
  );
}

export default App;
