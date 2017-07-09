import React from 'react'
import {connect} from 'react-redux'
// import { bindActionCreators } from 'redux';
import { Button, Checkbox, Form, Input, Loader, Segment } from 'semantic-ui-react';
import { authorizeClient } from '../../actions/auth';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.authorizeClient(
      this.state.email,
      this.state.password
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
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
        <Button type='submit'>Submit</Button>
        <div className="ui error message"></div>
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

export default connect(mapStateToProps, { authorizeClient })(Login);
