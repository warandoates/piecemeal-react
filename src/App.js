import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Grid, Sidebar, Segment, Button, Menu, Image, Icon, Input, Header, Label } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';
import Login from './components/login/Login'
import Landing from './components/landing/Landing';
import Notifications from './components/menus/Notifications';
import RecipeView from './components/recipe/RecipeView';
import Dashboard from './components/client/Dashboard';

class App extends Component {

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  state = { activeItem: 'inbox', visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { activeItem, visible } = this.state
    return (
      <div className="App" >
        <div className="App-header" style={{paddingBottom: 150}}>
          <Button active={this.state.visible} size='huge' icon floated='left' onClick={this.toggleVisibility}>
            <Icon name='sidebar' />
          </Button>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Router>
            <Sidebar.Pushable as={Segment} height='100%'>
              <Sidebar
                as={Menu}
                animation='scale down'
                width='tiny'
                direction='left'
                visible={visible}
                icon='labeled'
                vertical
                height='100%'
              >
                {this.props.client.email && <Menu.Item name='avatar'>
                  <Image src={this.props.client.image_url} size='tiny' avatar shape='circular' />
                </Menu.Item>}
                <Menu.Item name='email'>
                  <span>{this.props.client.email}</span>
                </Menu.Item>
                {this.props.client.email &&
                  <Menu.Item
                    as={Link} to='/Recipe'
                    name='recipes'
                    active={activeItem === 'recipes'}
                    onClick={this.handleItemClick}>
                  <Label color='teal'>1</Label>
                  Recipes
                </Menu.Item>}

                {this.props.client.email && <Menu.Item name='ingredients' active={activeItem === 'ingredients'} onClick={this.handleItemClick}>
                  <Label color='teal'>1</Label>
                  Ingredients
                </Menu.Item>}

                {this.props.client.email && <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
                  <Label color='teal'>1</Label>
                  Inbox
                </Menu.Item>}

                {this.props.client.email && <Menu.Item name='spam' active={activeItem === 'following'} onClick={this.handleItemClick}>
                  <Label>51</Label>
                  Following
                </Menu.Item>}

                {this.props.client.email && <Menu.Item name='updates' active={activeItem === 'followers'} onClick={this.handleItemClick}>
                  <Label>1</Label>
                  Followers
                </Menu.Item>}

                <Menu.Item name='home' as={Link} to='/Dashboard'>
                  <Icon name='home' />
                  Home
                </Menu.Item>
                {!this.props.client.email && <Menu.Item name='Login' as={Link} to='/Login'>
                  <Icon name='sign in' />
                  Login
                </Menu.Item>}
                {this.props.client.email && <Menu.Item name='Logout' as={Link} to='/Logout'>
                  <Icon name='log out' />
                  Logout
                </Menu.Item>}
                <Menu.Item name='camera'>
                  <Icon name='camera' />
                  Channels
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher height="100%">
                <Segment basic>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/Login" component={Login} />
                  <Route path="/Recipe" component={RecipeView} />
                  <Route path="/Dashboard" component={Dashboard} />
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
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
