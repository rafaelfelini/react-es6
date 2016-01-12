import React from 'react'

export default class Photo extends React.Component {

  render() {
    return <img alt={this.props.caption} src={this.props.src} />;
  }
  
}
