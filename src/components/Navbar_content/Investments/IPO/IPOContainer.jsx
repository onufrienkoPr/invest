import React from 'react';
import {connect} from "react-redux";
import IPO from "./IPO";

let mapStateToProps = (state) => {
    return{
        invests: state.invests
    }
}

const IPOContainer = connect(mapStateToProps)(IPO);

export default IPOContainer;