import { useState } from 'react';

const PageEditForm = ({ getPage }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getPage(value);
  };

  return (
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
  );
};

export default PageEditForm;
