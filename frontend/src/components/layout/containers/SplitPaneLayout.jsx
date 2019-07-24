import React from 'react';

export default class SplitPaneLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var class_name_row = "row"
    var class_name_container = "container"

    if(this.props.isFullScreen) {class_name_row += " full-screen"}
    if(this.props.isFullScreen) {class_name_container += " full-screen"}

    return (
      <div className={class_name_container}>
       <div className={class_name_row}>
        <div className="one-half column">
          {this.props.left}
        </div>
        <div className="one-half column">
          {this.props.right}
        </div>
       </div>
      </div>
    );
  }

}