import React from 'react';
import s from './Login.module.css';
import Modal from "./ModalComponent/Modal";
import {LoginizationReduxForm, onSubmitFormDataLog, onSubmitFormDataReg, RegistrationReduxForm} from "./typeform";

const Login = () => {

    const modalRef = React.useRef();

    const openModal = () => {
        modalRef.current.openModal();
    }

    return (
        <div className={s.inline}>
            <button className={s.login} onClick={openModal}>Вход</button>
            <Modal ref={modalRef}>
                <button className={s.modalbutton} onClick={() => modalRef.current.close()}>x</button>
                <LoginForm/>
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
                <LoginizationReduxForm onSubmit={onSubmitFormDataLog}/>
            </div>
        )
    }

    return (
        <div>
            <div className={s.entryreg}>
                <p className={s.entryparagraph}>Регистрация</p>
                <p className={s.regparagraph} onClick={registerClose}>Вход</p>
            </div>
            <RegistrationReduxForm onSubmit={onSubmitFormDataReg}/>
        </div>
    )
}

export default Login;