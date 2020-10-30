import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.all}>
            <div className={s.lineo}></div>
            <div className={s.blocks}>
                <div className={s.one}>
                    <div className={s.number}>+7 495 646-15-57</div>
                    <div className={s.number}>8 800 333-66-81</div>
                    <div className={s.email}>welcome@unitedtraders.com</div>
                </div>
                <div className={s.two}>
                    <div className={s.deffont}>ИНВЕСТИЦИИ</div>
                    <div className={s.deffont}>ТРЕЙДИНГ</div>
                </div>
                <div className={s.three}>
                    <div className={s.deffont}>ПАРТНЕРСТВО</div>
                    <div className={s.deffont}>КОНТАКТЫ</div>
                </div>
                <div className={s.four}>
                    <div className={s.social}><img
                        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png'}/> YouTube
                    </div>
                    <div className={s.social}><img
                        src={'https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png'}/> Twitter
                    </div>
                    <div className={s.social}><img
                        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png'}/> Telegram
                    </div>
                </div>
                <div className={s.five}>
                    <div className={s.visa}><img
                        src={'https://irisingym.com/wp-content/uploads/2019/02/visa-hd-png-credit-card-visa-and-master-card-png-hd-699-1.png'}/>
                    </div>
                    <div className={s.policy}>Положения о рисках</div>
                    <div className={s.policy}>Политика приватности</div>
                </div>
            </div>
            <div className={s.linet}></div>
            <div className={s.other}>
                <div className={s.phone}><img
                    src={'https://cdn.pixabay.com/photo/2017/01/13/01/22/mobile-1976104_960_720.png'}/>
                </div>
                <div className={s.mobile}>Мобильная версия сайта</div>
            </div>
        </div>
    )
}

export default Footer;
