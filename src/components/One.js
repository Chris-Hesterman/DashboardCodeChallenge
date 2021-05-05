import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: lime;
  height: 100%;
  width: 100%;
`;

function One(props) {
  return <StyledDiv>Page One</StyledDiv>;
}

export default One;
