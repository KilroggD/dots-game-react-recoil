import { selector } from 'recoil';

import { dotsState } from './atom';

export const blockedPoints = selector({
    key: 'blockedPoints',
    get: ({get}) => {
        const dotsSet = new Set();
        const dots = get(dotsState);
        dots.forEach(dot => {
            if (dot.y < dot.size) {
                dotsSet.add(dot.x);
            }
        });
        return dotsSet;
    },
})
