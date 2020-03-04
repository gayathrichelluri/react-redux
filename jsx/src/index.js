import React from 'react';
import ReactDOM from 'react-dom';

/*function getButtonText(){
  return 'Click on me!';
}*/

const App = () => {
  const buttonText = {text: 'Click Me!'};
  return (
    <div>
      <label className="name" htmlFor="name">Enter Name:</label> {/*double quotes for jsx variables*/}
      <input id="name"/>
      <button style={{backgroundColor:'blue', color:'white'}}>
        {buttonText.text}
      </button> {/*sigle quotes for everyother variables*/}
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
