import React, { useState } from 'react';
import styled from 'styled-components';
import { updateData } from '../../helpers';

const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
`;

const QuestionEditForm = ({
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
    updateData(questionNumber, question, answer, 'question')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledContainer>
      <form onSubmit={onSubmit}>
        <h3>
          Page #: {pageNumber} Question ID: {questionNumber}
        </h3>
        <div>
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
        </div>
        <button type="submit">Submit</button>
      </form>
      <br></br>
    </StyledContainer>
  );
};

export default QuestionEditForm;
