import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import RGL, { WidthProvider } from 'react-grid-layout';
import '../../../../node_modules/react-grid-layout/css/styles.css';
import '../../../../node_modules/react-resizable/css/styles.css';

import LayoutBox from 'app/components/LayoutBox';
import Text from 'app/components/Text';

import Ludum from './assets/ludum_logo_blue.png';
import {
  ReactGridLayoutWrapper,
  BtnArea,
  BtnDiv,
  LayoutWrapper,
  P,
} from './style';

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
      minH: 1,
      maxH: 4,
      minW: 1,
      maxW: 4,
      static: false,
    },
    {
      i: '2',
      x: 0,
      y: 2,
      w: 1,
      h: 2,
      minH: 1,
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
      minH: 1,
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
      minH: 1,
      maxH: 4,
      minW: 1,
      maxW: 4,
      static: false,
    },
  ];

  const [totalCols, setTotalCols] = useState(8);
  const [rowHeight, setRowHeight] = useState(50);
  const [layout, setLayout] = useState(layoutD);
  let [cont, setCont] = useState(totalCols);
  let [value, setValue] = useState(layout.length + 1);
  const [compactType, setCompactType] = useState('vertical');
  let urlMap = new Map();
  urlMap.set('1', null);
  urlMap.set('2', null);
  urlMap.set('3', null);
  urlMap.set('4', null);
  const [map, setMap] = useState(urlMap);
  //let urlMap = { '1': null, '2': null, '3': null, '4': null };

  const onAddItem = () => {
    const id = value.toString();

    const arr = [
      {
        i: id,
        x: cont % totalCols,
        y: Infinity,
        w: 1,
        h: 2,
        minH: 1,
        maxH: 4,
        minW: 1,
        maxW: 4,
        static: false,
      },
    ];

    setCont(cont + 1);
    setValue(value + 1);
    setLayout(layout.concat(arr));
  };

  const onAddImage = () => {
    const id = value.toString();

    const arr = [
      {
        i: id,
        x: cont % totalCols,
        y: Infinity,
        w: 1,
        h: 2,
        minH: 1,
        maxH: 4,
        minW: 1,
        maxW: 4,
        static: false,
      },
    ];
    map.set(id, Ludum);
    setMap(map.set(id, Ludum));

    setCont(cont + 1);
    setValue(value + 1);
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

  const onAddCols = () => {
    setTotalCols(totalCols + 1);
  };

  const onRemoveCols = () => {
    if (totalCols > 1) {
      setTotalCols(totalCols - 1);
      onCompactType();
    } else {
      alert("Ops, we can't have 0 or less collums!");
    }
  };

  const onAddRowHeight = () => {
    setRowHeight(rowHeight + 10);
  };

  const onRemoveRowHeight = () => {
    if (rowHeight > 10) {
      setRowHeight(rowHeight - 10);
    } else {
      alert("We can't have 0 or less of row height");
    }
  };

  const onCompactType = () => {
    const newCompactType =
      compactType === 'horizontal'
        ? 'vertical'
        : compactType === 'vertical'
        ? 'null'
        : 'horizontal';
    setCompactType(newCompactType);
  };

  const onRemoveAllBoxes = () => {
    setLayout([]);
    setCont(totalCols);
  };

  return (
    <ReactGridLayoutWrapper>
      <Helmet>
        <title>Drag n Drop</title>
      </Helmet>
      <Text className="title" content="React Grid Layout" />
      <BtnArea>
        <BtnDiv>
          <button className="btn add-box" onClick={onAddItem}>
            Add Box
          </button>
          <button className="btn add-box" onClick={onAddImage}>
            Add Image
          </button>
          <P>
            Number of boxes: <strong>{layout.length}</strong>
          </P>
        </BtnDiv>
        <button className="btn compact-type" onClick={onCompactType}>
          Change compaction type
        </button>
        <P>
          {' '}
          Actual compaction type is:{' '}
          <strong>{compactType === 'null' ? 'free' : compactType}</strong>
        </P>
        <button className="btn number-cols" onClick={onAddCols}>
          Increase total number of columns
        </button>
        <button className="btn number-cols" onClick={onRemoveCols}>
          Decrease total number of columns.
        </button>
        <P>
          Total columns: <strong>{totalCols}</strong>
        </P>
        <button className="btn row-height" onClick={onAddRowHeight}>
          Increase minimum row height.
        </button>
        <button className="btn row-height" onClick={onRemoveRowHeight}>
          Decrease minimum row height.
        </button>
        <P>
          Actual minimum row height: <strong>{rowHeight} px</strong>
        </P>
        <button className="btn remove-boxes" onClick={onRemoveAllBoxes}>
          Remove all boxes
        </button>
      </BtnArea>
      <ReactGridLayout
        className="layout"
        rowHeight={rowHeight}
        cols={totalCols}
        onResize={onResize}
        layout={layout}
        onLayoutChange={onLayoutChange}
        draggableHandle=".dragHandle"
        compactType={compactType === 'null' ? null : compactType}
        isBounded={true}
        onBreakPointChange={onBreakPointChange}
      >
        {layout.map(box => (
          <LayoutWrapper className="dragHandle" key={box.i}>
            <LayoutBox
              removeItem={onRemoveItem}
              data={box}
              url={map.get(box.i)}
            />
          </LayoutWrapper>
        ))}
      </ReactGridLayout>
    </ReactGridLayoutWrapper>
  );
}
