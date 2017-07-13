import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIngredients } from '../../actions/ingredients';

export class IngredientView extends Component {

  componentDidMount() {
    this.props.getIngredients();
  }

  render() {
    return (
      <div>
        <h2>Hi</h2>
      </div>
    )
  }
}

export default connect(null, { getIngredients })(IngredientView);
