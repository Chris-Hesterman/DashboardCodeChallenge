import PageRequestForm from '../Forms/PageRequestForm';
import { StyledContainer, StyledDiv, StyledTitle } from './DashBoard.Styles';

function DashBoard(props) {
  return (
    <StyledContainer>
      <StyledDiv>
        <StyledTitle>Dashboard</StyledTitle>

        <PageRequestForm />
      </StyledDiv>
    </StyledContainer>
  );
}

export default DashBoard;
