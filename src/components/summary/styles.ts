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
  /* gap: 2rem; */
  padding: 0 0 0 2rem;


  .image-container {
    position: relative;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-container > img {
    position: relative;
    width: auto;
    height: 30vw;
  }

  .history-text {
    display: flex;
    flex-direction: column;
    max-width: 50%;
    font-family: var(--font-family-subtitle);
    font-weight: 300;

    > h2 {
      font-weight: 700;
    }
  }

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .history-text {
      max-width: 100%;
      margin: 0.8rem;
    }

    .image-container > img {
      height: 45vw;
    }
  }
 
`;