import React from 'react';
import useClock from '../../hooks/useClock';
import './style.scss';

Clock2.propTypes = {};

function Clock2() {

    const { timeString } = useClock();

    return (
        <div className="clock-2">
            <p  className="clock-2__time">{timeString}</p>
        </div>
    );
    
}

export default Clock2;