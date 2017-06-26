import React from 'react'
import { Grid, Image, Label } from 'semantic-ui-react'
import SignUp from '../SignUp';

const Landing = () => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column width={16}>
        {/* <Image src='/assets/images/wireframe/paragraph.png' /> */}
        <Label>SignUp</Label>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column mobile={1} tablet={2} computer={6}>
        {/* <Image src='/assets/images/wireframe/paragraph.png' /> */}
      </Grid.Column>
      <Grid.Column mobile={14} tablet={12} computer={4}>
        <SignUp />
      </Grid.Column>
      <Grid.Column mobile={1} tablet={2} computer={6}>
        {/* <Image src='/assets/images/wireframe/paragraph.png' /> */}
      </Grid.Column>
    </Grid.Row>

      <Grid.Row>
        <Grid.Column width={16}>
          <Image src='/assets/images/wireframe/paragraph.png' />
        </Grid.Column>
      </Grid.Row>
  </Grid>
)

export default Landing
