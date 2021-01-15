import React from 'react';

import { TextWrapper } from './style';

interface TextInterface {
  className?: string;
  content?: string | JSX.Element;
  children?: string | JSX.Element;
}

const Text = (props: TextInterface) => {
  return (
    <TextWrapper className={props.className}>
      {props.content}
      {props.children}
    </TextWrapper>
  );
};

export default Text;
