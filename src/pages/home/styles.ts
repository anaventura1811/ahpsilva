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

  .summary-container {
    width: 100vw;
    height: 100vh;
    background-color: var(--gray-background-color);
    display: flex;
    align-items: center;
  }

  /* @media (max-width: 1200px) {
    .summary-container {
      flex-wrap: wrap;
      flex-direction: column;
    }
  } */
`;