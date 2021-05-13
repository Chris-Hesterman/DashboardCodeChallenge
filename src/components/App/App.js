import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
import DashBoard from '../Dashboard/DashBoard';
import { fetchData } from '../../helpers';
import {
  StyledNavContainer,
  StyledDiv,
  StyledTitle,
  StyledNav,
  StyledLink
} from './App.Styles';

function App(props) {
  const [fetched, setFetched] = useState([]);

  const getQuestions = async (pageNumber) => {
    try {
      const result = await fetchData(pageNumber, 'question');

      setFetched(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getQuestions('[]');
  }, []);

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
          <Route
            exact
            path="/"
            render={() => <DashBoard refreshQuestions={getQuestions} />}
          />
          <Route
            exact
            path="/Page1"
            render={() => <Page1 questions={fetched[0]} />}
          />
          <Route
            exact
            path="/Page2"
            render={() => <Page2 questions={fetched[1]} />}
          />
          <Route
            exact
            path="/Page3"
            render={() => <Page3 questions={fetched[2]} />}
          />
          <Route
            exact
            path="/Page4"
            render={() => <Page4 questions={fetched[3]} />}
          />
        </Switch>
      </StyledDiv>
    </StyledNavContainer>
  );
}

export default App;
