import React, { useState } from 'react';
import './style.scss';
ColorBox.propTypes = {
    
};

function getRandomColor() {
    const COLOR_LIST = ["lightblue", "green", "yellow", "white", "black"];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {

    const [color, setColor] = useState(() => {
        const initialState = localStorage.getItem('box-color') || 'deeppink';
        console.log(initialState);
        return initialState;
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box-color', newColor);
    }

    return (
        <div className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}>
                Color Box
        </div>
    );
}

export default ColorBox;