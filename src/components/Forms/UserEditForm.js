import { useState } from 'react';
import { updateData } from '../../helpers';

const UserEditForm = ({ usernameStr, pwdStr, user_id }) => {
  const [username, setUsername] = useState(usernameStr);
  const [pwd, setPwd] = useState(pwdStr);

  const onChange = (e) => {
    if (e.target.id === 'username') {
      setUsername(e.target.value);
    } else setPwd(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>User ID: {user_id}</h3>
        <div>
          <label htmlFor="username">username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            id="username"
            size="60"
          ></input>

          <label htmlFor="pwd">password: </label>
          <input
            type="text"
            name="pwd"
            value={pwd}
            onChange={onChange}
            id="pwd"
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      <br></br>
    </div>
  );
};

export default UserEditForm;
