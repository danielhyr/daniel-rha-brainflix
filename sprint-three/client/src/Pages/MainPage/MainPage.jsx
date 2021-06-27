import Video from '../../components/Video/Video'
import VideoInfo from '../../components/VideoInfo/VideoInfo'
import Comments from '../../components/Comments/Comments'
import Videolist from '../../components/Videolist/Videolist'
import './MainPage.scss'

import axios from 'axios'
import { API_URL } from '../../utils/api'
import { Component } from 'react'







class MainPage extends Component {

  state = {
    selectedData: null,
    currentId: null,
    currentPath: null,
    data: null,
    selectedId: null,
    comments: null,
  }

  // Three axios functions. The first one, axiosGet is nested inside the other two 
  axiosGet = (id) => {
    return axios.get(`${API_URL}videos/${id}/`).then(response => {
      this.setState({
        selectedData: response.data,
        comments: response.data.comments,
        currentId: this.props.match.params.id,
        currentPath: this.props.match.path,
      })
    }).catch(err => console.log(err))
  }

  axiosPost = (id, newComment) => {
    return axios.post(`${API_URL}videos/${id}/comments`, newComment).then(response => {
      this.axiosGet(id)
    }).catch(err => console.log("Error! it's about", err));
  };

  axiosDelete = (id, commentsId) => {
    return axios.delete(`${API_URL}videos/${id}/comments/${commentsId}`).then(response => {
      this.axiosGet(id)
    }).catch(err => console.log("Error! it's about", err));
  };


  // Click and Submit handlers which deal with viideo likes and posting/deletisng comments
  handleOnClick = (e) => {
    console.log(e.target.id)
    axios.put(`${API_URL}videos/${e.target.id}/likes`).then(response => {
      this.axiosGet(e.target.id)
    }).catch(err => console.log("Error! it's about", err));
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      "name": "Anonymous",
      "comment": event.target.comments.value
    };
    if (this.props.match.path === "/") {
      this.axiosPost(this.state.data[0].id, newComment);
      event.target.comments.value = ""
    }
    else {
      this.axiosPost(this.props.match.params.id, newComment);
      event.target.comments.value = ""
    };
  };


  handleOnDelete = (event) => {
    event.preventDefault();
    let commentsId = event.target.id;
    if (this.props.match.path === "/") {
      this.axiosDelete(this.state.data[0].id, commentsId);
    } else {
      this.axiosDelete(this.props.match.params.id, commentsId);
    };
  };



  // lifecycle methods

  componentDidMount() {
    axios.get(`${API_URL}videos/`).then(response => {
      if ((this.state.currentPath === null|| this.state.currentId === null) && this.props.match.path === "/") {
        this.axiosGet(response.data[0].id)

      } else {
        this.axiosGet(this.props.match.params.id)

      }
      this.setState({
        data: response.data,
        selectedId: this.props.match.params.id,
        currentId: this.props.match.params.id,
        currentPath: this.props.match.path,
      })

    }).catch(error => { console.log("ERROR! Third Axios Inside!", error) })

  }


  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params.id;
    const currentId = this.props.match.params.id;
    const currentPath = this.props.match.path;

    if (currentPath === "/" && currentId !== prevId) {
      this.axiosGet(this.state.data[0].id)
    }
    else
      if (currentId !== prevId) {
        this.axiosGet(currentId)
        console.log(this.state.selectedData.video)
      };

  }


  render() {
    if (this.state.data === null || this.state.selectedData === null || this.state.currentPath === null) {
      return <main className="load-screen">Loading...</main>
    };
    return (

      <div className="App">
        <Video content={this.state.selectedData.image} source = {this.state.selectedData.video}/>
        <div className="half-page">
          <div className="half-page-left">
            <VideoInfo content={this.state.selectedData} handleOnClick={this.handleOnClick} />
            <Comments selectedVideo={this.state.selectedData} {...this.props}
              vidArray={this.state.data}
              handleOnSubmit={this.handleOnSubmit}
              handleOnDelete={this.handleOnDelete}
              comments={this.state.comments} />
          </div>
          <Videolist list={this.state.data} {...this.props} />
        </div>
      </div>
    );
  }
}

export default MainPage;
