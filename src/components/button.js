import styled from 'styled-components';

// export default styled.button`
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  background: transparent;
  border-radius: 0.4rem;
  padding: 0.2rem 0.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
