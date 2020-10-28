import React from 'react';
import s from './Login.module.css';
import Modal from "./ModalComponent/Modal";
import {reduxForm} from "redux-form";
import {Loginization, Registration} from "./typeform";

const Login = () => {

    // const onSubmitFormData = (formData) => {// сюда собираются данные
    //     props.login(formData.email, formData.password, formData.rememberMe)
    // }
    const modalRef = React.useRef();

    const openModal = () => {
        modalRef.current.openModal();
    }

    return (
        <div className={s.inline}>
            <button className={s.login} onClick={openModal}>Вход</button>
            <Modal ref={modalRef}>
                <button className={s.modalbutton} onClick={() => modalRef.current.close()}>x</button>
                <LoginReduxForm/>
            </Modal>
        </div>
    )
}
const LoginForm = (props) => {

    const [change, SetRegistration] = React.useState(false);

    const registerOpen = () => {
        SetRegistration(true);
    }

    const registerClose = () => {
        SetRegistration(false);
    }

    if (!change) {
        return (
            <div>
                <div className={s.entryreg}>
                    <p className={s.entryparagraph}>Вход</p>
                    <p className={s.regparagraph} onClick={registerOpen}>Регистрация</p>
                </div>
                <Loginization/>
            </div>
        )
    }

    return (
        <div>
            <div className={s.entryreg}>
                <p className={s.entryparagraph}>Регистрация</p>
                <p className={s.regparagraph} onClick={registerClose}>Вход</p>
            </div>
            <Registration/>
        </div>
    )

}

const LoginReduxForm = reduxForm({form: 'login'}, {form: 'register'})(LoginForm)

export default Login;