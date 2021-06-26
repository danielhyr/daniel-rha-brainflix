import './App.scss';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header'
import MainPage from './components/Pages/MainPage/MainPage'
import UploadPage from './components/Pages/UploadPage/UploadPage';
import { Component } from 'react'



class App extends Component {


  defaultPrevent = (event) => {
    event.preventDefault();
  }


  render() {

    return (
      <BrowserRouter>
        <Header defaultPrevent={this.defaultPrevent} />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/upload" component={UploadPage} />
          <Route path="/videos/:id" component={MainPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;






