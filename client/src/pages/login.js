import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="username">User Name:</label> 
      <input type="text" id="username" name="username" /><br /><br />
      <label htmlFor="password">Password:</label> 
      <input type="password" id="password" name="password" /><br /><br />
      <input type="submit" value="Submit" />
    </div>
  );
}

export default Login;