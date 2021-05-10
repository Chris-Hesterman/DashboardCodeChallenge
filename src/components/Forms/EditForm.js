import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
`;
const StyledDiv = styled.div``;
const EditForm = ({
  questionString,
  answerString,
  pageNumber,
  questionNumber
}) => {
  const [question, setQuestion] = useState(questionString);
  const [answer, setAnswer] = useState(answerString);

  const onChange = (e) => {
    if (e.target.id === 'question') {
      setQuestion(e.target.value);
    } else setAnswer(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledContainer>
      <form onSubmit={onSubmit}>
        <h3>
          Page #: {pageNumber} Question ID: {questionNumber}
        </h3>
        <StyledDiv>
          <label htmlFor="question">question: </label>
          <input
            type="text"
            name="question"
            value={question}
            onChange={onChange}
            id="question"
            size="60"
          ></input>

          <label htmlFor="answer">answer: </label>
          <input
            type="text"
            name="answer"
            value={answer}
            onChange={onChange}
            id="answer"
          ></input>
        </StyledDiv>
        <button type="submit">Submit</button>
      </form>
      <br></br>
    </StyledContainer>
  );
};

export default EditForm;
