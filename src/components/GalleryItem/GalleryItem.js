import React, { Component } from 'react';

class GalleryItem extends Component {
  state = {
    isClicked: false,
  };

  handleImgClick = (event) => {
    if (!this.state.isClicked) {
      this.setState({
        isClicked: true,
      });
    } else {
      this.setState({
        isClicked: false,
      });
    }
  };

  render() {
    if (!this.state.isClicked) {
      return (
        <img
          className="galleryImg"
          src={this.props.item.path}
          alt={this.props.item.description}
          onClick={this.handleImgClick}
        />
      );
    } else {
      return (
        <div className="galleryDescription" onClick={this.handleImgClick}>
          <p>{this.props.item.description}</p>
        </div>
      );
    }
  }
}

export default GalleryItem;
