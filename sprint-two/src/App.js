import './App.scss';
import { BrowserRouter, Route, Switch, Redirect, Router } from 'react-router-dom';
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Upload from './components/Upload/Upload';
import { Component } from 'react'



class App extends Component {



  defaultPrevent = (event) => {
    event.preventDefault()
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






