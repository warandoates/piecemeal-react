import React from 'react'
import { Checkbox, Icon, Image, Item, List } from 'semantic-ui-react';
import './RecipeIngredients.css';

const RecipeIngredients = (props) => (
  <List id='leest' ordered relaxed>
    {props.ingredients.map(i => {
        let icon;
        if(props.restrictions.indexOf(i.id) === -1) {
          icon = <Icon circular color='teal' name='users' />
        } else {
          icon = <Icon circular color='teal' name='home' />
        }
        return (
          <div>
              <Item>
                <Checkbox toggle />
                <Item.Image avatar size='tiny' src={i.image_url} />

                <Item.Content>
                  <Item.Header as='a'>{i._pivot_amount}   {i.name}</Item.Header>
                  {/* <Item.Meta>Description</Item.Meta> */}
                  <Item.Description>
                    {i.description}
                  </Item.Description>
                  {/* <Item.Extra>Additional Details</Item.Extra> */}
                  {icon}
                </Item.Content>
              </Item>
          </div>
      )
    })}
  </List>
)

export default RecipeIngredients
