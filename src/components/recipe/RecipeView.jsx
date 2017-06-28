import React from 'react';
import {connect} from 'react-redux';
import { Button, Checkbox, Form, Grid, Input, Loader, Segment } from 'semantic-ui-react';
import { recipe } from './dummyRecipe';
import RecipeHeader from './RecipeHeader';
import RecipeTags from './RecipeTags';
import RecipeIngredients from './RecipeIngredients';
import RecipeInstructions from './RecipeInstructions';

export default class RecipeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { recipe: recipe };

    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={16}>
            {/* <Image src='/assets/images/wireframe/paragraph.png' /> */}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={8}>
        <RecipeHeader recipe={this.state.recipe} />
        <Segment>
          <RecipeIngredients ingredients={this.state.recipe.ingredients} />
        </Segment>

        <Segment>
          <RecipeInstructions instructions={this.state.recipe.instructions} />
        </Segment>

        <Segment>
          <RecipeTags tags={this.state.recipe.tags} />
        </Segment>

        <Segment>
          {this.state.recipe.notes}
        </Segment>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
      </div>
    )
  };
}

// const mapStateToProps = (state) => {
//     return {
//       client: state.auth.client,
//       isFetching: state.auth.isFetching
//     };
// };
//
// export default connect(mapStateToProps, { registerClient })(RecipeView);
