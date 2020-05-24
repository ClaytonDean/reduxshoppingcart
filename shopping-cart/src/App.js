import React from 'react';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home"

function App() {
  return (
      <Router>
    <div className="App">
       <Navbar /> 
       <Switch>
        <Route exact path="/" component ={Home} />
        {/* <Route exact path="/portfolio" component ={Portfolio} />
        <Route exact path="/contact" component ={Contact} /> */}
      </Switch>
    </div>
      </Router>
  );
}

export default App;
