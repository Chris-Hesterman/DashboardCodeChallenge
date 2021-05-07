import React from 'react';
import { generateWordBoxes, generateAnswerBoxes } from '../../helpers';
import {
  StyledContainer,
  StyledTitle,
  StyledDiv,
  StyledUl
} from './One.Styles';

function One(props) {
  const words = ['ham', 'eggs', 'fruit', 'toast'];
  const answers = ['Obst', 'Toast', 'Eier', 'Schinken'];
  const wordBoxes = generateWordBoxes(words);
  const answerBoxes = generateAnswerBoxes(answers);

  return (
    <StyledContainer>
      <StyledTitle>Page One</StyledTitle>
      <StyledDiv>
        <StyledUl>{wordBoxes}</StyledUl>
        <StyledUl>{answerBoxes}</StyledUl>
      </StyledDiv>
    </StyledContainer>
  );
}

export default One;
