import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from "./Containers/HomePage/Home";
import Contact from "./Containers/ContactPage/Contact";
import About from "./Containers/AboutPage/About";
import Termsofservice from './Containers/TermsOfService/Termsofservice';
import Privacypolicy from './Containers/PrivacyPolicy/Privacypolicy';
import Faq from './Containers/FAQ/Faq';
import Usermanual from './Containers/UserManual/Usermanual';
import GlobalStyle from "./Styles/Global/GlobalStyles";
import Pricing from "./Containers/PricingPage/Pricing";
import Team from "./Containers/teamPage/Team";


function App() {

    return (
        <div className={"Talmoe-app"}>
            <GlobalStyle/>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path={"/contact"}>
                <Contact/>
            </Route>
            <Route exact path={"/about"}>
                <About/>
            </Route>
            <Route exact path={"/termsofservice"}>
                <Termsofservice/>
            </Route>
            <Route exact path={"/privacypolicy"}>
                <Privacypolicy/>
            </Route>
            <Route exact path={"/faq"}>
                <Faq/>
            </Route>
            <Route exact path={"/usermanual"}>
                <Usermanual/>
            </Route>
            <Route exact path={"/pricing"}>
                <Pricing/>
            </Route>
            <Route exact path={"/team"}>
                <Team/>
            </Route>

            <Route path='/googleDownloadButton' component={() => {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.talmoe.app&gl=NO';
                return null;
            }}/>
        </div>
    );
}

export default App;
