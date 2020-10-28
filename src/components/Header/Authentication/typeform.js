import s from "./Login.module.css";
import {Field} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import React from "react";

    export const Loginization = (props) => {
        return (
            <form onSubmit={props.handleSubmit} className={s.fullform}>
                <div>
                    <Field placeholder={"Логин/Почта"} name={'email'} component={Input}/>
                </div>
                <div>
                    <Field placeholder={"Пароль"} name={'password'} component={Input}
                           type={'password'}/>
                </div>
                <div>
                    <button className={s.entrybutton}>Вход</button>
                </div>
            </form>
        )
    }

    export const Registration = (props) => {
        return (
            <form onSubmit={props.handleSubmit} className={s.fullform}>
                <div>
                    <Field placeholder={"Имя"} name={'firstName'} component={Input}/>
                </div>
                <div>
                    <Field placeholder={"Фамилия"} name={'secondName'} component={Input}/>
                </div>
                <div>
                    <Field placeholder={"Логин/Почта"} name={'email'} component={Input}/>
                </div>
                <div>
                    <Field placeholder={"Пароль"} name={'password'} component={Input}
                           type={'password'}/>
                </div>
                <div>
                    <button className={s.regbutton}>Регистрация</button>
                </div>
            </form>
        )
    }
