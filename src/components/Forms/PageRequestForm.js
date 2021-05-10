import { useState } from 'react';
import EditForm from '../Forms/EditForm';
import { fetchData } from '../../helpers';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
  padding-left: 0;
`;
const PageRequestForm = ({ pageData }) => {
  const [value, setValue] = useState('');
  const [data, setData] = useState('');

  const getQuestions = async (pageNumber) => {
    try {
      const result = await fetchData(pageNumber);
      let fetchedData = result.data.filter((page) => {
        return page !== null;
      });
      setData(fetchedData);
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

  const editForms = data.length
    ? data[0].map((entry) => {
        console.log(entry);
        return (
          <EditForm
            questionString={entry.question}
            answerString={entry.answer}
            pageNumber={entry.page_id}
            questionNumber={entry.question_id}
            key={entry.answer}
          />
        );
      })
    : null;

  return !data.length ? (
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
