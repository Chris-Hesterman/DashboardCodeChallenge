import styled, { css } from 'styled-components';

export const StyledBox = styled.div`
  background: lightblue;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  width: 10rem;
  height: 5rem;
  border-radius: 10px;
  ${(props) =>
    props.Answer &&
    css`
      background: Lavender;
    `}
`;

export const StyledP = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;
