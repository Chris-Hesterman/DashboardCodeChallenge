import React from 'react';
import { Switch, Route } from 'react-router-dom';
import One from '../One/One';
import Two from '../Two/Two';
import Three from '../Three/Three';
import Four from '../Four/Four';
import DashBoard from '../Dashboard/DashBoard';
import {
  StyledNavContainer,
  StyledDiv,
  StyledTitle,
  StyledNav,
  StyledLink
} from './App.Styles';

function App(props) {
  return (
    <StyledNavContainer>
      <StyledTitle>Code Challenge</StyledTitle>
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
    </StyledNavContainer>
  );
}

export default App;
