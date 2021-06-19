import Video from '../Video/Video'
import VideoInfo from '../VideoInfo/VideoInfo'
import Comments from '../Comments/Comments'
import Videolist from '../Videolist/Videolist'
import './MainPage.scss'

import axios from 'axios'
import { API_KEY, API_URL } from '../../utils/api'
import { Component } from 'react'







class Mainpage extends Component {

  state = {
    selectedData: null,
    data: null,
    selectedId: null,
  }

   currentId = this.props.match.params.id
   currentPath = this.props.match.path

  innerAxiosGet = (id) => {
    return axios.get(`${API_URL}videos/${id}/?api_key=${API_KEY}`).then(response => {
      this.setState({
        selectedData: response.data
      })
    }).catch(err => console.log(err))
  }

  // lifecycle methods

  componentDidMount() {
    axios.get(`${API_URL}videos/?api_key=${API_KEY}`).then(response => {

      if (this.currentPath === "/") {
        this.innerAxiosGet(response.data[0].id)
      } else {
        this.innerAxiosGet(this.currentId)
      }
      this.setState({
        data: response.data,
        selectedId: response.data[0].id,
      })
    }).catch(error => { console.log("ERROR! Third Axios Inside!", error) })

  }


  componentDidUpdate(prevProps) {

    const prevId = prevProps.match.params.id
    const currentId = this.props.match.params.id
    const currentPath = this.props.match.path

    if (currentPath === "/" && currentId !== prevId) {
      this.innerAxiosGet(this.state.data[0].id)
    }
    else
      if (currentId !== prevId) {
        this.innerAxiosGet(currentId)
      }

  }


  render() {
    if (this.state.data === null || this.state.selectedData === null) {
      return <main className="load-screen">Loading...</main>
    }
    return (

      <div className="App">
        <Video content={this.state.selectedData.image}/>
        <div className="half-page">
          <div className="half-page-left">
            <VideoInfo content={this.state.selectedData}/>
            <Comments selectedVideo={this.state.selectedData} {...this.props} vidArray={this.state.data} />
          </div>
          <Videolist list={this.state.data} {...this.props} />
        </div>
      </div>
    );
  }
}

export default Mainpage;
