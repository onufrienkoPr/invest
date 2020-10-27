import React, {forwardRef, useImperativeHandle} from "react";
import s from './../Login.module.css';
import ReactDOM from "react-dom";

const Modal = forwardRef((props, ref) => {
    const [display, setDisplay] = React.useState(false);

    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            openRegistration: () => open(),
            close: () => close()
        }
    });

    const open = () => {
        setDisplay(true)
    }

    const close = () => {
        setDisplay(false)
    }

    if (display) {

        return ReactDOM.createPortal(
            <div className={s.modal_wrapper}>
                <div onClick={close} className={s.modal_backdrop}/>
                <div className={s.modal_box}>
                    {props.children}
                </div>
            </div>, document.getElementById('modal-root'))

    }

    return null;
});

export default Modal;