import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  font-family: var(--font-family-subtitle);
  font-size: 0.95rem;
  color: var(--font-color);
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  max-width: 1280px;
  position: relative;
  top: 0;
  width: 100%;
  max-height: 15rem;

  ul {
    display: flex;
    gap: 1rem;
    justify-items: flex-end;
    list-style-type: none;

    li > a {
      text-decoration: none;
      color: var(--font-color);
    }
  }

  .logo-container {
    display: flex;
    position: relative;
    max-width: 100%;

    img {
      position: relative;
      /* padding: 1rem; */
      width: auto;
      height: 7rem;
    }
  }

  @media (max-width: 980px) {
    align-items: space-between;
    justify-content: space-evenly;
    ul {
      display: none;
    }
  }
`;