import React from 'react'
import { Icon, Label, Segment } from 'semantic-ui-react'

const Restrictions = (props) => (
    <Segment.Group stacked>
      <Segment>Restrictions</Segment>
      {props.restrictions && <Segment>
        {props.restrictions.map(t => {
            return (
              <Label color='red' as='a' tag>
                <img src={props.src} />
                {t.name}
                <Icon name='delete' />
              </Label>
            )
        })}
      </Segment>}
    </Segment.Group>
)

export default Restrictions
