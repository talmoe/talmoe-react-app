import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from "./Containers/Home";
import Contact from "./Containers/Contact";
import About from "./Containers/About";



function App() {

    return (
      <div className={"Talmoe-app"}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path={"/contact"}>
          <Contact />
        </Route>
        <Route exact path={"/about"}>
          <About />
        </Route>
      </div>
  );
}

export default App;
