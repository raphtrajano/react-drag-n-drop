import React from 'react';

const LayoutBox = props => {
  console.log(props);
  return (
    <>
      {props.url ? (
        <img
          style={{ width: 'inherit', height: 'inherit' }}
          src={props.url}
          alt="ludum logo"
        />
      ) : (
        <h2 style={{ display: 'contents', fontSize: '100%' }}>
          {props.data.i}
        </h2>
      )}
      <span
        onClick={() => props.removeItem(props.data)}
        style={{
          position: 'absolute',
          left: '2px',
          top: '-8px',
          cursor: 'pointer',
        }}
      >
        ×
      </span>
    </>
  );
};

export default React.memo(LayoutBox);
