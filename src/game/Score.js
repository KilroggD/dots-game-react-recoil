import React from 'react';
import {useRecoilValue} from 'recoil';

import {scoreState} from './atom';

const Score = () => {
    const score = useRecoilValue(scoreState);

    return (
        <div className="score">
            <p>{`Score: ${score}`}</p>
        </div>
    );
};

export default Score;
