import React, { useState } from 'react';

const LoginForm = () => {
  const [userName, updateUserName] = useState('');
  const [password, updatePassword] = useState('');

  function handleInputChange(e) {
    e.preventDefault();

    if (e.target.name === 'userName') {
      updateUserName(e.target.value);
    } else {
      updatePassword(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(userName, password);
  }

  return (
    <form>
      <input
        type="text"
        name="userName"
        placeholder="userName"
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleInputChange}
      />
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
