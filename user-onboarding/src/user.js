import React from 'react';

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your user details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.name}</h2>
      <p>Password: {details.password}</p>
      <p>Email: {details.email}</p>
      <p>Terms of Service: {details.tos}</p>
    </div>
  )
}

export default User;
