import React, { ReactChildren } from 'react';
import { CarouselItem } from './styles';

type Props = {
  children: ReactChildren;
  width: number;
};

export default function Item(props: Props) {
  const { children, width } = props;

  return (
    <CarouselItem style={{ width: width }}>
      {children}
    </CarouselItem>
  )
}