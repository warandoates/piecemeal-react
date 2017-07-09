import React from 'react';
import {connect} from 'react-redux';
import { Button, Checkbox, Form, Grid, Input, Item, Label, Loader, Segment } from 'semantic-ui-react';
import { recipe } from './dummyRecipe';
import RecipeHeader from './RecipeHeader';
import RecipeTags from './RecipeTags';
import RecipeIngredients from './RecipeIngredients';
import RecipeInstructions from './RecipeInstructions';
import { fetchClient } from '../../actions';

class RecipeView extends React.Component {

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

  componentDidMount() {
    console.log('props:', this.props);
    this.props.fetchClient(this.props.auth.id, this.props.auth.token);
  }

  render() {
    return (
      <div>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={16}>
            {/* <Image src='/assets/images/wireframe/paragraph.png' /> */}
            <Button label={1048} icon='fork' labelPosition='left' />
            <Button label={{ content: '2,048' }} icon='heart' content='Like' labelPosition='left' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4} />

          <Grid.Column width={8}>
            <RecipeHeader recipe={this.state.recipe} />
            <Segment>
              <Item.Group divided>
                <RecipeIngredients ingredients={this.state.recipe.ingredients} restrictions={this.props.client.restrictions || []} />
              </Item.Group>
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

const mapStateToProps = (state) => {
    return {
      auth: state.auth.client,
      client: state.client
    };
};

export default connect(mapStateToProps, { fetchClient })(RecipeView);
