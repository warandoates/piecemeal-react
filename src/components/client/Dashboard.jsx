import React from 'react';
import {connect} from 'react-redux';
import { Button, Checkbox, Form, Grid, Input, Item, Label, Loader, Segment } from 'semantic-ui-react';
import { fetchClient } from '../../actions';
import Restrictions from './Restrictions';
import Profile from './Profile/Profile';
import FeaturedRecipes from './FeaturedRecipes/FeaturedRecipes';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    // this.state = { client: client };
  }

  handleSubmit(event) {
    event.preventDefault();

    // this.props.registerClient(
    //   this.state.fname,
    //   this.state.lname,
    //   this.state.email,
    //   this.state.password,
    //   this.state.confirm,
    //   this.state.iAgree
    // );
  }

  handleInputChange(event) {
    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;
    //
    // this.setState({
    //   [name]: value
    // });
  }

  componentDidMount() {
    this.props.fetchClient(this.props.auth.id, this.props.auth.token);
  }

  render() {
    console.log('this.props:', this.props);
    return (
      <div>
        <Grid columns={3}>
          <Grid.Row stretched>
            <Grid.Column width={3}>
              <Profile src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
            </Grid.Column>
            <Grid.Column>
              <FeaturedRecipes recipes={this.props.client.recipes} />
              {/* <Restrictions restrictions={this.props.client.restrictions} /> */}
              {/* <Segment>2</Segment> */}
            </Grid.Column>
            <Grid.Column>
              <Segment>1</Segment>
              <Segment>2</Segment>
              <Segment>3</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>


      </div>
    )
  };
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth.client,
      client: state.client.client
    };
};

export default connect(mapStateToProps, { fetchClient })(Dashboard);
