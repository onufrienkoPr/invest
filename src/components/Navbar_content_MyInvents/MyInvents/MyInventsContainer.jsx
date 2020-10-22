import React from 'react';
import LinksMyInvests from "../../LinksMyInvests/LinksMyInvests";
import s from './MyInvestsContainer.module.css'
import error from './../../../assets/images/error.png'

const MyInvestsContainer = () => {
    let state = {
        text: 'Мои инвестиции'
    }
    return <>
        <LinksMyInvests state={state}/>
        <div className={s.myInvests}>
            <img className={s.logoError} src={error}/>
        </div>
    </>
}
export default MyInvestsContainer;