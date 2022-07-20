import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from "./Containers/HomePage/Home";
import Contact from "./Containers/ContactPage/Contact";
import About from "./Containers/AboutPage/About";
import Termsofservice from './Containers/TermsOfService/Termsofservice';
import Privacypolicy from './Containers/PrivacyPolicy/Privacypolicy';
import Faq from './Containers/FAQ/Faq';
import Usermanual from './Containers/UserManual/Usermanual';



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
      <Route exact path={"/termsofservice"}>
        <Termsofservice />
      </Route>
      <Route exact path={"/privacypolicy"}>
        <Privacypolicy />
      </Route>
      <Route exact path={"/faq"}>
        <Faq />
      </Route>
      <Route exact path={"/usermanual"}>
        <Usermanual />
      </Route>
    </div>
  );
}

export default App;
