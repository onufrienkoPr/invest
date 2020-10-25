import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import InvestmentsContainer from "./components/Navbar_content/Investments/InvestmentsContainer";
import Header from "./components/Header/Header";
import IPOContainer from "./components/Navbar_content/Investments/IPO/IPOContainer";
import PreIPOContainer from "./components/Navbar_content/Investments/PreIPO/PreIPOContainer";
import OTCContainer from "./components/Navbar_content/Investments/OTC/OTCContainer";
import StocksContainer from "./components/Navbar_content/Investments/Stocks/StocksContainer";
import MyInvestsContainer from "./components/Navbar_content_MyInvents/MyInvents/MyInventsContainer";
import ArhiveContainer from "./components/Navbar_content_MyInvents/MyInvents/Archive/ArchiveContainer";
import MainPage from "./components/MainPage/MainPage";
import IdeaContainer from "./components/Navbar_content/Investments/Idea/IdeaContainer";

const App = () => {
    return (
        <div className="container">
            <div className="app-wrapper">
                <Header/>
                <div className="app-wrapper_content">
                    <Switch>
                        <Route exact path="/"
                               render={() => <MainPage/>}/>
                        <Route exact path='/investments'
                               render={() => <InvestmentsContainer/>}/>
                        <Route path='/investments/idea/:id?'
                               render={() => <IdeaContainer/>}/>
                        <Route path={'/investments/open-investments'}
                               render={() => <MyInvestsContainer/>}/>
                        <Route path={'/investments/ipo'}
                               render={() => <IPOContainer/>}/>
                        <Route path={'/investments/pre-ipo'}
                               render={() => <PreIPOContainer/>}/>
                        <Route path={'/investments/otc'}
                               render={() => <OTCContainer/>}/>
                        <Route path={'/investments/stocks'}
                               render={() => <StocksContainer/>}/>
                        <Route path={'/investments/open-investment/archive'}
                               render={() => <ArhiveContainer/>}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
