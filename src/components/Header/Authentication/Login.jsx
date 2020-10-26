import React from 'react';
import s from './Login.module.css';
import Modal from "./ModalComponent/Modal";

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
    const modalRef = React.useRef();

    const openModal = () =>{
        modalRef.current.openModal();
    }

    return(
        <div className={s.login}>
            <button onClick={openModal}>Open Modal</button>
            <Modal ref={modalRef}>
                <h1>Modal Header</h1>
                <p>KK</p>
                <button onClick={()=> modalRef.current.close()}>Close</button>
            </Modal>
        </div>
    )
}

export default Login;