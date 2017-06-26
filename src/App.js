import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/login/Login';
import Landing from './components/landing/Landing';

class App extends Component {

  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Router>
          <div>
            <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
            <Sidebar.Pushable as={Segment}>
              <Sidebar
                as={Menu}
                animation='scale down'
                width='thin'
                direction='left'
                visible={visible}
                icon='labeled'
                vertical
                inverted
              >
                <Menu.Item name='home'>
                  <Icon name='home' />
                  Home
                </Menu.Item>
                <Menu.Item name='gamepad'>
                  <Icon name='gamepad' />
                  Games
                </Menu.Item>
                <Menu.Item name='camera'>
                  <Icon name='camera' />
                  Channels
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher>
                <Segment basic>
                  {/* <Header as='h3'>Application Content</Header>
                  <Image src='/assets/images/wireframe/paragraph.png' /> */}
                  <Landing />
                  {/* <SignUp /> */}
                  {/* <Login /> */}
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
            {/* <Route exact path="/" component={IndexPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/exercises" component={Exercises} />
            <Route path="/routines" component={Routines} />
            <Route path="/signup" component={FormExampleForm} />
            <Route path="/login" component={LoginForm} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
