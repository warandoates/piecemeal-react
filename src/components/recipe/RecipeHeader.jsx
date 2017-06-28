import React, { Text } from 'react'
import { Header, Icon, Image, Segment } from 'semantic-ui-react'

const RecipeHeader = (props) => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Header.Content>
        {props.recipe.name}
      </Header.Content>
    </Header>
    <Image centered size='large' shape='rounded' src={props.recipe.image_url} />
    <Segment>{props.recipe.description}</Segment>
  </div>
)

export default RecipeHeader
