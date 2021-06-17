import Video from '../Video/Video'
import VideoInfo from '../VideoInfo/VideoInfo'
import Commentform from '../Commentform/Commentform'
import Comments from '../Comments/Comments'
import Videolist from '../Videolist/Videolist'
import './MainPage.scss'

import axios from 'axios'

import { Component } from 'react'


const API_KEY = {
  "api_key": "a3bf9d6c-dda1-426c-91be-d5c011de60f8"
}
const API_URL = {
  "api_url": "https://project-2-api.herokuapp.com/"
}




class Mainpage extends Component {

  state = {
    selectedData: null,
    data: null,
    selectedId: null,
  }

componentDidMount() {
    console.log(`App called componentDidMount()`);

    axios.get(`${API_URL.api_url}videos/?api_key=${API_KEY.api_key}`).then(response => {
      const currentId = this.props.routeProps.match.params.id
      const currentPath = this.props.routeProps.match.path

      if (currentPath === "/") {

        axios.get(`${API_URL.api_url}videos/${response.data[0].id}?api_key=${API_KEY.api_key}`).then(response => {
          this.setState({ selectedData: response.data, })
        }).catch(error => { console.log("ERROR! First Axios inside", error) })

      } else {
        axios.get(`${API_URL.api_url}videos/${currentId}?api_key=${API_KEY.api_key}`).then(response => {
          this.setState({ selectedData: response.data, })
        }).catch(error => { console.log("ERROR! Second Axios inside", error) })
      }

      this.setState({
        data: response.data,
        selectedId: response.data[0].id,
      })
    }).catch(error => { console.log("ERROR! Third Axios Inside!", error) })
    const currentId = this.props.routeProps.match.params.id


  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("componentDidUpdate Console")
      
      const prevId = prevProps.routeProps.match.params.id
      const currentId = this.props.routeProps.match.params.id
      const currentPath = this.props.routeProps.match.path

      if (currentPath === "/" && currentId !== prevId) {
        axios.get(`${API_URL.api_url}videos/${this.state.data[0].id}?api_key=${API_KEY.api_key}`).then(response => {
          this.setState({ selectedData: response.data, })
        }).catch(error => { console.log("ERROR! First Axios inside", error) })
      }
      else 
      if (currentId !== prevId) {
        axios.get(`${API_URL.api_url}videos/${currentId}?api_key=${API_KEY.api_key}`).then(response => {
          this.setState({
            selectedData: response.data,

          })
        }).catch(error => { console.log("ERROR! second Axios inside!", error) })
      }

  }


  defaultPrevent = (event) => {
    event.preventDefault()
  }

  render() {
    if (this.state.data === null || this.state.selectedData === null) {
      return <main>Loading...</main>
    }
    return (

      <div className="App">
        <Video content={this.state.selectedData} {...this.props.routeProps} data={this.state.data} />
        <div className="halfPage">
          <div className="halfPage-left">
            <VideoInfo content={this.state.selectedData} {...this.props.routeProps} />
            <Commentform defaultPrevent={this.defaultPrevent} />
            <Comments comments={this.state.selectedData.comments} />
          </div>
          <Videolist selectedId={this.state.selectedId}
            list={this.state.data} {...this.props.routeProps} />
        </div>
      </div>
    );
  }
}

export default Mainpage;
