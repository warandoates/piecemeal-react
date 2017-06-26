import React from 'react'
import {connect} from 'react-redux'
// import { bindActionCreators } from 'redux';
import { Button, Checkbox, Form, Input, Loader, Segment } from 'semantic-ui-react';
import { registerClient } from '../actions/auth';
import './SignUp.css';


class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirm: '',
      iAgree: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();

    this.props.registerClient(
      this.state.fname,
      this.state.lname,
      this.state.email,
      this.state.password,
      this.state.confirm,
      this.state.iAgree
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    console.log('state:', this.state);
    console.log('props:', this.props);
    return (
      <div>
    <Loader active={this.props.isFetching} />
      <Form disabled={true} onSubmit={this.handleSubmit}>
        <Form.Field>
          {/* <label>First Name</label> */}
          <input
            required
            disabled={this.props.isFetching}
            name='fname'
            placeholder='First Name'
            onChange={this.handleInputChange} />
        </Form.Field>
        <Form.Field>
          {/* <label>Last Name</label> */}
          <input
            required
            disabled={this.props.isFetching}
            name='lname'
            placeholder='Last Name'
            onChange={this.handleInputChange} />
        </Form.Field>
        <Form.Field>
          {/* <label>Email</label> */}
          <input
            type='email'
            required
            disabled={this.props.isFetching}
            name='email'
            placeholder='Email'
            onChange={this.handleInputChange} />
        </Form.Field>
        <Form.Field>
          {/* <label>Password</label> */}
          <input
            type='password'
            required
            disabled={this.props.isFetching}
            name='password'
            placeholder='Password'
            onChange={this.handleInputChange} />
        </Form.Field>
        <Form.Field>
          {/* <label>Confirm</label> */}
          <input
            type='password'
            required
            disabled={this.props.isFetching}
            name='confirm'
            placeholder='Confirm'
            onChange={this.handleInputChange} />
        </Form.Field>
        <Form.Field>
          <Checkbox
            required
            disabled={this.props.isFetching}
            name='iAgree'
            label='I agree to the Terms and Conditions'
            onChange={this.handleInputChange} />
        </Form.Field>
        <Button type='submit'>Submit</Button>
        <div class="ui error message"></div>
      </Form>
    </div>
    )
  };
}

const mapStateToProps = (state) => {
    return {
      client: state.auth.client,
      isFetching: state.auth.isFetching
    };
};

export default connect(mapStateToProps, { registerClient })(SignUp);
