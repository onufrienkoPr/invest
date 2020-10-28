import React from "react";
import s from './Graphics.module.css'

const Graphics = (props) => {

    if(!props.change){
    return (
            <div className={s.container_graphics}>
                <div className={s.container_graphics_text}>
                    <p>IPO — первое публичное размещение. Акции компании начинают торговаться на бирже, растет спрос, растет цена и инвесторы могут заработать на этом росте.</p>
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
                </div>
            </div>
    )}
    return (
        <div>
            График Pre-IPO
        </div>
    )
}

export default Graphics;