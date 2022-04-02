import React from 'react';
import Carousel from '../../components/carousel';
import { CarouselItem } from '../../components/carousel/styles';
import Nav from '../../components/nav';
import Summary from '../../components/summary';
import { Container, ContentContainer } from './styles';
import FieldsOfWork from '../../components/fieldsOfWork';
import ContactInfo from '../../components/contact';

type Props = {}

export default function Home(props: Props) {

  return (
    <div>
      <Container>
        <Nav />
      </Container>
      <ContentContainer>
        {/* <div className='main-content'>
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
        </div> */}
        <div className='summary-container'>
          <Summary />
        </div>
        <div className='fields-of-work'>
          <FieldsOfWork />

        </div>
        <div className='contact-info'>
          <ContactInfo />
        </div>
        <footer className='rodape'>
            <p>Copyright - Escritório AHP Silva. Todos os direitos reservados. 2022</p>
        </footer>
      </ContentContainer>
    </div>
  );
};
