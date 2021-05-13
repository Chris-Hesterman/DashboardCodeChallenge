import PageRequestForm from '../Forms/PageRequestForm';
import { StyledContainer, StyledDiv, StyledTitle } from './DashBoard.Styles';

function DashBoard({ refreshQuestions }) {
  return (
    <StyledContainer>
      <StyledDiv>
        <StyledTitle>Dashboard</StyledTitle>
        <PageRequestForm refreshQuestions={refreshQuestions} />
      </StyledDiv>
    </StyledContainer>
  );
}

export default DashBoard;
