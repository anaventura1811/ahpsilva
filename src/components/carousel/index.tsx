import React, { ReactElement, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { useWindowSize } from '../../talons/windowSize';
import { CarouselContainer } from './styles';

type Props = {
  children: ReactElement[];
};

export default function Carousel(props: Props) {
 const { children } = props;
 const [activeIndex, setActiveIndex] = useState(0);

 const windowSize = useWindowSize();
 const isDesktop = windowSize.innerWidth >= 1200;

 const updateImage = (newIndex: number) => {
  if (newIndex < 0) {
    newIndex = React.Children.count(children) - 1;
  } else if (newIndex >= React.Children.count(children) - 1) {
    newIndex = 0;
  }
  setActiveIndex(newIndex);
 };

  return (
    <CarouselContainer>
      <div className='inner' style={{ transform: `translateX(-${activeIndex * 25}%)`}}>
        {React.Children.map(children, (child, _index) => {
          return React.cloneElement(child, { width: "33%"});
        })}
      </div>
      {isDesktop && <div className='indicators'>
        <button className='btn-prev' disabled={activeIndex <= 0} onClick={() => updateImage(activeIndex - 1)
        }>
          <ChevronLeft color="#fff" size={36} />
        </button>
        {/* {React.Children.map(children, (_child, index) => {
          return (
            <button onClick={() => updateImage(index)}>
              {index + 1}
            </button>
          )
        })} */}
        <button className='btn-next' disabled={activeIndex === (React.Children.count(children) - 1)} onClick={() =>
          updateImage(activeIndex + 1)}>
         <ChevronRight color="#fff" size={36} />
        </button>
      </div>}
    </CarouselContainer>
  );
};
