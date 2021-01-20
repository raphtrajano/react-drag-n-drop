import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import RGL, { WidthProvider } from 'react-grid-layout';
import '../../../../node_modules/react-grid-layout/css/styles.css';
import '../../../../node_modules/react-resizable/css/styles.css';

import LayoutBox from 'app/components/LayoutBox';
import Text from 'app/components/Text';

import Ludum from './assets/ludum_logo_blue.png';
import { ReactGridLayoutWrapper } from './style';

const ReactGridLayout = WidthProvider(RGL);
//const ReactGridLayout = RGL;

export function GridLayout() {
  const layoutD = [
    {
      i: '1',
      x: 0,
      y: 0,
      w: 1,
      h: 2,
      minH: 2,
      maxH: 4,
      minW: 1,
      maxW: 4,
      static: false,
    }, // *** -- minH & maxH doesnt effect the grid items
    {
      i: '2',
      x: 0,
      y: 2,
      w: 1,
      h: 2,
      minH: 2,
      maxH: 4,
      minW: 1,
      maxW: 4,
      static: true,
    },
    {
      i: '3',
      x: 0,
      y: 4,
      w: 1,
      h: 2,
      minH: 2,
      maxH: 4,
      minW: 1,
      maxW: 4,
      static: false,
    },
    {
      i: '4',
      x: 0,
      y: 6,
      w: 1,
      h: 2,
      minH: 2,
      maxH: 4,
      minW: 1,
      maxW: 4,
      static: false,
    },
  ];

  const [layout, setLayout] = useState(layoutD);
  let [cont, setCont] = useState(layout.length);

  const onAddItem = () => {
    const nextValue = cont + 1;

    const arr = [
      {
        i: nextValue.toString(),
        x: cont % 4,
        y: Infinity,
        w: 1,
        h: 2,
        minH: 2,
        maxH: 4,
        minW: 1,
        maxW: 4,
        static: false,
      },
    ];
    setCont(nextValue);
    setLayout(layout.concat(arr));
  };

  const onRemoveItem = box => {
    const arr = [...layout];
    const ind = layout.indexOf(box);
    arr.splice(ind, 1);
    setLayout(arr);
  };

  const onLayoutChange = layout => {
    setLayout(layout);
  };

  const onResize = resizedBox => {
    setLayout(resizedBox);
  };

  const onBreakPointChange = (breakpoint, cols) => {
    console.log(breakpoint);
    console.log(cols);
  };

  return (
    <ReactGridLayoutWrapper>
      <Helmet>
        <title>Drag n Drop</title>
      </Helmet>
      <Text className="title" content="React Grid Layout" />
      <button className="btn" onClick={onAddItem}>
        Add Item
      </button>
      <ReactGridLayout
        className="layout"
        rowHeight={50}
        cols={4}
        onResize={onResize}
        layout={layout}
        onLayoutChange={onLayoutChange}
        draggableHandle=".dragHandle"
        //compactType="null"
        isBounded={true}
        onBreakPointChange={onBreakPointChange}
      >
        {layout.map(box => (
          <div
            className="dragHandle"
            style={{ backgroundColor: 'gray' }}
            key={box.i}
          >
            <LayoutBox removeItem={onRemoveItem} data={box} />
          </div>
        ))}
      </ReactGridLayout>
    </ReactGridLayoutWrapper>
  );
}
