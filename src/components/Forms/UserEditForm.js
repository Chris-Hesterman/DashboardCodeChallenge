import { useState } from 'react';
import { updateData } from '../../helpers';

const UserEditForm = ({ usernameStr, pwdStr, user_id }) => {
  const [username, setUsername] = useState(usernameStr);
  const [pwd, setPwd] = useState(pwdStr);

  const handleChange = (e) => {
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
            onChange={handleChange}
            id="username"
            size="60"
          ></input>

          <label htmlFor="pwd">password: </label>
          <input
            type="text"
            name="pwd"
            value={pwd}
            onChange={handleChange}
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
