import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="header">
                    <div className="main-logo">
                        Logo
                    </div>
                    <div className="header_main-menu">
                        <ul className="main-menu">
                            <li className="main-menu_item"><a>Инвестиционные идеи</a></li>
                            <li className="main-menu_item"><a>Мой портфель</a></li>
                        </ul>
                    </div>
                    <div className="header_user-menu">
                        <div>
                            <button>Выход</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
