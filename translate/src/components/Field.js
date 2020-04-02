import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component{
  //create contextType and assign contextObject
  //contextType is a special name
  static contextType = LanguageContext;
  render(){
    const text = this.context.language === 'english' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <br/>
        <label>{text}</label>
        <input/>
      </div>
    );
  }
}

export default Field;
