import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import SelectedVidDetail from "./SelectedVidDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("fail army");
  }
  onTermSubmit = async (term) => {
    const response = youtube.get("/search", {
      params: {
        q: term,
      },
    });

    //console.log(response);
    this.setState({
      videos: (await response).data.items,
      selectedVideo: (await response).data.items[0],
    });
  };
  onVideoClick = (videoDetail) => {
    //console.log("from tha app!", videoDetail);
    this.setState({ selectedVideo: videoDetail });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <SelectedVidDetail videoDetail={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoClick={this.onVideoClick}
                vid={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
