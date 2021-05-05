import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: violet;
  height: 100%;
  width: 100%;
`;

function Two(props) {
  return <StyledDiv>Page Two</StyledDiv>;
}

export default Two;
