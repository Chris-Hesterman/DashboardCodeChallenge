import React, { useState } from 'react';

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
    <div>
      <form onSubmit={onSubmit}>
        <h3>
          Page #: {pageNumber} Question ID: {questionNumber}
        </h3>
        <label htmlFor="question">question: </label>
        <input
          type="text"
          name="question"
          value={question}
          onChange={onChange}
          id="question"
        ></input>

        <label htmlFor="answer">answer: </label>
        <input
          type="text"
          name="answer"
          value={answer}
          onChange={onChange}
          id="answer"
        ></input>

        <button type="submit">Submit</button>
      </form>
      <br></br>
    </div>
  );
};

export default EditForm;
