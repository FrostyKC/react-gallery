import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    gallery: [],
    errorMsg: null,
  };

  componentDidMount() {
    this.getGallery();
  }

  getGallery() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        // {
        //   data: []
        // }
        console.log(response);
        this.setState({
          gallery: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: 'Something went terribly wrong.',
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList gallery={this.state.gallery} />
      </div>
    );
  }
}

export default App;
