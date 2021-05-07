import { StyledDiv, StyledTitle } from './Three.Styles';
import { generateQuestions } from '../../helpers';

const Three = (props) => {
  const questionsArray = [
    'How would you say butterfly in German?',
    'How about in Spanish?',
    'How would you say refrigerator German?'
  ];
  const answersArray = ['Schmetterling', 'mariposa', 'Kühlschrank'];

  const questions = generateQuestions(questionsArray, answersArray);

  return (
    <StyledDiv>
      <StyledTitle>Page Three</StyledTitle>
      <div>{questions}</div>
    </StyledDiv>
  );
};

export default Three;
