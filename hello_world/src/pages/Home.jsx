import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/album">Go to Album Page</Link>
          </li>
          <li>
            <Link to="/double-linked-list">Go to Double Linked List Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};