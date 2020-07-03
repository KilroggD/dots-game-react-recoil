import  { atom } from 'recoil';

export const controlOptions = atom({
    key: 'controlOptions',
    default: {
        isRunning: false,
        isPaused: false,
        speed: 5,
    },
});

export const dotsState = atom({
    key: 'dotsState',
    default: [],
});

export const scoreState = atom({
    key: 'scoreState',
    default: 0,
});
