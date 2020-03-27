import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component{
  renderInput = ({meta, input, Label}) => {
    const className=`field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{Label}</label>
        <input {...input}/>
        {this.renderError(meta)}
      </div>
    );
  }

  renderError({error, touched}){
    if(error && touched){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render(){
    return (
      <div>
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" component={this.renderInput} Label="Title"/>
          <Field name="description" component={this.renderInput} Label="Description"/>
          <button className="ui primary button">Submit</button>
        </form>
      </div>
    );
  }
}

//validate the form
const validate = (formValues) => {
  const errors = {};

  if(!formValues.title){
    errors.title = 'You must enter a title';
  }

  if(!formValues.description){
    errors.description = 'You must enter a description';
  }

  return errors;
}

export default reduxForm({
  form: 'StreamForm',
  validate
})(StreamForm);
