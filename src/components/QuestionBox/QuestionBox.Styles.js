import styled from 'styled-components';

export const StyledDiv = styled.div`
  background: tan;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 2vw 2vw;
  border-radius: 15px;
  border: 1px solid black;
  input {
    height: 2rem;
    margin-left: 2vw;
    outline: none;
    font-size: 1rem;
  }
`;

export const StyledP = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const StyledH2 = styled.h2`
  color: lime;
  margin-left: 2vw;
  text-shadow: -1px -1px grey, 1px 1px grey, -1px 1px grey, 1px -1px grey;
`;
