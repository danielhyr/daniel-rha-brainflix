import './App.scss';
import Header from './components/Header/Header'
import Video from './components/Video/Video'
import Commentform from './components/Commentform/Commentform'
import Comments from './components/Comments/Comments'
import Videolist from './components/Videolist/Videolist'

import data from "./data/video-details.json"
import list from "./data/videos.json"

import {Component} from 'react'



class App extends Component{

  state = {
    data: data,
    selectedData: data[0],
    selectedId: data[0].id,
    list: list
  }

clickHandler = (id) => {
console.log(id)
const newSelection = this.state.data.find(entry => entry.id === id)
this.setState({selectedData: newSelection, list: list.filter(video => video.id !== id)})

// To remove the original three comments after reload
  // let removerVar = document.querySelectorAll(".commentsLoaded")
  // removerVar.forEach((event) => event.remove())
}

render () {
  return (
    <div className="App">
      <Header />
      <Video  content ={this.state.selectedData}/>
      <Commentform />
      <Comments  comments={this.state.selectedData.comments}/>
    <Videolist clickHandler={this.clickHandler} selectedId={this.state.selectedId} list={this.state.list}/>
    </div>
  );

}

}

export default App;
{console.log(list)}
{console.log(data)}




