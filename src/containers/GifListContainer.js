import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  render() {
    return <div>
        < GifList gifs={this.state.gifs}/>
        < GifSearch fetchGifs={this.fetchGifs()}/>
    </div>;
  }

  fetchGifs = (query = 'monkeys') => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then((data) => {
        //   this.setState(gifs:)
        console.log(data)
      })
  }

  componentDidMount() {
      this.fetchGifs();
  }
}
