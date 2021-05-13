import { useState } from 'react';
import QuestionEditForm from '../Forms/QuestionEditForm';
import { fetchData } from '../../helpers';
import styled from 'styled-components';

const StyledUl = styled.ul`
  padding-left: 0;
`;

const PageRequestForm = ({ refreshQuestions }) => {
  const [value, setValue] = useState('');
  const [fetched, setFetched] = useState('');

  const getQuestions = async (page_id) => {
    try {
      const result = await fetchData(page_id, 'question');
      let fetchedData = result.data.filter((page) => {
        return page !== null;
      });
      console.log(fetchedData);
      setFetched(fetchedData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    window.location.replace(window.location.href);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getQuestions(value);
  };

  const editForms =
    Array.isArray(fetched) && fetched.length !== 0
      ? fetched
          .filter((item) => item !== null)
          .map((entry) => {
            return (
              <QuestionEditForm
                questionString={entry.question}
                answerString={entry.answer}
                pageNumber={entry.page_id}
                questionNumber={entry.question_id}
                key={entry.answer}
              />
            );
          })
      : null;

  return !fetched.length ? (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        id="page"
        placeholder="page number"
      ></input>
      <button type="submit">Submit</button>
    </form>
  ) : (
    <div>
      <StyledUl>{editForms}</StyledUl>
      <button type="button" onClick={handleClick}>
        Finished Editing
      </button>
    </div>
  );
};

export default PageRequestForm;
