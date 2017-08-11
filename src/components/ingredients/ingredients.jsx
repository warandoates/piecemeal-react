import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Card } from 'semantic-ui-react';
import { getAllIngredients } from '../../actions/ingredients';
import rootReducer from '../../reducers';

export class IngredientView extends Component {

  componentWillMount() {
    return this.props.getAllIngredients();
  }

  shuffleArray(array) {
    const shuffledArray = array.slice();
    let len = shuffledArray.length - 1;
    let randomInt;
    let temp;

    while (len > 0) {
      randomInt = Math.floor(Math.random() * len);
      temp = shuffledArray[len];
      shuffledArray[len] = shuffledArray[randomInt];
      shuffledArray[randomInt] = temp;
      len -= 1;
    }
    return shuffledArray;
  }

  ingredientSplit(arr, num) {
    const updatedArr = this.shuffleArray(arr);
    const rest = updatedArr.length % num;
    let restUsed = rest;
    const partLength = Math.floor(updatedArr.length / num);
    const result = [];
    for (let i = 0; i < updatedArr.length; i += partLength) {
      let end = partLength + i;
      let add = false;
      if (rest !== 0 && restUsed) {
        end += 1;
        restUsed -= 1;
        add = true;
      }
      result.push(updatedArr.slice(i, end));
      if (add) {
        i += 1;
      }
    }
    return result;
  }

  render() {
    const { ingredients } = this.props;
    // console.log('this is ingredient', this.props);
    let usefulArray = this.ingredientSplit(ingredients.allIngredients, 5);
    return (
      <Grid doubling columns={5}>
    <Grid.Column>
      {ingredients.allIngredients.length > 0 && usefulArray[0].map(item =>
        <Card
          key={item.id}
          header={item.name}
          image={item.image_url}
          description={item.description}
        >
        </Card>
      )}
    </Grid.Column>
    <Grid.Column>
      {ingredients.allIngredients.length > 1 && usefulArray[1].map(item =>
        <Card
          key={item.id}
          header={item.name}
          image={item.image_url}
          description={item.description}
        >
        </Card>
      )}
    </Grid.Column>
    <Grid.Column>
      {ingredients.allIngredients.length > 2 && usefulArray[2].map(item =>
        <Card
          key={item.id}
          header={item.name}
          image={item.image_url}
          description={item.description}
        >
        </Card>
      )}
    </Grid.Column>
    <Grid.Column>
      {ingredients.allIngredients.length > 3 && usefulArray[3].map(item =>
        <Card
          key={item.id}
          header={item.name}
          image={item.image_url}
          description={item.description}
        >
        </Card>
      )}
    </Grid.Column>
    <Grid.Column>
      {ingredients.allIngredients.length > 4 && usefulArray[4].map(item =>
        <Card
          key={item.id}
          header={item.name}
          image={item.image_url}
          description={item.description}
        >
        </Card>
      )}
    </Grid.Column>
  </Grid>

    )
  }
}

export default connect(rootReducer, { getAllIngredients })(IngredientView);
