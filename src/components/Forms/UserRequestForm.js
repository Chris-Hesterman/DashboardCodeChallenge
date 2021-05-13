import { useState } from 'react';
import { NavLink } from 'react-routeer-dom';
import styled from 'styled-components';
import { UserEditForm } from './UserEditForm';
import { fetchData } from '../../helpers';

const StyledUl = styled.ul`
  padding-left: 0;
`;

const UserRequestForm = ({ user_id }) => {
  const [value, setValue] = useState('');
  const [fetched, setFetched] = useState('');

  const getQuestions = async (page_id) => {
    try {
      const result = await fetchData(page_id, 'questions');
      let fetchedData = result.data.filter((page) => {
        return page !== null;
      });
      setFetched(fetchedData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getQuestions(value);
  };

  const editForms = fetched.length
    ? fetched[0].map((entry) => {
        console.log(entry);
        return (
          <UserEditForm
            usernameString={entry.username}
            passwordString={entry.password}
            pageNumber={entry.user_id}
            key={entry.username + entry.user_id}
          />
        );
      })
    : null;

  return fetched.length ? (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        id="user"
        placeholder="user_id"
      ></input>
      <button type="submit">Submit</button>
    </form>
  ) : (
    <div>
      <StyledUl>{editForms}</StyledUl>
      <NavLink exact to={`/Page1`}>
        Finished Editing
      </NavLink>
    </div>
  );
};

export default UserRequestForm;
