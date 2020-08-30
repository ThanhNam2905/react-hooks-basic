import React from 'react';
import useClock from '../../hooks/useClock';

Clock.propTypes = {};

function Clock() {

    const { timeString } = useClock();

    return (
    <p  style={ { color: "black", fontSize: '42px'} }>{timeString}</p>
    );
    
}

export default Clock;