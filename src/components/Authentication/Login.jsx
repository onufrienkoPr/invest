import React from 'react';
import s from './Login.module.css';

const Login = (props) => {
    return <div className={s.loginBlock}>
        <div className={s.price}><h4>1 300 $</h4></div>
        <div>
            <button className={s.addMoney}>+</button>
        </div>
        <div><img className={s.logo}
                  src='http://www.gravatar.com/avatar/e53eca1aaf15ae6934e70f6a999bf762?d=retro&r=g&s=50%27/'/></div>
        <div>
            <button className={s.login}>Выход</button>
        </div>
    </div>

}

export default Login;