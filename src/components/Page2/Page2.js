import React from 'react';
import { generateWordBoxes, generateAnswerBoxes } from '../../helpers';
import {
  StyledContainer,
  StyledTitle,
  StyledDiv,
  StyledUl
} from './Page2.Styles';

const Page2 = (props) => {
  const words = ['ham', 'eggs', 'fruit', 'toast'];
  const answers = ['brindis', 'fruta', 'jamon', 'huevos'];
  const wordBoxes = generateWordBoxes(words);
  const answerBoxes = generateAnswerBoxes(answers);

  return (
    <StyledContainer>
      <StyledTitle>Page 2</StyledTitle>
      <StyledDiv>
        <StyledUl>{wordBoxes}</StyledUl>
        <StyledUl>{answerBoxes}</StyledUl>
      </StyledDiv>
    </StyledContainer>
  );
};

export default Page2;
