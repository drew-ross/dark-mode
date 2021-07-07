import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {

    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        darkMode ?
            document.querySelector('body').classList.add('dark-mode')
            :
            document.querySelector('body').classList.remove('dark-mode');
    }, [darkMode]);

    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return [darkMode, toggleDarkMode];
};