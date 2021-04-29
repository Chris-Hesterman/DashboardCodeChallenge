import React from 'react';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import DashBoard from './DashBoard';

function App(props) {
  return (
    <div className="App">
      Hello
      <DashBoard />
      <One />
      <Two />
      <Three />
      <Four />
    </div>
  );
}

export default App;
