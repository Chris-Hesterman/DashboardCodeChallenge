import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: lightblue;
  height: 10vh;
  width: 60%;
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
    <StyledDiv>
      <p>Dashboard</p>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange}></input>
        <button type="submit">Submit</button>
      </form>
      {!!Object.keys(fetched).length && <h2>{JSON.stringify(fetched)}</h2>}
    </StyledDiv>
  );
}

export default DashBoard;
