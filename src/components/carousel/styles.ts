import styled from "styled-components";

export const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 35vw;
  padding-top: 0.5rem;
  /* background-color: var(--secondary-background-color); */

  .inner {
    white-space: nowrap;
    transition: transform 0.3s;
  }

  .indicators {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 0;
    right: 0;
    top: 24%;
  }

  .indicators > button {
    margin: 5px;
    border-radius: 100%;
    height: 50px;
    width: 50px;
    border: none;
    display: flex;
    align-items: center;
    background-color: var(--main-background-color);
  }

  .indicators > button:enabled:hover {
    filter: brightness(0.85);
  }

  .indicators > button:disabled {
    background-color: #cccccc;
  }

  .btn-prev {
  }
`;

export const CarouselItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30vw;
  width: 33%;
  /* background-color: var(--secondary-background-color); */
  color: var(--gray-background-color);
`;
