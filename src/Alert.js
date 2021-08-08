import React, { useEffect } from 'react';

const Alert = ({ type, msg }) => {
  // type and msg comming from state value
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
