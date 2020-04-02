import React from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import LanguageContext from '../contexts/LanguageContext';
import {LanguageStore} from '../contexts/LanguageContext';

class App extends React.Component{
  render(){
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <LanguageStore>
            <LanguageSelector onLanguageChange={this.onLanguageChange}/>
            <UserCreate/>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
