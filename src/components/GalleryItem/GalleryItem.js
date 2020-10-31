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
        <div>
          <img
            className="galleryImg"
            src={this.props.item.path}
            alt={this.props.item.description}
            onClick={this.handleImgClick}
          />
          <button>Like</button>
          <p>{this.props.item.likes} people have liked this!</p>
        </div>
      );
    } else {
      return (
        <div className="galleryDescription" onClick={this.handleImgClick}>
          <p>{this.props.item.description}</p>
          <button>Like</button>
        </div>
      );
    }
  }
}

export default GalleryItem;
