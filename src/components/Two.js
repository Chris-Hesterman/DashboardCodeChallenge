import React from 'react';
import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  background: violet;
  height: 100%;
  width: 100%;
`;

const StyledTitle = styled.h2`
  color: black;
  padding-left: 5rem;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const StyledBox = styled.div`
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

const StyledP = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

function Two(props) {
  const words = ['ham', 'eggs', 'fruit', 'toast'];
  const answers = ['brindis', 'fruta', 'jamon', 'huevos'];
  const wordBoxes = words.map((word) => {
    return (
      <StyledBox>
        <StyledP>{word}</StyledP>
      </StyledBox>
    );
  });
  const answerBoxes = answers.map((answer) => {
    return (
      <StyledBox Answer>
        <StyledP>{answer}</StyledP>
      </StyledBox>
    );
  });
  return (
    <StyledContainer>
      <StyledTitle>Page Two</StyledTitle>
      <StyledDiv>
        <ul>{wordBoxes}</ul>
        <ul>{answerBoxes}</ul>
      </StyledDiv>
    </StyledContainer>
  );
}

export default Two;
