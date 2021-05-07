import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
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
        <StyledLink exact to="/Page1">
          Page 1
        </StyledLink>
        <StyledLink exact to="/Page2">
          Page 2
        </StyledLink>
        <StyledLink exact to="/Page3">
          Page 3
        </StyledLink>
        <StyledLink exact to="/Page4">
          Page 4
        </StyledLink>
      </StyledNav>
      <StyledDiv>
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/Page1" component={Page1} />
          <Route exact path="/Page2" component={Page2} />
          <Route exact path="/Page3" component={Page3} />
          <Route exact path="/Page4" component={Page4} />
        </Switch>
      </StyledDiv>
    </StyledNavContainer>
  );
}

export default App;
