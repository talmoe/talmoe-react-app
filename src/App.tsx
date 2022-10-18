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
            <Route path='/IOSDownloadButton' component={() => {
                window.location.href = 'https://apps.apple.com/no/app/talmoe/id1636467616?l=nb&fbclid=IwAR1xsNp-KNw45cJSFdt02pVp-FtPsgmQ6LSvI5ICeuQdJwaY10a3W0PpTfk';
                return null;
            }}/>
        </div>
    );
}

export default App;
