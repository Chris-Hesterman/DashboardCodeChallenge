import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background: lightblue;
  height: 100%;
  width: 100%;
`;

const StyledDiv = styled.div`
  padding-left: 5rem;
`;

const StyledTitle = styled.h2`
  color: black;
`;

function DashBoard(props) {
  const [value, setValue] = useState('');
  const [fetched, setFetched] = useState({});

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios.get('/test').then((result) => {
      setFetched(result.data);
    });
  };
  return (
    <StyledContainer>
      <StyledDiv>
        <StyledTitle>Dashboard</StyledTitle>
        <form onSubmit={onSubmit}>
          <input type="text" value={value} onChange={onChange}></input>
          <button type="submit">Submit</button>
        </form>
        {!!fetched.length && <h2>{JSON.stringify(fetched[0])}</h2>}
      </StyledDiv>
    </StyledContainer>
  );
}

export default DashBoard;
