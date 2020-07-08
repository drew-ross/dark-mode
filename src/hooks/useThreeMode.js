import { useLocalStorage } from './useLocalStorage';
import { useEffect, useState } from 'react';

export const useThreeMode = (key, initialValue) => {

    const [colorMode, setMode] = useLocalStorage(key, initialValue);
    const [togglerClassName, setTogglerClassName] = useState('');

    useEffect(() => {
        const bodyClassList = document.querySelector('body').classList;
        switch (colorMode) {
            case 1:
                bodyClassList.remove('color-mode-2');
                bodyClassList.add('color-mode-1');
                setTogglerClassName('toggled-1');
                break;
            case 2:
                bodyClassList.remove('color-mode-1');
                bodyClassList.add('color-mode-2');
                setTogglerClassName('toggled-2');
                break;
            default:
                bodyClassList.remove('color-mode-2');
                bodyClassList.remove('color-mode-1');
                setTogglerClassName('');
        }
    }, [colorMode]);

    const toggleColorMode = e => {
        e.preventDefault();
        switch (colorMode) {
            case 0:
                setMode(1);
                break;
            case 1:
                setMode(2);
                break;
            default:
                setMode(0);
        };
    };

    return [colorMode, toggleColorMode, togglerClassName];
};