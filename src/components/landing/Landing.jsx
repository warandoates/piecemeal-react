import React from 'react'
import { Grid, Image, Label } from 'semantic-ui-react'
import SignUp from '../SignUp';
import Login from '../login/Login';
import Restrictions from '../client/Restrictions';

const Landing = () => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column width={16}>
        {/* <Image src='/assets/images/wireframe/paragraph.png' /> */}
        <Restrictions />
        <Label>SignUp</Label>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column mobile={1} tablet={2} computer={6}>
        {/* <Image src='/assets/images/wireframe/paragraph.png' /> */}
      </Grid.Column>
      <Grid.Column mobile={14} tablet={12} computer={4}>
        {/* <SignUp /> */}
        {/* <Login /> */}
        <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' size="medium" shape="circular" />
      </Grid.Column>
      <Grid.Column mobile={1} tablet={2} computer={6}>
        {/* <Image src='/assets/images/wireframe/paragraph.png' /> */}
      </Grid.Column>
    </Grid.Row>

      <Grid.Row>
        <Grid.Column mobile={14} tablet={12} computer={4}>
          <Image
            style={styles.image}
            size="medium"
            src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
        </Grid.Column>
      </Grid.Row>
  </Grid>
)

const styles = {
  image: {
    flex: 1
  }
}

export default Landing
