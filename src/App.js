import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import InvestmentsContainer from "./Investments/InvestmentsContainer";
import MyBriefcaseContainer from "./MyBriefcase/MyBriefcaseContainer";
import Header from "./Header/Header";

function App() {
    return (
        <div className="container">
            <div className="app-wrapper">
                <Header/>
                <div className="app-wrapper_content">
                    <Route path='/investments'
                           render={() => <InvestmentsContainer/>}/>
                    <Route path={'/open-investments'}
                           render={() => <MyBriefcaseContainer/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
