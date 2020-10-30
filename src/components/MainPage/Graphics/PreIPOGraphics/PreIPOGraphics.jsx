import React from "react";
import s from './PreIPOGraphics.module.css'

const PreIPOGraphics = () => {
    return (
        <div className={s.container_pre_graphics}>
            <div className={s.container_pre_graphics_text}>
                <p>Pre-IPO — это внебиржевой рынок. Мы предлагаем акции компаний, которые еще не торгуются на бирже, но
                    должны в скором времени объявить об IPO. Горизонт инвестиций в такие компании — один-два года.</p>
                <p>На графике сравниваем по росту стоимости:
                    200 частных технологических компаний
                    500 самых крупных компаний США.</p>
                <p>В целом, молодые частные компании растут быстрее крупных компаний.</p>
            </div>
            <div className={s.container_pre_graphics_pokaz}>
                <p>Источник:</p>
                <p>crunchbase.com</p>
            </div>
            <div className={s.container_pre_graphics_2015}>
                <div className={s.container_pre_graphics_2015_1}>
                    <div className={s.container_pre_graphics_2015_text_1}>10%</div>
                    <div className={s.container_pre_graphics_2015_text_3}>2015</div>
                </div>
                <div className={s.container_pre_graphics_2015_2}>
                    <div className={s.container_pre_graphics_2015_text_2}>10%</div>
                </div>
            </div>
            <div className={s.container_pre_graphics_2016}>
                <div className={s.container_pre_graphics_2016_1}>
                    <div className={s.container_pre_graphics_2015_text_1}>8%</div>
                    <div className={s.container_pre_graphics_2016_text_3}>2016</div>
                </div>
                <div className={s.container_pre_graphics_2016_2}>
                    <div className={s.container_pre_graphics_2015_text_2}>14%</div>
                </div>
            </div>
            <div className={s.container_pre_graphics_2017}>
                <div className={s.container_pre_graphics_2017_1}>
                    <div className={s.container_pre_graphics_2015_text_1}>15%</div>
                    <div className={s.container_pre_graphics_2017_text_3}>2017</div>
                </div>
                <div className={s.container_pre_graphics_2017_2}>
                    <div className={s.container_pre_graphics_2015_text_2}>27%</div>
                </div>
            </div>
            <div className={s.container_pre_graphics_2018}>
                <div className={s.container_pre_graphics_2018_1}>
                    <div className={s.container_pre_graphics_2015_text_1}>18%</div>
                    <div className={s.container_pre_graphics_2018_text_3}>2018</div>
                </div>
                <div className={s.container_pre_graphics_2018_2}>
                    <div className={s.container_pre_graphics_2015_text_2}>41%</div>
                </div>
            </div>
        </div>
    )
}

export default PreIPOGraphics;