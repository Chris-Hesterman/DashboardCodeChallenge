import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: tan;
  height: 100%;
  width: 100%;
`;

const StyledTitle = styled.h2`
  color: black;
  padding-left: 5rem;
`;

function Three(props) {
  return (
    <StyledDiv>
      <StyledTitle>Page Three</StyledTitle>
    </StyledDiv>
  );
}

export default Three;
