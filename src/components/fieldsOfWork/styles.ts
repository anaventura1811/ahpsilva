import styled from "styled-components";

export const FieldsContainer = styled.div`
  display: flex;
  max-width: 1280px;
  flex-direction: column;
  font-family: var(--font-family-subtitle);
  font-weight: 700;
  color: var(--font-color);

  h2 {
    text-align: left;
    padding: 2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 0.5rem;
    align-items: center;

    .description {
      font-weight: 300;
      display: flex;
      flex-direction: column;
      margin: 0;
      gap: 0;
    }

    li {
      list-style-type: none;
      display: flex;
      cursor: pointer;
      padding-bottom: 1rem;
      text-transform: capitalize;
      /* gap: 0.5rem; */
    }

    .inactive {
      display: none;
    }

    li:hover {
      text-decoration: underline;
      cursor: pointer;
      text-decoration-color: var(--secondary-font-color);
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