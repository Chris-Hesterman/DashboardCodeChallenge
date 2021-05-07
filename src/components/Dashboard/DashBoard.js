import { useState } from 'react';
import axios from 'axios';
import PageEditForm from '../PageEditForm/PageEditForm';
import { StyledContainer, StyledDiv, StyledTitle } from './DashBoard.Styles';

function DashBoard(props) {
  const [value, setValue] = useState('');
  const [fetched, setFetched] = useState({});

  const getQuestions = (pageNumber) => {
    axios
      .get('/Page' + pageNumber)
      .then((result) => {
        setFetched(result.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <StyledContainer>
      <StyledDiv>
        <StyledTitle>Dashboard</StyledTitle>

        <PageEditForm getPage={getQuestions} />

        {/* <form onSubmit={onSubmit}>
          <input type="text" value={value} onChange={onChange}></input>
          <button type="submit">Submit</button>
        </form> */}

        {!!fetched.length && <h2>{JSON.stringify(fetched[0])}</h2>}
      </StyledDiv>
    </StyledContainer>
  );
}

export default DashBoard;
