import React from 'react';

const Dot = (props) => {
    const {color, x, y, size, index, onClick} = props;    
    const dotStyle = {
        backgroundColor: color,
        height: `${size}px`,
        width: `${size}px`,
        left: `${x}px`,
        top: `${y}px`,
    };

    return (
        <div 
            className="dot"
            style={dotStyle}
            onClick={() => onClick(index)}
        />
    );
};

export default Dot;
