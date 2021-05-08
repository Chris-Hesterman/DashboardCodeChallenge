import { StyledDiv, StyledTitle } from './QuestionList.Styles';
import { generateQuestions } from '../../helpers';

const QuestionList = ({ questions, answers }) => {
  const questionBoxes = generateQuestions(questions, answers);

  return (
    <StyledDiv>
      <StyledTitle>Page 3</StyledTitle>
      <div>{questionBoxes}</div>
    </StyledDiv>
  );
};

export default QuestionList;
