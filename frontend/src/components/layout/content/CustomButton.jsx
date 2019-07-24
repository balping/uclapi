import React from 'react';

export default class CustomButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
		<a class="button button-primary" href={this.props.link}>{this.props.text}</a>
    );
  }

}