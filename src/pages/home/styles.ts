import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100vw;
  padding: 0;
  margin: 0;
  align-items: center;
  background-color: var(--main-background-color);
`;

export const ContentContainer = styled.div`

  .main-content {
    width: 100vw;
    height: 100vh;
  }

  background-color: var(--font-color);
  .rodape {
    position: static;
    bottom: 0;
    width: 100vw;
    height: auto;
    text-align: left;
    font-size: 0.75rem;
    padding: 1rem 2rem;
    font-weight: 300;
    
    > p {
      font-family: var(--font-family-subtitle); 
      color: var(--gray-background-color);
      max-width: 1280px;
    }
  }

  .summary-container {
    width: 100vw;
    height: 100vh;
    background-color: var(--gray-background-color);
    display: flex;
    align-items: center;
  }

  .title_underline {

  }

  .fields-of-work {
    width: 100vw;
    height: 100vh;
    background-color: var(--main-background-color);
  }

  .title_underline:after {

  }
  .contact-info {
    width: 100vw;
    height: 100vh;
    background-color: var(--secondary-background-color);
  }

  /* @media (max-width: 1200px) {
    .summary-container {
      flex-wrap: wrap;
      flex-direction: column;
    }
  } */
`;