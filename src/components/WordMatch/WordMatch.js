import React from 'react';
import { generateWordBoxes, generateAnswerBoxes } from '../../helpers.js';
import {
  StyledContainer,
  StyledTitle,
  StyledDiv,
  StyledUl
} from './WordMatch.Styles.js';

const WordMatch = ({ words, answers, page }) => {
  const wordBoxes = generateWordBoxes(words);
  const answerBoxes = generateAnswerBoxes(answers);

  return (
    <StyledContainer>
      <StyledTitle>Page {page}</StyledTitle>
      <StyledDiv>
        <StyledUl>{wordBoxes}</StyledUl>
        <StyledUl>{answerBoxes}</StyledUl>
      </StyledDiv>
    </StyledContainer>
  );
};

export default WordMatch;
