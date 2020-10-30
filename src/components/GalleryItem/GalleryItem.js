import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    return (
      <img
        className="galleryImg"
        src={this.props.item.path}
        alt={this.props.item.description}
      />
    );
  }
}

export default GalleryItem;
