import React from 'react';

export default class Column extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      UNSET_ERROR_WIDTH: "0px"
    }
  }

  render() {
    var content_class_name = "content";
    var content_style = {};

    if(this.props.isCentered) {content_class_name += " center-x"; }
    if(this.props.isCenteredText) { content_class_name += " centered-text"; }
    if(this.props.isJustifiedText) { content_class_name += " justified-text"; }

    content_style['width'] = "90%";
    content_style['maxWidth'] = this.state.UNSET_ERROR_WIDTH;
    if(this.props.width) { content_style['maxWidth'] = this.props.width; }
    if(this.props.widthOverride) { content_style['width'] = this.props.widthOverride; }

    var isVerticalAlign = this.props.isVerticalAlign || this.props.isRelativeVerticalAlign;
    var vertical_align_style = [];
    if(this.props.isRelativeVerticalAlign) { vertical_align_style['position'] = "relative"; }

    return (
      <div style={ { width: "100%" } } >
        { isVerticalAlign ? (
          <div className="vertical-align-buddy" style={vertical_align_style}>
            <div className={ content_class_name } style={ content_style }>
              {this.props.children}
            </div>
          </div>
        ) : (
          <div className={ content_class_name } style={ content_style }>
            {this.props.children}
          </div>
        )}
      </div>
    )
  }

}