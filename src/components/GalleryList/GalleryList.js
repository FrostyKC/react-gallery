import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    const galleryList = this.props.gallery.map(function (item, index) {
      return <GalleryItem key={index} item={item} />;
    });

    return <div className="galleryContainer">{galleryList}</div>;
  }
}

export default GalleryList;
