import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Image } from 'semantic-ui-react';
import { getAllIngredients } from '../../actions/ingredients';
import rootReducer from '../../reducers';

export class IngredientView extends Component {

  componentWillMount() {
    return this.props.getAllIngredients();
  }

  shuffleArray = (array) => {
    let shuffledArray = array.slice();
    let len = shuffledArray.length - 1;
    let result = [];
    let randomInt;
    let temp;

    while (len > 0) {
      randomInt = Math.floor(Math.random() * len);
      temp = shuffledArray[len];
      shuffledArray[len] = shuffledArray[randomInt];
      shuffledArray[randomInt] = temp;
      len--;
    }
    return shuffledArray
  }

  ingredientSplit = (arr, num) => {
    let updatedArr = this.shuffleArray(arr);
    let rest = updatedArr.length % num;
    let restUsed = rest;
    let partLength = Math.floor(updatedArr.length / num);
    let result = [];
    for (var i = 0; i < updatedArr.length; i += partLength) {
      let end = partLength + i;
      let add = false;
      if (rest !== 0 && restUsed) {
        end++;
        restUsed--;
        add = true;
      }
      result.push(updatedArr.slice(i, end));
      if (add) {
        i++;
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
        <div key={item.id}>{item.name}</div>
      )}
    </Grid.Column>
    <Grid.Column>
      {ingredients.allIngredients.length > 1 && usefulArray[1].map(item =>
        <div key={item.id}>{item.name}</div>
      )}
    </Grid.Column>
    <Grid.Column>
      {ingredients.allIngredients.length > 2 && usefulArray[2].map(item =>
        <div key={item.id}>{item.name}</div>
      )}
    </Grid.Column>
    <Grid.Column>
      {ingredients.allIngredients.length > 3 && usefulArray[3].map(item =>
        <div key={item.id}>{item.name}</div>
      )}
    </Grid.Column>
    <Grid.Column>
      {ingredients.allIngredients.length > 4 && usefulArray[4].map(item =>
        <div key={item.id}>{item.name}</div>
      )}
    </Grid.Column>
  </Grid>

    )
  }
}

export default connect(rootReducer, { getAllIngredients })(IngredientView);
