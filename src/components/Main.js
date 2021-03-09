import React from 'react';
import Card from './Card';

const Main = () => {
    return (
        <div className="main">
            <div className="mainHeader"></div>
            <div className="mainContent">
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Main;