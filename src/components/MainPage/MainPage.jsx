import React from "react";
import macbook from "../../assets/images/macbook.png";
import iphone from "../../assets/images/iphone.png";
import ava from "../../assets/images/ava.png";
import s from './MainPage.module.css'
import {NavLink} from "react-router-dom";
import Graphics from "./Graphics/Graphics";

const MainPage = (props) => {

    const [change, setChange] = React.useState(false);

    const openPreIPO = () => {
        setChange(true)
    }

    const openIPO = () => {
        setChange(false)
    }

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
                    <NavLink to={'/investments'}>
                        <button>Начать инвестировать</button>
                    </NavLink>
                </div>
                <div className={s.main_page_pictures}>
                    <div className={s.main_page_macbook}>
                        <img src={macbook}/>
                    </div>
                    <div className={s.main_page_iphone}>
                        <img src={iphone}/>
                    </div>
                </div>
                <div className={s.graphics}>
                    <div className={s.graphics_header}>
                        <div className={s.result_invest}>Результаты инвестиций</div>
                        <div className={s.result_ipo}><label onClick={openIPO} exact
                                                             activeclassname={s.current}>IPO</label></div>
                        <div className={s.result_pre_ipo}><label onClick={openPreIPO} exact
                                                                 activeclassname={s.current}>Pre-IPO</label></div>
                    </div>
                    <Graphics change={change}/>
                </div>
                <div className={s.header_two_part}><h1>Инвестируем на американском рынке 11 лет</h1></div>
                <div className={s.container_two_part}>
                    В основе нашей команды профессиональные трейдеры, которые объединились в 2009 году
                    и основали United Traders, инвестиционную компанию. Наша штаб-квартира находится
                    в Москве. Сотрудники работают по всему миру от Калифорнии до Комсомольска-на-Амуре.
                </div>
                <div className={s.container_ava}>
                    <div className={s.container_ava_full_1}>
                        <div className={s.container_ava_1}>
                            <div className={s.ava_1}><img src={ava}/></div>
                        </div>
                        <div className={s.ava_text_name}>Ольга Кумысова</div>
                        <div className={s.ava_text_position}>Сооснователь, Business Development</div>
                    </div>
                    <div className={s.container_ava_full_1}>
                        <div className={s.container_ava_1}>
                            <div className={s.ava_1}><img src={ava}/></div>
                        </div>
                        <div className={s.ava_text_name}>Ольга Кумысова</div>
                        <div className={s.ava_text_position}>Сооснователь, Business Development</div>
                    </div>
                    <div className={s.container_ava_full_1}>
                        <div className={s.container_ava_1}>
                            <div className={s.ava_1}><img src={ava}/></div>
                        </div>
                        <div className={s.ava_text_name}>Ольга Кумысова</div>
                        <div className={s.ava_text_position}>Сооснователь, Business Development</div>
                    </div>
                    <div className={s.container_ava_full_1}>
                        <div className={s.container_ava_1}>
                            <div className={s.ava_1}><img src={ava}/></div>
                        </div>
                        <div className={s.ava_text_name}>Ольга Кумысова</div>
                        <div className={s.ava_text_position}>Сооснователь, Business Development</div>
                    </div>
                </div>
                <div>
                    <div className={s.header_two_part}><h1>Награды STADIK RAZNESEM</h1></div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;