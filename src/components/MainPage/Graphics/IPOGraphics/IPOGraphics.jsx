import React from "react";
import s from './IPOGraphics.module.css'

const IPOGraphics = () => {
    return (
        <div className={s.container_graphics}>
            <div className={s.container_graphics_text}>
                <p>IPO — первое публичное размещение. Акции компании начинают торговаться на бирже, растет спрос, растет
                    цена и инвесторы могут заработать на этом росте.</p>
                <p>Мы предлагаем купить акции за несколько дней до IPO и продать через три месяца после.</p>
                <p>На графике — рост портфеля, если инвестировать в каждое IPO, которое мы предлагаем.</p>
            </div>
            <div className={s.container_graphics_pokaz}>
                <p>Показан результат</p>
                <p>c учётом комиссий</p>
            </div>
            <div className={s.container_graphics_2015}>
                <div className={s.container_graphics_2015_text1}>
                    5 идей
                </div>
                <div className={s.container_graphics_2015_text2}>
                    +8%
                </div>
                <div className={s.container_graphics_2015_text3}>
                    2015
                </div>
            </div>
            <div className={s.container_graphics_2016}>
                <div className={s.container_graphics_2015_text1}>
                    10 идей
                </div>
                <div className={s.container_graphics_2015_text2}>
                    +40%
                </div>
                <div className={s.container_graphics_2016_text3}>
                    2016
                </div>
            </div>
            <div className={s.container_graphics_2017}>
                <div className={s.container_graphics_2015_text1}>
                    12 идей
                </div>
                <div className={s.container_graphics_2015_text2}>
                    +22%
                </div>
                <div className={s.container_graphics_2017_text3}>
                    2017
                </div>
            </div>
            <div className={s.container_graphics_2018}>
                <div className={s.container_graphics_2015_text1}>
                    32 идей
                </div>
                <div className={s.container_graphics_2015_text2}>
                    +39%
                </div>
                <div className={s.container_graphics_2018_text3}>
                    2018
                </div>
            </div>
        </div>
    )
}

export default IPOGraphics;