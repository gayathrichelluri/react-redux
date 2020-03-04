import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

//if props message is not mentioned by the user, by default below message will be displayed
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
