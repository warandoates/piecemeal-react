import _ from 'lodash'
import React from 'react'
import { Card, Grid, Icon, Image } from 'semantic-ui-react'

const FeaturedRecipes = (props) => (
  <div>
  {props.recipes && <Grid columns='equal'>
    {props.recipes.map(t => {
        return (
          // <Grid.Column>
          //   <Image src={t.image_url} size='medium' />
          //   {t.name}
          //   <Card>
          //     <div class="ui slide masked reveal image">
          //       <Image src={t.image_url} className="visible content" />
          //       <Image src={t.image_url} className="hidden content" />
          //     </div>
          //     <Card.Content>
          //       <Card.Header>
          //         {t.name}
          //       </Card.Header>
          //       <Card.Meta>
          //         <span className='date'>
          //           {`Created on ${t.created_at}`}
          //         </span>
          //       </Card.Meta>
          //       <Card.Description>
          //         {t.description}
          //       </Card.Description>
          //     </Card.Content>
          //     <Card.Content extra>
          //       <a>
          //         <Icon name='user' />
          //         22 Friends
          //       </a>
          //     </Card.Content>
          //   </Card>
          // </Grid.Column>
          <div className="ui card">
            <div className="ui slide masked reveal small image">
              <img src="https://semantic-ui.com/images/avatar/large/jenny.jpg" className="visible content" tiny />
                <div className="hidden content">{t.description}</div>
            </div>
            <div className="content">
              <a className="header">Team Fu &amp; Hess</a>
              <div className="meta">
                <span className="date">Create in Sep 2014</span>
              </div>
            </div>
            <div className="extra content">
              <a>
                <i className="users icon"></i>
                2 Members
              </a>
            </div>
          </div>
        )
    })}
  </Grid>}
  </div>
)

export default FeaturedRecipes
