import React from 'react';
import { generateQuestions } from '../../helpers';
import { StyledDiv, StyledTitle } from './Page4.Styles';

const Page4 = (props) => {
  const questionsArray = [
    'In german what is your favorite breakfast food?',
    'How about in Spanish?'
  ];
  const answersArray = ['Eier', 'huevos'];

  const questions = generateQuestions(questionsArray, answersArray);

  return (
    <StyledDiv>
      <StyledTitle>Page 4</StyledTitle>
      <div>{questions}</div>
    </StyledDiv>
  );
};

export default Page4;
