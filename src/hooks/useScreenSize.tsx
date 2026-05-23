'use client'

import { useEffect, useState } from 'react';

type ScreenSize = 'small' | 'medium' | 'large';

function getScreenSize(): ScreenSize {
    if (window.innerWidth < 700) {
        return 'small';
    }
    if (window.innerWidth < 1000 && window.innerHeight > 700) {
        return 'medium';
    }
    if (window.innerWidth >= 1000) {
        return 'large';
    }

    return 'medium';
}

export function useScreenSize() {
    const [screenSize, setScreenSize] = useState<ScreenSize>('medium');

    useEffect(() => {
        const updateSize = () => {
            setScreenSize(getScreenSize());
            console.log(getScreenSize());
        };

        updateSize();

        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, []);

    return screenSize;
}