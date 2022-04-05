import styled from "styled-components";

export const FollowUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-subtitle);
  > h2 {
    text-align: left;
    padding: 2rem;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1280px;
    align-items: center;
    justify-content: space-around;
  }

  .separator {
    height: 35px;
  }

  .subcontainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h3 {
      max-width: 180px;
      font-size: 1rem;
      text-align: center;
    }

    > p {
      max-width: 180px;
      font-weight: 300;
    }

    div > img {
      max-width: 10vw;
    }
  }

  @media (max-width: 980px) {
    .container {
      flex-direction: column;
    }

    .subcontainer {
      div > img {
        max-width: 20vw;
      }
    }
  }
`;