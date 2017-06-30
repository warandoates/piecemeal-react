import React from 'react'
import { Label } from 'semantic-ui-react'


const RecipeTags = (props) => (
  <div>
    {/* <Label as='a' tag>New</Label>
    <Label as='a' color='red' tag>Upcoming</Label>
    <Label as='a' color='teal' tag>Featured</Label> */}
    {props.tags.map(t => {
        return <Label as='a' tag>{t}</Label>
    })}
  </div>
)

export default RecipeTags
