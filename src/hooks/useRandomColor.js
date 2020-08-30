import React, { useState, useEffect, useRef } from 'react';

function randomColor(currentColor) {
    const COLOR_LIST = ["red", "blue", "yellow", "pink", "green"];
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;
    while (newIndex === currentIndex) {
        newIndex = Math.trunc(Math.random() *5);
    }
    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];
}

function useRandomColor() {

    const [color, setColor] = useState('tranparent');
    const colorRef = useRef('tranparent');

    useEffect(() => {
        
        const colorInterval = setInterval(() => {
            console.log("change color", colorRef.current);
            const newColor = randomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        }, 1000);

        return () => {
            // cleanup
            clearInterval(colorInterval);
        }
    }, [])

    return color;
}

export default useRandomColor;