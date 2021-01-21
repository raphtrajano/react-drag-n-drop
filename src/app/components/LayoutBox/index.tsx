import React from 'react';

interface Obj {
  i: string;
  h: number;
  minW: number;
  maxW: number;
  minH: number;
  maxH: number;
  w: number;
  x: number;
  y: number;
  isBounded?: boolean;
  isDraggable?: boolean;
  isResizable?: boolean;
  moved?: boolean;
  resizeHandles?: () => void;
  static?: boolean;
}

interface Props {
  data: Obj;
  url: string;
  removeItem: (data) => void;
}

const LayoutBox = (props: Props) => {
  let element = (
    <h2 style={{ display: 'contents', fontSize: '100%' }}>{props.data.i}</h2>
  );

  if (props.data.static) {
    element = <p>I'm a static box</p>;
  }
  return (
    <>
      {props.url ? (
        <img
          style={{ width: 'inherit', height: 'inherit' }}
          src={props.url}
          alt="ludum logo"
        />
      ) : (
        element
      )}
      <span
        onClick={() => props.removeItem(props.data)}
        style={{
          position: 'absolute',
          left: '0px',
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
