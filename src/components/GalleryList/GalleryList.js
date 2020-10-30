import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    const galleryList = this.props.gallery.map(function (item) {
      return (
        <img
          className="galleryImg"
          key={item.id}
          src={item.path}
          alt={item.description}
        />
      );
    });

    return <div className="galleryContainer">{galleryList}</div>;
  }
}

export default GalleryList;
