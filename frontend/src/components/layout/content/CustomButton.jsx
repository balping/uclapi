import React from 'react';

export default class CustomButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	var class_name = "button button-primary";

  	if(this.props.isMarginRight) { class_name += " inline-button"}

    return (
		<a class={class_name} href={this.props.link}>{this.props.text}</a>
    );
  }

}