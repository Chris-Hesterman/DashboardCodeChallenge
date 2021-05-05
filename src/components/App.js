import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import DashBoard from './DashBoard';

const StyledContainer = styled.div`
  background: pink;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 80vw;
  /* margin-left: 20vw; */
`;
const StyledTitle = styled.h2`
  width: 20vw;
  text-align: center;
`;
const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  margin: 75px 0 0 6vw;
  width: 10vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledLink = styled(NavLink)`
  color: blue;
  font-size: 1.5rem;
  &.hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &.active {
    color: lime;
  }
`;

function App(props) {
  return (
    <StyledContainer>
      <StyledTitle>Carna Code Challenge</StyledTitle>
      <StyledNav>
        <StyledLink exact to="/">
          Dashboard
        </StyledLink>
        <StyledLink exact to="/one">
          Page One
        </StyledLink>
        <StyledLink exact to="/two">
          Page Two
        </StyledLink>
        <StyledLink exact to="/three">
          Page Three
        </StyledLink>
        <StyledLink exact to="/four">
          Page Four
        </StyledLink>
      </StyledNav>
      <StyledDiv>
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/one" component={One} />
          <Route exact path="/two" component={Two} />
          <Route exact path="/three" component={Three} />
          <Route exact path="/four" component={Four} />
        </Switch>
      </StyledDiv>
    </StyledContainer>
  );
}

export default App;
