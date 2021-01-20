import React from 'react';

const LayoutBox = props => {
  console.log(props);
  return (
    <>
      {props.data.img ? (
        <img
          style={{ width: 'inherit', height: 'inherit' }}
          src={props.data.img}
          alt="ludum logo"
        />
      ) : (
        <h1>Box {props.data.i}</h1>
      )}
      <span
        onClick={() => props.removeItem(props.data)}
        style={{
          position: 'absolute',
          right: '2px',
          top: '0',
          cursor: 'pointer',
        }}
      >
        X
      </span>
    </>
  );
};

export default React.memo(LayoutBox);
