import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    const galleryList = this.props.gallery.map((item, index) => {
      return (
        <GalleryItem
          key={index}
          item={item}
          getGallery={this.props.getGallery}
        />
      );
    });

    return <div className="galleryContainer">{galleryList}</div>;
  }
}

export default GalleryList;
