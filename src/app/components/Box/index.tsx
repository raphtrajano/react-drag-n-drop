import React from 'react';

import { BoxWrapper, ImageWrapper, ContentWrapper, TextField } from './style';

interface BoxInterface {
  className?: string;
  key?: string;
  imageUrl: string;
  link: string;
  model: string;
  brand: string;
  topSpeed: string;
}

const Box = (props: BoxInterface) => {
  return (
    <BoxWrapper {...props} className={`widget-number ${props.className}`}>
      <ImageWrapper>
        <img src={props.imageUrl} alt={props.model} />
      </ImageWrapper>
      <ContentWrapper>
        <TextField>
          <b>Brand: </b>
          {props.brand}
        </TextField>
        <TextField>
          <b>Model: </b>
          {props.model}
        </TextField>
        <TextField>
          <b>Top speed: </b>
          {props.topSpeed}
        </TextField>
        <a href={props.link}>More details here</a>
      </ContentWrapper>
    </BoxWrapper>
  );
};

export default Box;
