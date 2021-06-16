import './App.scss';
import { BrowserRouter, Route, Switch, Redirect, Router } from 'react-router-dom';
import Header from './components/Header/Header'
import Video from './components/Video/Video'
import VideoInfo from './components/VideoInfo/VideoInfo'
import Commentform from './components/Commentform/Commentform'
import Comments from './components/Comments/Comments'
import Videolist from './components/Videolist/Videolist'
import MainPage from './components/MainPage/MainPage'
import Upload from './components/Upload/Upload';
import Error from './components/Error'
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




    componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`App called componentDidMount()`);
    console.log(` passed prevProps: ${JSON.stringify(prevProps)}, prevState: ${JSON.stringify(prevState)}, snapshot: ${JSON.stringify(snapshot)}`);
  }

  render() {

    return (
      <BrowserRouter>
          <Header defaultPrevent={this.defaultPrevent} />
        <Switch>
          <Route exact path="/" render={(routeProps) => {return <MainPage routeProps={routeProps}/>}}/>
        
          <Route exact path="/upload" component = {Upload}/>
          <Route path="/:id" render={(routeProps) => {return <MainPage routeProps={routeProps}/> }} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;






