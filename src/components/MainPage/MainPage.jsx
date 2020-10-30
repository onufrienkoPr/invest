import React from "react";
import macbook from "../../assets/images/macbook.png";
import book from "../../assets/images/book.png";
import booktwo from "../../assets/images/booktwo.png";
import bookthree from "../../assets/images/bookthree.png";
import bookfour from "../../assets/images/bookfour.png";
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
                    <div className={s.header_two_parttwo}><h1>Пишем книги о финансах</h1></div>
                    <div className={s.flexallbook}>
                        <div className={s.fullbookf}>
                            <img className={s.book} src={book}/>
                            <div className={s.descr}>
                                <h4>Как инвестировать в IPO.</h4>
                                <h4>Настольная книга...</h4>
                            </div>
                        </div>
                        <div className={s.fullbooks}>
                            <img className={s.book} src={booktwo}/>
                            <div className={s.descr}>
                                <h4>Как инвестировать в IPO.</h4>
                                <h4>Настольная книга...</h4>
                            </div>
                        </div>
                        <div className={s.fullbookt}>
                            <img className={s.book} src={bookthree}/>
                            <div className={s.descr}>
                                <h4>Как инвестировать в IPO.</h4>
                                <h4>Настольная книга...</h4>
                            </div>
                        </div>
                        <div className={s.fullbooke}>
                            <img className={s.book} src={bookfour}/>
                            <div className={s.descr}>
                                <h4>Как инвестировать в IPO.</h4>
                                <h4>Настольная книга...</h4>
                            </div>
                        </div>
                    </div>
                    <div className={s.header_two_partthree}><h1>Отвечаем на любой вопрос про инвестиции</h1></div>
                    <div className={s.questions}>
                        <div className={s.soco}>
                            <div className={s.socialicon}><img
                                src={'https://unitedtraders.com/static/desktop/images/telegram-colored-137c79.svg'}/>
                            </div>
                            <div className={s.sss}>Telegram</div>
                        </div>
                        <div className={s.socs}>
                            <div className={s.socialicon}><img
                                src={'https://unitedtraders.com/static/desktop/images/youtube-colored-f623fb.svg'}/>
                            </div>
                            <div className={s.sss}>YouTube</div>
                        </div>
                        <div className={s.soct}>
                            <div className={s.socialicon}><img
                                src={'https://unitedtraders.com/static/desktop/images/phone-colored-ebfb7d.svg'}/></div>
                            <div className={s.sss}>Позвонить</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;