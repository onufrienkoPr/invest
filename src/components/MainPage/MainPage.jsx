import React from "react";
import macbook from "../../assets/images/macbook.png";
import iphone from "../../assets/images/iphone.png";
import s from './MainPage.module.css'
import {NavLink} from "react-router-dom";

const MainPage = (props) => {
    return (
        <div className={s.main_page}>
            <div className={s.main_page_wrapper}>
                <div className={s.main_page_header}>
                    <h1>Smart-инвестиции</h1>
                </div>
                <div className={s.main_page_table}>
                    <div className={s.main_page_table_about}>
                        <div className={s.main_page_table_to}>
                            <p>Выберите идею. Эксперты</p>
                            <p>уже отобрали лучшие</p>
                        </div>
                        <div className={s.main_page_table_to}>
                            <p>Попробуйте</p>
                            <p>с $10</p>
                        </div>
                        <div className={s.main_page_table_to}>
                            <p>Составьте портфель</p>
                            <p>из акций</p>
                        </div>
                        <div className={s.main_page_table_to}>
                            <p>Получайте прибыль</p>
                            <p>20—80% годовых</p>
                        </div>
                    </div>
                </div>
                <div className={s.button}>
                    <NavLink to={'/investments'}><button>Начать инвестировать</button></NavLink>
                </div>
                <div className={s.main_page_pictures}>
                    <div className={s.main_page_macbook}>
                        <img src={macbook}/>
                    </div>
                    <div className={s.main_page_iphone}>
                        <img src={iphone}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainPage;