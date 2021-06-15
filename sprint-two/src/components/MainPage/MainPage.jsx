import Video from '../Video/Video'
import VideoInfo from '../VideoInfo/VideoInfo'
import Commentform from '../Commentform/Commentform'
import Comments from '../Comments/Comments'
import Videolist from '../Videolist/Videolist'
import './MainPage.scss'

import data from "../../data/video-details.json"
import list from "../../data/videos.json"

import { Component } from 'react'




class Mainpage extends Component {

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
  
  export default Mainpage;
  