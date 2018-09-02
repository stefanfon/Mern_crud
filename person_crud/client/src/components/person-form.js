import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';



class PersonForm extends Component {


	componentWillReceiveProps = (nextProps) => { 
    const { person } = nextProps;
    if(person._id !== this.props.person._id) {
      this.props.initialize(person)
    }
  }


renderField = ({ input, label, type,  }) => (
    <Form.Field >
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
    </Form.Field>
  )

  render() {
  	const { handleSubmit,person} = this.props;
    return (
      <Grid centered columns={2}>
        <Grid.Column>
            <h1 style={{marginTop:"1em"}}>{this.props.person._id ? 'Edit Person' : 'Add New Person'}</h1>
            <Form onSubmit={handleSubmit} >
            <Form.Group widths='equal'>
              <Field name="name" type="text" component={this.renderField} label="Name"/>
              <Field name="surname" type="text" component={this.renderField} label="Surname"/>
            </Form.Group>
            <Field name="phone" type="text" component={this.renderField} label="Phone"/>
            <Field name="city" type="text" component={this.renderField} label="City"/>
             <Field name="address" type="text" component={this.renderField} label="Address"/>

            <Button primary type='submit' >{this.props.person._id?'Update':'Save'}</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'person'})(PersonForm);