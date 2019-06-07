import React, { useState } from 'react';
import { withLogin } from 'no-stack';

const LoginForm = ({ currentUser, loading, login, logoutUser }) => {
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

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await login({ username: userName, password });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogout(e) {
    await logoutUser();
  }

  if (loading) return null;

  if (currentUser) {
    return (
      <button
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    );
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
        onClick={handleLogin}
      >
        Login
      </button>
    </form>
  );
};

export default withLogin(LoginForm);
