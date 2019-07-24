import React from 'react';

export default class ImageContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var class_name = "text-holder";

    if(this.props.isVerticalAlign) { class_name += " center-y"; }
    if(this.props.isHorizontalAlign) { class_name += " center-x"; }
    if(this.props.isFullScreen) { class_name += " full-screen"; }

    return (
      <div className={class_name}>
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }

}
