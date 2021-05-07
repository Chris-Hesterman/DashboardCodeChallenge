import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  background: lightgreen;
  height: 100%;
  width: 100%;
`;

export const StyledTitle = styled.h2`
  color: black;
  padding-left: 5rem;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

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

export const StyledUl = styled.ul`
  list-style-position: outside;
  padding: 0 2rem;
`;
