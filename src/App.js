import Home from "./myComponents/Home";
import Header from "./myComponents/Header";
import Form from "./myComponents/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Form />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
