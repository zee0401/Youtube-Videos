import React from "react";
import SearchBar from "./components/SearchBar";
import youtubeapi from "./apis/youtubeapi";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import TitleBar from "./components/TitleBar";

import "./components/VideoItem.css";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("cars");
  }

  onTermSubmit = async (term) => {
    const response = await youtubeapi.get("/search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: "AIzaSyCosmAnIVK7Ubvl-GcJQS9ECHW5h_UDbtc",
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="box">
        <div className="ui container">
          <div
            className="ui center aligned grid"
            style={{ padding : "25px", color: "#04278b" }}
          >
            <TitleBar />
          </div>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetails video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
