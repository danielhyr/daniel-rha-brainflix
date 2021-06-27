import './App.scss';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header'
import MainPage from './Pages/MainPage/MainPage'
import UploadPage from './Pages/UploadPage/UploadPage';



function App () {


  const defaultPrevent = (event) => {
    event.preventDefault();
  }


    return (
      <BrowserRouter>
        <Header defaultPrevent={defaultPrevent} />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/upload" component={UploadPage} />
          <Route path="/videos/:id" component={MainPage} />
        </Switch>
      </BrowserRouter>
    );
  }


export default App;






