import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Sidebar, Segment, Button, Menu, Image, Icon, Input, Header, Label } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/login/Login';
import Landing from './components/landing/Landing';
import Notifications from './components/menus/Notifications';
import RecipeView from './components/recipe/RecipeView';

class App extends Component {

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  state = { activeItem: 'inbox', visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { activeItem, visible } = this.state
    return (
      <div className="App">
        <div className="App-header">
          <Button active={this.state.visible} size='huge' icon floated='left' onClick={this.toggleVisibility}>
            <Icon name='sidebar' />
          </Button>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Router>
          <div>
            <Sidebar.Pushable as={Segment}>
              <Sidebar
                as={Menu}
                animation='scale down'
                width='tiny'
                direction='left'
                visible={visible}
                icon='labeled'
                vertical
              >
                <Menu.Item name='avatar'>
                  <Image src={this.props.client.image_url} size='tiny' avatar shape='circular' />
                </Menu.Item>
                <Menu.Item name='email'>
                  <span>{this.props.client.email}</span>
                </Menu.Item>
                <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
                  <Label color='teal'>1</Label>
                  Inbox
                </Menu.Item>

                <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
                  <Label>51</Label>
                  Spam
                </Menu.Item>

                <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                  <Label>1</Label>
                  Updates
                </Menu.Item>
                <Menu.Item>
                  <Input icon='search' placeholder='Search mail...' />
                </Menu.Item>
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
                  {/* <Landing /> */}
                  {/* <SignUp /> */}
                  <Login />
                  <RecipeView />
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

const mapStateToProps = (state) => {
    return {
      client: state.auth.client
    };
};

export default connect(mapStateToProps, null)(App);
