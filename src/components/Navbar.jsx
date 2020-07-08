import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useThreeMode } from '../hooks/useThreeMode';

const Navbar = () => {
  const [darkMode, toggleDarkMode] = useDarkMode('dark-mode', false);
  const [colorMode, toggleColorMode, togglerClassName] = useThreeMode('color-mode', 0);

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className={`dark-mode__toggle ${togglerClassName}`} onClick={toggleColorMode}>
        <div className={`toggle ${togglerClassName}`}/>
      </div>
    </nav>
  );
};

export default Navbar;
