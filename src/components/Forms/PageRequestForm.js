import { useState } from 'react';
import QuestionEditForm from '../Forms/QuestionEditForm';
import { fetchData } from '../../helpers';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
  padding-left: 0;
`;
const PageRequestForm = () => {
  const [value, setValue] = useState('');
  const [fetched, setFetched] = useState('');

  const getQuestions = async (page_id) => {
    try {
      const result = await fetchData(page_id, 'question');
      let fetchedData = result.data.filter((page) => {
        return page !== null;
      });
      setFetched(fetchedData);
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getQuestions(value);
  };

  const editForms =
    fetched.length !== 0
      ? fetched[0]
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
        onChange={onChange}
        id="page"
        placeholder="page number"
      ></input>
      <button type="submit">Submit</button>
    </form>
  ) : (
    <div>
      <StyledUl>{editForms}</StyledUl>
      <NavLink exact to={`/Page${value}`}>
        Finished Editing
      </NavLink>
    </div>
  );
};

export default PageRequestForm;
