import React from 'react';
import { generateQuestions } from '../../helpers';
import { StyledDiv, StyledTitle } from './Four.Styles';

function Four(props) {
  const questionsArray = [
    'In german what is your favorite breakfast food?',
    'How about in Spanish?'
  ];
  const answersArray = ['Eier', 'huevos'];

  const questions = generateQuestions(questionsArray, answersArray);

  return (
    <StyledDiv>
      <StyledTitle>Page Four</StyledTitle>
      <div>{questions}</div>
    </StyledDiv>
  );
}

export default Four;
