import { StyledDiv, StyledTitle } from './QuestionList.Styles';
import { generateQuestions } from '../../helpers';

const QuestionList = ({ questions, answers, page }) => {
  const questionBoxes = generateQuestions(questions, answers);

  return (
    <StyledDiv>
      <StyledTitle>Page {page}</StyledTitle>
      <div>{questionBoxes}</div>
    </StyledDiv>
  );
};

export default QuestionList;
