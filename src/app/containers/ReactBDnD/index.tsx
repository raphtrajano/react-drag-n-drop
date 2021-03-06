import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Box from 'app/components/Box';
import Text from 'app/components/Text';

import { MainWrapper } from './style';

export function ReactBDnD() {
  const Cars = [
    {
      imageUrl:
        'https://s2.glbimg.com/4Rw-b0jh9Y8ItDeHo35nJcX8_fw=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/K/N/ARof5aTIG40USoKvkDfg/2019-01-08-lamborghini-huracan-evo-2019-1600-04.jpg',
      brand: 'Lamborghini',
      model: 'Huracán',
      topSpeed: '350km/h',
      link: 'https://www.lamborghini.com/en-en/models/huracan',
    },
    {
      imageUrl:
        'https://quatrorodas.abril.com.br/wp-content/uploads/2017/03/bugatti_chiron_5.jpeg?quality=70&strip=all',
      brand: 'Bugatti',
      model: 'Chiron',
      topSpeed: '420km/h',
      link: 'https://www.bugatti.com/chiron/',
    },
    {
      imageUrl:
        'https://media4.s-nbcnews.com/j/newscms/2020_08/3241236/200223-chevy-c8-cs-158p_ee63ca035f5144382d5dbbe3aea81192.fit-2000w.jpg',
      brand: 'Chevrolet Corvette',
      model: 'C8',
      topSpeed: '312km/h',
      link: 'https://www.chevrolet.com/performance/corvette',
    },
    {
      imageUrl:
        'https://images.classic.com/vehicles/f3346a663ab085d87737f94908f8e8c625b33d91.jpg?auto=format&fit=crop&ar=16%3A9&w=688',
      brand: 'Ferrari',
      model: 'LaFerrari',
      topSpeed: '372km/h',
      link: 'https://www.ferrari.com/en-BS/auto/laferrari',
    },
    {
      imageUrl:
        'https://cdn.carbuzz.com/gallery-images/840x560/708000/400/708419.jpg',
      brand: 'Koenigsegg',
      model: 'Jesko',
      topSpeed: '531km/h',
      link: 'https://www.koenigsegg.com/car/jesko/',
    },
    {
      imageUrl:
        'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/http://www.blogcdn.com/slideshows/images/slides/248/507/9/S2485079/slug/l/01-2015-mclaren-p1-fd-1.jpg',
      brand: 'McLaren',
      model: 'P1',
      topSpeed: '350km/h',
      link: 'https://cars.mclaren.com/en/legacy/mclaren-p1',
    },
  ];

  const [CarList, setCarList] = useState(Cars);

  const handleUpdateList = result => {
    if (!result.destination) return;
    const items = Array.from(CarList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCarList(items);
  };

  return (
    <MainWrapper>
      <Helmet>
        <title>Drag n Drop</title>
      </Helmet>
      <Text className="title" content="Famous Car List" />
      <h2>Drag n Drop functionality provided by React Beautiful DnD package</h2>
      <h2>
        {' '}
        Each card below can switch your position with the others in the list{' '}
      </h2>

      <DragDropContext onDragEnd={handleUpdateList}>
        <Droppable droppableId="list-area">
          {provided => (
            <ul
              className="list-area"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {CarList.map((car, index) => (
                <Draggable
                  key={car.model}
                  draggableId={car.model}
                  index={index}
                >
                  {provided => (
                    <Box
                      innerRef={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      imageUrl={car.imageUrl}
                      model={car.model}
                      brand={car.brand}
                      topSpeed={car.topSpeed}
                      link={car.link}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </MainWrapper>
  );
}
