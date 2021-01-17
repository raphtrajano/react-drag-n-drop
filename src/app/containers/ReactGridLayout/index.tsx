import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import RGL, { WidthProvider } from 'react-grid-layout';
import '../../../../node_modules/react-grid-layout/css/styles.css';
import '../../../../node_modules/react-resizable/css/styles.css';

import Box from 'app/components/Box';
import Text from 'app/components/Text';

import { ReactGridLayoutWrapper } from './style';

//const ReactGridLayout = WidthProvider(RGL);
const ReactGridLayout = RGL;

export function GridLayout() {
  const CarsLayout = [
    { i: '1', x: 0, y: 0, w: 1, h: 2, minH: 1, maxH: 4, minW: 1, maxW: 4 },
    { i: '2', x: 1, y: 0, w: 1, h: 2, minH: 1, maxH: 4, minW: 1, maxW: 4 },
    { i: '3', x: 2, y: 0, w: 1, h: 2, minH: 1, maxH: 4, minW: 1, maxW: 4 },
    { i: '4', x: 3, y: 0, w: 1, h: 2, minH: 1, maxH: 4, minW: 1, maxW: 4 },
    { i: '5', x: 4, y: 0, w: 1, h: 2, minH: 1, maxH: 4, minW: 1, maxW: 4 },
    { i: '6', x: 5, y: 0, w: 1, h: 2, minH: 1, maxH: 4, minW: 1, maxW: 4 },
  ];

  const Cars = [
    {
      imageUrl:
        'https://s2.glbimg.com/4Rw-b0jh9Y8ItDeHo35nJcX8_fw=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/K/N/ARof5aTIG40USoKvkDfg/2019-01-08-lamborghini-huracan-evo-2019-1600-04.jpg',
      brand: 'Lamborghini',
      model: 'Huracán',
      topSpeed: '350km/h',
      link: 'https://www.lamborghini.com/en-en/models/huracan',
      ...CarsLayout[0],
    },
    {
      imageUrl:
        'https://quatrorodas.abril.com.br/wp-content/uploads/2017/03/bugatti_chiron_5.jpeg?quality=70&strip=all',
      brand: 'Bugatti',
      model: 'Chiron',
      topSpeed: '420km/h',
      link: 'https://www.bugatti.com/chiron/',
      ...CarsLayout[1],
    },
    {
      imageUrl:
        'https://media4.s-nbcnews.com/j/newscms/2020_08/3241236/200223-chevy-c8-cs-158p_ee63ca035f5144382d5dbbe3aea81192.fit-2000w.jpg',
      brand: 'Chevrolet Corvette',
      model: 'C8',
      topSpeed: '312km/h',
      link: 'https://www.chevrolet.com/performance/corvette',
      ...CarsLayout[2],
    },
    {
      imageUrl:
        'https://images.classic.com/vehicles/f3346a663ab085d87737f94908f8e8c625b33d91.jpg?auto=format&fit=crop&ar=16%3A9&w=688',
      brand: 'Ferrari',
      model: 'LaFerrari',
      topSpeed: '372km/h',
      link: 'https://www.ferrari.com/en-BS/auto/laferrari',
      ...CarsLayout[3],
    },
    {
      imageUrl:
        'https://cdn.carbuzz.com/gallery-images/840x560/708000/400/708419.jpg',
      brand: 'Koenigsegg',
      model: 'Jesko',
      topSpeed: '531km/h',
      link: 'https://www.koenigsegg.com/car/jesko/',
      ...CarsLayout[4],
    },
    {
      imageUrl:
        'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/http://www.blogcdn.com/slideshows/images/slides/248/507/9/S2485079/slug/l/01-2015-mclaren-p1-fd-1.jpg',
      brand: 'McLaren',
      model: 'P1',
      topSpeed: '350km/h',
      link: 'https://cars.mclaren.com/en/legacy/mclaren-p1',
      ...CarsLayout[5],
    },
  ];

  const layoutD = [
    { i: '1', x: 0, y: 0, w: 1, h: 2, minH: 2, maxH: 4, minW: 1, maxW: 4 }, // *** -- minH & maxH doesnt effect the grid items
    { i: '2', x: 0, y: 1, w: 1, h: 2, minH: 2, maxH: 4, minW: 1, maxW: 4 },
    { i: '3', x: 0, y: 2, w: 1, h: 2, minH: 2, maxH: 4, minW: 1, maxW: 4 },
    { i: '4', x: 0, y: 3, w: 1, h: 2, minH: 2, maxH: 4, minW: 1, maxW: 4 },
  ];

  //const [layout, setLayout] = useState(layoutD);
  const [carLayout, setCarLayout] = useState(CarsLayout);
  const [CarList, setCarList] = useState(Cars);

  const onLayoutChange = car => {
    setCarLayout(car);
  };

  const onResize = cars => {
    setCarLayout(cars);
  };

  return (
    <ReactGridLayoutWrapper>
      <Helmet>
        <title>Drag n Drop</title>
      </Helmet>
      <Text className="title" content="Famous Cars List" />
      <Text className="title" content="React Grid Layout" />
      <Link to="/react-beautiful-dnd">
        <button>React Beautiful Dnd</button>
      </Link>
      {/* <ul className="list-area"> */}
      <ReactGridLayout
        className="layout"
        rowHeight={50}
        cols={4}
        onResize={onResize}
        width={1198}
        layout={carLayout}
        onLayoutChange={onLayoutChange}
        draggableHandle=".dragHandle"
      >
        {CarList.map((car, index) => (
          // <div
          //   className="dragHandle"
          //   style={{ backgroundColor: 'gray', border: '2px solid' }}
          //   key={car.i}
          // >
          <Box
            className="dragHandle"
            //style={{ backgroundColor: 'gray', border: '2px solid' }}
            key={car.i}
            imageUrl={car.imageUrl}
            model={car.model}
            brand={car.brand}
            topSpeed={car.topSpeed}
            link={car.link}
          />
          // </div>
        ))}
        {/* {layout.map((L, index) => (
          <div
            className="dragHandle"
            style={{ backgroundColor: 'gray', border: '2px solid' }}
            key={L.i}
            data-grid={L}
          >
            <h1>Box {L.i}</h1>
          </div>
        ))} */}
      </ReactGridLayout>
    </ReactGridLayoutWrapper>
  );
}
