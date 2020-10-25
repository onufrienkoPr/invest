import React from "react";
import macbook from "../../assets/images/macbook.png";
import iphone from "../../assets/images/iphone.png";

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="main-page_wrapper">
                <div className="main-page_header">
                    <h1>Smart-инвестиции</h1>
                </div>
                <div className="main-page_table">
                    <div>
                        Выберите идею. Эксперты уже отобрали лучшие
                    </div>
                    <div>
                        Попробуйте с $10
                    </div>
                    <div>
                        Составьте портфель из акций
                    </div>
                    <div>
                        Получайте прибыль 20—80% годовых
                    </div>
                </div>
                <button>Начать инвестировать</button>
                <div className="main-page_pictures">
                    <div className="main-page_macbook">
                        <img src={macbook}/>
                    </div>
                    <div className="main-page_iphone">
                        <img src={iphone}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainPage;