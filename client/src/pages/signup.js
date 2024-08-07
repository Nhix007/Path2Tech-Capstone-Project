import React from 'react';
<head>
link rel="stylesheet" href="./src/home.html"
</head>


const Signup = () => {
    
  return (
    <div>
    <h1>Create New Account</h1>

    <form action="/action_page.php">
      <label htmlFor="fname">First name:</label>
      <input type="text" id="fname" name="fname" /><br /><br />

      <label htmlFor="lname">Last name:</label>
      <input type="text" id="lname" name="lname" /><br /><br />

      <label htmlFor="dateofbirth">Date of Birth:</label>
      <input type="text" id="dateofbirth" name="dateofbirth" /><br /><br />

      <label htmlFor="sex">Sex:</label>
      <input type="text" id="sex" name="sex"  /><br /><br />

      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email"  /><br /><br />

      <label htmlFor="phonenumber">Phone Number:</label>
      <input type="text" id="phonenumber" name="phonenumber" /><br /><br />

      <label htmlFor="address">Street Address:</label>
      <input type="text" id="address" name="address"  /><br /><br />

      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" /><br /><br />

      <label htmlFor="state">State:</label>
      <input type="text" id="state" name="state"  /><br /><br />

      <label htmlFor="zipcode">Zipcode:</label>
      <input type="text" id="zipcode" name="zipcode"  /><br /><br />

      <h2>Create Login</h2>

      <label htmlFor="username">User Name (Email):</label>
      <input type="text" id="username" name="username" /><br /><br />

      <label htmlFor="password">Password:</label>
      <input type="text" id="password" name="password" /><br /><br />

      <input type="submit" value="Submit" /> 
    </form>
  </div>
  );
}

export default Signup;