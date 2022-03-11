import React from 'react';
import Carousel from '../../components/carousel';
import { CarouselItem } from '../../components/carousel/styles';
import Nav from '../../components/nav';
import { Container } from './styles';

type Props = {}

export default function Home(props: Props) {

  return (
    <div>
      <Container>
        <Nav />
      </Container>
      <div className='main-content'>
          <Carousel>
            <CarouselItem>
              Item1
            </CarouselItem>
            <CarouselItem>
              Item2
            </CarouselItem>
            <CarouselItem>
              Item3
            </CarouselItem>
            <CarouselItem>
              Item4
            </CarouselItem>
            <CarouselItem>
              Item5
            </CarouselItem>
            <CarouselItem>
              Item6
            </CarouselItem>
          </Carousel>
      </div>
    </div>
  );
};
