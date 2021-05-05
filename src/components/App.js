import React from 'react';
import styled from 'styled-components';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import DashBoard from './DashBoard';

const StyledDiv = styled.div`
  background: pink;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App(props) {
  return (
    <StyledDiv>
      Hello
      <DashBoard />
      <One />
      <Two />
      <Three />
      <Four />
    </StyledDiv>
  );
}

export default App;
