import { useState } from 'react';
import axios from 'axios';
import { fetchData } from '../../helpers';
import PageEditForm from '../PageEditForm/PageEditForm';
import { StyledContainer, StyledDiv, StyledTitle } from './DashBoard.Styles';

function DashBoard(props) {
  const [fetched, setFetched] = useState([]);

  const getQuestions = async (pageNumber) => {
    try {
      const result = await fetchData(pageNumber);
      setFetched(result.data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <StyledContainer>
      <StyledDiv>
        <StyledTitle>Dashboard</StyledTitle>

        <PageEditForm getPage={getQuestions} />

        <h2>{JSON.stringify(fetched[0])}</h2>
      </StyledDiv>
    </StyledContainer>
  );
}

export default DashBoard;
