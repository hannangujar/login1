import React, { Component } from 'react';

class MenuLink extends React.Component {
    render() {
      return(
        <span>{this.props.text} ---  {this.props.url}</span>
      )
    }
  }

  export default MenuLink;