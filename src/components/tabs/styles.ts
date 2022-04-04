import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;

  .tab {
    color: black;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 700;

  }

  .tab::not(:first-child) {
    border-left: 1px solid gray;


  }

  .tab_active {
    padding: 1rem;
    font-size: 1rem;
    font-weight: 700;
    color: gray;
  }

  @media (min-width: 961px) {
    .tab {
      font-size: 1.2rem;
      padding: 1.25rem 1rem;
    }
  }
`;