import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'
import Video from './components/Video/Video'
import VideoInfo from './components/VideoInfo/VideoInfo'
import Commentform from './components/Commentform/Commentform'
import Comments from './components/Comments/Comments'
import Videolist from './components/Videolist/Videolist'
import MainPage from './components/MainPage/MainPage'
import Upload from './components/Upload/Upload';


import { Component } from 'react'



class App extends Component {

  render() {

    return (
      <BrowserRouter>
          <Header defaultPrevent={this.defaultPrevent} />
        <Switch>
          <Route exact path="/" component = {MainPage} />
          <Route exact path="/upload" component = {Upload}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;







