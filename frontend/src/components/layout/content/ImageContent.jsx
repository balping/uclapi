import React from 'react';

export default class ImageContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var class_name = "image-holder";

    if(this.props.isVerticalAlign) { class_name += " center-y"; }
    if(this.props.isHorizontalAlign) { class_name += " center-x"; }
    if(this.props.isFullScreen) { class_name += " full-screen"; }

    return (
      <div className={class_name}>
      	<img src={this.props.src}></img>
      </div>
    );
  }

}
