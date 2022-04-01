import styled from "styled-components";

export const FieldsContainer = styled.div`
  width: 100vw;
  background-color: var(--main-background-color);
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-subtitle);
  font-weight: 700;
  color: var(--font-color);

  h2 {
    text-align: left;
    padding: 0 1rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;

    li {
      list-style-type: none;
      display: flex;
      /* gap: 0.5rem; */
    }
  }

  @media (max-width: 980px) {
    ul {
      flex-direction: column;
      gap: 0;
      align-items: center;
    }
  }


`;