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
      list: list,
      data: data,
      selectedData: data[0],
      selectedId: data[0].id,
    }

    componentDidMount() {
      console.log(`App called componentDidMount()`);
      const API_KEY = {
        "api_key": "a3bf9d6c-dda1-426c-91be-d5c011de60f8"
        }
      
    }
  
  
    defaultPrevent = (event) => {
      event.preventDefault()
    }
  
    render() {
  
      return (
        
        <div className="App">
          <Video content={this.state.selectedData} {...this.props.routeProps} data={this.state.data}/>
          <div className="halfPage">
            <div className="halfPage-left">
              <VideoInfo content={this.state.selectedData} />
              <Commentform defaultPrevent={this.defaultPrevent} />
              <Comments comments={this.state.selectedData.comments} />
            </div>
            <Videolist clickHandler={this.clickHandler} selectedId={this.state.selectedId} 
            list={this.state.list} {...this.props.routeProps}/>
          </div>
        </div>
      );
    }
  }
  
  export default Mainpage;
  