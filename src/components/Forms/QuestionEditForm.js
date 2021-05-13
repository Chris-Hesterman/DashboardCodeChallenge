import React, { useState } from 'react';
import styled from 'styled-components';
import { deleteData, updateData } from '../../helpers';

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

  const handleChange = (e) => {
    if (e.target.id === 'question') {
      setQuestion(e.target.value);
    } else setAnswer(e.target.value);
  };

  const handleClick = (e) => {
    deleteData(questionNumber, 'question')
      .then((response) => {
        setAnswer('');
        setQuestion('');
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateData(questionNumber, question, answer, 'question')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return question && answer ? (
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
            onChange={handleChange}
            id="question"
            size="60"
          ></input>

          <label htmlFor="answer">answer: </label>
          <input
            type="text"
            name="answer"
            value={answer}
            onChange={handleChange}
            id="answer"
          ></input>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClick}>
          Delete Question and Answer
        </button>
      </form>
      <br></br>
    </StyledContainer>
  ) : null;
};

export default QuestionEditForm;
