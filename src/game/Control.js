import React, {useEffect, useCallback} from 'react'
import { useRecoilState } from 'recoil';

import { controlOptions } from './atom';

const Control = ({ onClear }) => {
    const [controlState, setControlState] = useRecoilState(controlOptions);
    const {isRunning, speed} = controlState;

    const togglePause = () => {
        setControlState(oldState => {
            return {...oldState, isRunning: !oldState.isRunning};
        });
    }

    const onStart = useCallback(() => {
        setControlState({...controlState, isRunning: true});
    }, 
    [
        controlState,
        setControlState,
    ]);

    const onChangeSpeed = useCallback((event) => {
        setControlState({...controlState, speed: event.target.value});
    }, [setControlState, controlState]);


    useEffect(() => {
        document.addEventListener("visibilitychange", () => {
            setControlState(oldState => {
                return {...oldState, isRunning: false};
            });
        });
        return () => document.removeEventListener("visibilitychange");        
    }, [setControlState]);

    return (
        <div className="control">
            <div className="control__buttons">
                {
                    isRunning ? 
                        (
                            <button onClick={togglePause}>
                                PAUSE
                            </button>
                        ) : (
                            <button onClick={onStart}>
                                START
                            </button>
                        )                        
                }
                <button onClick={onClear}>CLEAR</button>
            </div>
            <div className="control__speed">
                <p>{`Current speed: ${speed}`}</p>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={speed}
                    onChange={onChangeSpeed}
                />
            </div>
        </div>
    )
}

export default Control;
