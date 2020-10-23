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
            <div className={s.textError}>Войдите, чтобы увидеть инвестиции</div>
            <div className={s.textErrorTwo}>В этот раздел попадают ваши открытые инвестиции</div>
            <div className={s.auth}>
                <div className={s.input}><button>Войти</button></div>
                <div className={s.inputRegistration}><button>Зарегистрироваться</button></div>
            </div>
        </div>
    </>
}
export default MyInvestsContainer;