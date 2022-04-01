import styled from "styled-components";

export const SummaryContainer = styled.div`
  background-color: var(--gray-background-color);
  height: auto;
  min-height: 35vw;
  color: var(--secondary-background-color);
  position: relative;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 2rem;
  padding: 0 0 0 2rem;

  /* .container-hexagono {
    position: absolute;
    top: auto;
    display: flex;
  } */

  .image-container {
    position: relative;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-container > img {
    position: absolute;
    width: auto;
    height: 30vw;
  }

  .history-text {
    display: flex;
    flex-direction: column;
    max-width: 50%;
  }
 
`;