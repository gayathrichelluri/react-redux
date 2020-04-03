import React from 'react';
import useResources from './useResources';

const ResourceList = ({resource}) => {
    const resources = useResources(resource);

    return (
      <div>
        <ul>
          {resources.map(record => {
            return (
              <li key={record.id}> {record.title} </li>
            );
          })}
        </ul>
      </div>
    );
}

export default ResourceList;

//Using class-based component
/* state = {resources: []};

async componentDidMount() {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
  this.setState({resources: response.data});
}

async componentDidUpdate(prevProps){
  if(prevProps.resource !== this.props.resource){
    const response =await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
    this.setState({resources: response.data});
  }
}*/
