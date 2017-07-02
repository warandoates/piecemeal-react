import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Sidebar, Segment, Button, Menu, Image, Icon, Input, Header, Label } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';
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
                {this.props.client.length > 0 && <Menu.Item name='avatar'>
                  <Image src={this.props.client.image_url} size='tiny' avatar shape='circular' />
                </Menu.Item>}
                <Menu.Item name='email'>
                  <span>{this.props.client.email}</span>
                </Menu.Item>
                {this.props.client.length > 0 && <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
                  <Label color='teal'>1</Label>
                  Inbox
                </Menu.Item>}

                {this.props.client.length > 0 && <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
                  <Label>51</Label>
                  Spam
                </Menu.Item>}

                {this.props.client.length > 0 && <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
                  <Label>1</Label>
                  Updates
                </Menu.Item>}

                <Menu.Item name='home' as={Link} to='/'>
                  <Icon name='home' />
                  Home
                </Menu.Item>
                <Menu.Item name='Login' as={Link} to='/Login'>
                  <Icon name='sign in' />
                  Login
                </Menu.Item>
                <Menu.Item name='camera'>
                  <Icon name='camera' />
                  Channels
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher>
                <Segment basic>
                  <Route exact path="/" component={Landing} />
                  <Route path="/Login" component={Login} />
                  <Route path="/recipe" component={RecipeView} />
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
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
