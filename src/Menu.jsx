import React, { Component } from 'react';
import MenuLink from './MenuLink'
class Menu extends React.Component {
    render() {
      return(
          <div>
              <h3>{this.props.label}</h3>
              <ol>
                  <li><MenuLink text='Home' url='google.com' /></li>
                  <li><MenuLink text='About us' /></li>
                  <li><MenuLink text='Products' /></li>
              </ol>
          </div>
        
      )
    }
  }

  export default Menu;