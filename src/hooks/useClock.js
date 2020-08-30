import { useState, useEffect } from 'react';

function formatDate(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}


function useClock() {

    const [timeString, setTimeString] = useState('');
    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const convertTimeString = formatDate(now); // convert Object Date thanh` String hh:mm:ss

            setTimeString(convertTimeString);
        }, 1000);
        return () => {
            // cleanup
            console.log("Clock cleanup");
            clearInterval(clockInterval);
        }
    }, [])

    return { timeString };
}

export default useClock;