import React, {useState} from 'react';
import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');

    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <button className="ui black button" onClick={()=>setResource('posts')}>Posts</button>
        <button className="ui black button" onClick={()=>setResource('todos')}>Todos</button>
        <ResourceList resource={resource}/>
      </div>
    );
};

export default App;
