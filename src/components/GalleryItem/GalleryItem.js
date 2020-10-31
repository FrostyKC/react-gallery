import React, { Component } from 'react';
import axios from 'axios';

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

  changeLikes = () => {
    this.updateLikes();
  };

  updateLikes() {
    axios({
      method: 'PUT',
      url: '/gallery/like/' + this.props.item.id,
    })
      .then((response) => {
        this.props.getGallery();
      })
      .catch((err) => {
        console.log(err);
        alert('error updating likes');
      });
  }

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
          <button onClick={this.changeLikes}>Like</button>
          <p>{this.props.item.likes} people have liked this!</p>
        </div>
      );
    } else {
      return (
        <div className="galleryDescription" onClick={this.handleImgClick}>
          <p>{this.props.item.description}</p>
          <button onClick={this.changeLikes}>Like</button>
        </div>
      );
    }
  }
}

export default GalleryItem;
