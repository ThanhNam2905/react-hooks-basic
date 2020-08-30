import React from 'react';
import './magicColor.scss';
import useRandomColor from '../../hooks/useRandomColor';

MagicBox.propTypes = {};

function MagicBox() {

    const color  = useRandomColor();

    return (
        <div className="magic__Box" style={ { backgroundColor: color } }>
        </div>
    );
}

export default MagicBox;