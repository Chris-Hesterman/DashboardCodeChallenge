import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: red;
  height: 100%;
  width: 100%;
`;

const StyledTitle = styled.h2`
  color: black;
  padding-left: 5rem;
`;

function Four(props) {
  return (
    <StyledDiv>
      <StyledTitle>Page Four</StyledTitle>
    </StyledDiv>
  );
}

export default Four;
