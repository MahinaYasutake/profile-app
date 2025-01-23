import React from 'react';

const Card = ({ name, email, jobTitle, extraInfo }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Job Title:</strong> {jobTitle}</p>
      {extraInfo && <p><strong>Extra Info:</strong> {extraInfo}</p>}
    </div>
  );
};

export default Card;