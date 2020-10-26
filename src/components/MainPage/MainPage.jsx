import React from "react";
import macbook from "../../assets/images/macbook.png";
import iphone from "../../assets/images/iphone.png";
import s from './MainPage.module.css'

const MainPage = () => {
    return (
        <div className={s.main_page}>
            <div className={s.main_page_wrapper}>
                <div className={s.main_page_header}>
                    <h1>Smart-инвестиции</h1>
                </div>
                <div className={s.main_page_table}>
                    <div className={s.main_page_table_about}>
                        <div className={s.main_page_table_to}>
                            <div>Выберите идею. Эксперты</div>
                            <div>уже отобрали лучшие</div>
                        </div>
                        <div className={s.main_page_table_to}>
                            <div>Попробуйте</div>
                            <div>с $10</div>
                        </div>
                        <div className={s.main_page_table_to}>
                            <div>Составьте портфель</div>
                            <div>из акций</div>
                        </div>
                        <div className={s.main_page_table_to}>
                            <div>Получайте прибыль</div>
                            <div>20—80% годовых</div>
                        </div>
                    </div>
                </div>
                <div className={s.button}>
                    <button>Начать инвестировать</button>
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