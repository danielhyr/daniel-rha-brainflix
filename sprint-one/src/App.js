import './App.scss';
import Header from './components/Header/Header'
import Video from './components/Video/Video'
import VideoInfo from './components/VideoInfo/VideoInfo'
import Commentform from './components/Commentform/Commentform'
import Comments from './components/Comments/Comments'
import Videolist from './components/Videolist/Videolist'

import data from "./data/video-details.json"
import list from "./data/videos.json"

import { Component } from 'react'



class App extends Component {

  state = {
    list: list.filter(video => video.id !== data[0].id),
    data: data,
    selectedData: data[0],
    selectedId: data[0].id,
  }



  clickHandler = (id) => {
    const newSelection = this.state.data.find(entry => entry.id === id)
    this.setState({ selectedData: newSelection, list: list.filter(video => video.id !== id) })

  }

  defaultPrevent = (event) => {
    event.preventDefault()
  }

  render() {

    return (

      <div className="App">
        <Header defaultPrevent={this.defaultPrevent} />
        <Video content={this.state.selectedData} />
        <div className="halfPage">
          <div className="halfPage-left">
            <VideoInfo content={this.state.selectedData} />
            <Commentform defaultPrevent={this.defaultPrevent} />
            <Comments comments={this.state.selectedData.comments} />
          </div>
          <Videolist querySelector={this.ellipsisMake} clickHandler={this.clickHandler} selectedId={this.state.selectedId} list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;







