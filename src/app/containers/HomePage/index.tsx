import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div
      style={{
        width: '1200px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: 'auto',
        marginTop: '20px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ width: '100%' }}>Hey, choose a place to go</h1>
      <Link to="/react-beautiful-dnd">
        <button
          style={{
            color: 'white',
            borderRadius: '10px',
            height: '30px',
            backgroundColor: 'darkgoldenrod',
            marginRight: '20px',
            outline: 'none',
          }}
        >
          {' '}
          Go to React Beautiful DnD
        </button>
      </Link>
      <Link to="/react-grid-layout">
        <button
          style={{
            color: 'white',
            borderRadius: '10px',
            height: '30px',
            backgroundColor: 'darkgoldenrod',
            outline: 'none',
          }}
        >
          Go to React Grid Layout
        </button>
      </Link>
    </div>
  );
}
