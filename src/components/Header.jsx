import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Profile App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;