import React from 'react';
import Investments from "./Investments";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        invests: state.invests
    }
}

const InvestmentsContainer = connect(mapStateToProps)(Investments);

export default InvestmentsContainer;