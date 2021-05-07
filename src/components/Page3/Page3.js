import { StyledDiv, StyledTitle } from './Page3.Styles';
import { generateQuestions } from '../../helpers';

const Page3 = (props) => {
  const questionsArray = [
    'How would you say butterfly in German?',
    'How about in Spanish?',
    'How would you say refrigerator German?'
  ];
  const answersArray = ['Schmetterling', 'mariposa', 'Kühlschrank'];

  const questions = generateQuestions(questionsArray, answersArray);

  return (
    <StyledDiv>
      <StyledTitle>Page 3</StyledTitle>
      <div>{questions}</div>
    </StyledDiv>
  );
};

export default Page3;
