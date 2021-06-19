import Video from '../Video/Video'
import VideoInfo from '../VideoInfo/VideoInfo'
import Commentform from '../Commentform/Commentform'
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

  componentDidMount() {
    console.log(`App called componentDidMount()`);

    axios.get(`${API_URL}videos/?api_key=${API_KEY}`).then(response => {

      const currentId = this.props.routeProps.match.params.id
      const currentPath = this.props.routeProps.match.path

      if (currentPath === "/") {
        axios.get(`${API_URL}videos/${response.data[0].id}?api_key=${API_KEY}`).then(response => {
          this.setState({ selectedData: response.data, })
        }).catch(error => { console.log("ERROR! First Axios inside", error) })
      } else {
        axios.get(`${API_URL}videos/${currentId}?api_key=${API_KEY}`).then(response => {
          this.setState({ selectedData: response.data, })
        }).catch(error => { console.log("ERROR! Second Axios inside", error) })
      }

      this.setState({
        data: response.data,
        selectedId: response.data[0].id,

      })
    }).catch(error => { console.log("ERROR! Third Axios Inside!", error) })

  }


  componentDidUpdate(prevProps) {
    const prevId = prevProps.routeProps.match.params.id
    const currentId = this.props.routeProps.match.params.id
    const currentPath = this.props.routeProps.match.path

    if (currentPath === "/home" && currentId !== prevId) {

      axios.get(`${API_URL}videos/${this.state.data[0].id}?api_key=${API_KEY}`).then(response => {
        this.setState({ selectedData: response.data })
      }).catch(error => { console.log("ERROR! from First internal Axios!", error) })
    }
    else
      if (currentId !== prevId) {

        axios.get(`${API_URL}videos/${currentId}?api_key=${API_KEY}`).then(response => {
          this.setState({
            selectedData: response.data,

          })
        }).catch(error => { console.log("ERROR! from Second internal Axios!", error) })
      }

  }


  render() {
    if (this.state.data === null || this.state.selectedData === null) {
      return <main className="load-screen">Loading...</main>
    }
    return (

      <div className="App">
        <Video content={this.state.selectedData} {...this.props.routeProps} data={this.state.data} />
        <div className="halfPage">
          <div className="halfPage-left">
            <VideoInfo content={this.state.selectedData} {...this.props.routeProps} />
            <Commentform content={this.state.selectedData} {...this.props.routeProps} />
            <Comments comments={this.state.selectedData.comments}  {...this.props.routeProps} />
          </div>
          <Videolist selectedId={this.state.selectedId}
            list={this.state.data} {...this.props.routeProps} />
        </div>
      </div>
    );
  }
}

export default Mainpage;
