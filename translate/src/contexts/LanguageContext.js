import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component{
  //business logic
  state={language:'english'};

  onLanguageChange = (language) => {
    this.setState({language: language});
  }

  render(){
    return (
      //Passing both language and onLanguageChange function to the provider
      //this.props.children has the data of the child components i.e ContextProvideris wrapped around all the child components
      <Context.Provider  value={{...this.state, onLanguageChange: this.onLanguageChange}}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
