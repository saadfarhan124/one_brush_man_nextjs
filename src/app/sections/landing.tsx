// pages/index.js
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  );
};

export default HomePage;
