import React from 'react';

import './MainPage.css';

const MainPage = () => {
    return( 
        <header className = "header">
        <div className = "header__text-box"> 
            <h1 className = "heading-primary">
                <span className = "heading-primary--main">Portfolio</span>
                <span className = "heading-primary--sub">Bipanjeet Kaur Gill</span>
            </h1>
            <a href ="#" className = "btn btn-white btn--animated">About me</a>
        </div>
    </header>

    )
}
export default MainPage;