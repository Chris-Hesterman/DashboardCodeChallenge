import React from 'react';
import { generateWordBoxes, generateAnswerBoxes } from '../../helpers';
import {
  StyledContainer,
  StyledTitle,
  StyledDiv,
  StyledUl
} from './Two.Styles';

function Two(props) {
  const words = ['ham', 'eggs', 'fruit', 'toast'];
  const answers = ['brindis', 'fruta', 'jamon', 'huevos'];
  const wordBoxes = generateWordBoxes(words);
  const answerBoxes = generateAnswerBoxes(answers);

  return (
    <StyledContainer>
      <StyledTitle>Page Two</StyledTitle>
      <StyledDiv>
        <StyledUl>{wordBoxes}</StyledUl>
        <StyledUl>{answerBoxes}</StyledUl>
      </StyledDiv>
    </StyledContainer>
  );
}

export default Two;
