import s from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import React from "react";

export const onSubmitFormDataLog = (formData) => {
    console.log(formData.email, formData.password)
}

export const onSubmitFormDataReg = (formData) => {
    console.log(formData.fname, formData.sname, formData.email, formData.password)
}

    const Loginization = (props) => {
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

    const Registration = (props) => {
        return (
            <form onSubmit={props.handleSubmit} className={s.fullform}>
                <div>
                    <Field placeholder={"Имя"} name={'fname'} component={Input}/>
                </div>
                <div>
                    <Field placeholder={"Фамилия"} name={'sname'} component={Input}/>
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

export const LoginizationReduxForm = reduxForm({form: 'login'})(Loginization)
export const RegistrationReduxForm = reduxForm({form: 'register'})(Registration)