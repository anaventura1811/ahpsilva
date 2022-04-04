import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;

    input {
      border: 1px solid black;
    }
  }
`;