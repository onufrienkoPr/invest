import React from 'react';
import s from './Login.module.css';
import Modal from "./ModalComponent/Modal";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";
import {register} from "../../../serviceWorker";

// class Login extends React.Component {
//     // state = {
//     //     isAuth: false
//     // }
//     // toLogin = () => {
//     //     this.setState({
//     //         isAuth: true
//     //     })
//     // }
//     // toLogout = () => {
//     //     this.setState({
//     //         isAuth: false
//     //     })
//     // }
//
//     render() {
//         return <div className={s.loginBlock}>
//
//             <div className={s.inline}>
//                 <div className={s.price}><h4>1 300 $</h4></div>
//                 <div>
//                     <button className={s.addMoney}>+</button>
//                 </div>
//                 <div><img className={s.logo}
//                           src='http://www.gravatar.com/avatar/e53eca1aaf15ae6934e70f6a999bf762?d=retro&r=g&s=50%27/'/>
//                 </div>
//                 <div className={s.inline}>
//                     <button className={s.login} onClick={this.toLogout}>Выход</button>
//                 </div>
//             </div>
//
//             <div className={s.inline}>
//                 <button className={s.login} onClick={this.toLogin}>Вход</button>
//             </div>
//
//         </div>
//     }
// }

const Login = () => {

    // const onSubmitFormData = (formData) => {// сюда собираются данные
    //     props.login(formData.email, formData.password, formData.rememberMe)
    // }
    const modalRef = React.useRef();

    const openModal = () => {
        modalRef.current.openModal();
    }

    const openModalRegistration = () => {
        modalRef.current.openRegistration();
    }

    return (
        <div className={s.inline}>
            <button className={s.login} onClick={openModal}>Вход</button>
            <button className={s.registration} onClick={openModalRegistration}>Регистрация</button>
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
            <form onSubmit={props.handleSubmit} className={s.fullform}>
                <div className={s.entryreg}>
                    <p className={s.entryparagraph}>Вход</p>
                    <p className={s.regparagraph} onClick={registerOpen}>Регистрация</p></div>
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
    return (
        <form onSubmit={props.handleSubmit} className={s.fullform}>
            <div className={s.entryreg}>
                <p className={s.entryparagraph}>Регистрация</p>
                <p className={s.regparagraph} onClick={registerClose}>Вход</p>
            </div>
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

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;