import { useState } from 'react';
import { StyledDiv, StyledP, StyledH2 } from './QuestionBox.Styles';

const QuestionBox = ({ question, answer }) => {
  const [inputText, setInput] = useState('');
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <StyledDiv>
      <StyledP>{question}</StyledP>
      <input
        type="text"
        value={inputText}
        onChange={onChange}
        placeholder="Type answer here"
      ></input>
      {!!(inputText === answer) && <StyledH2>Good Job!</StyledH2>}
    </StyledDiv>
  );
};

export default QuestionBox;
