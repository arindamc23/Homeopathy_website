import React from 'react';

const HomeHeader = () => {
  return (
    <header>
      <h1>Home Page</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about_us">About Us</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/dashboard">Dashboard</a>
      </nav>
    </header>
  );
};

export default HomeHeader;