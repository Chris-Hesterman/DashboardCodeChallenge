import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: lime;
  height: 10vh;
  width: 60%;
`;

function One(props) {
  return <StyledDiv>Page One</StyledDiv>;
}

export default One;
