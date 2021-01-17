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
      <button style={{ marginRight: '20px' }}>
        <Link to="/react-beautiful-dnd">Go to React Beautiful DnD</Link>
      </button>
      <button>
        <Link to="/react-grid-layout">Go to React Grid Layout</Link>
      </button>
    </div>
  );
}
