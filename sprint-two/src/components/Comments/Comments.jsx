import './Comments.scss'
import { Component } from 'react'
import { API_KEY, API_URL } from '../../utils/api'

import axios from 'axios'

class Comments extends Component {

    state = {
        comments: this.props.selectedVideo.comments
    }

    // axios functions

    axiosGet = (id) => {
        return axios.get(`${API_URL}videos/${id}/?api_key=${API_KEY}`).then(response => {
            this.setState({
                comments: response.data.comments
            })
        }).catch(err => console.log(err))
    }

    axiosPost = (id, newComment) => {
        return axios.post(`${API_URL}videos/${id}/comments?api_key=${API_KEY}`, newComment).then(response => {
            this.axiosGet(id)
        }).catch(err => console.log("Error! it's about", err))
    }

    axiosDelete = (id, commentsId) => {
        return axios.delete(`${API_URL}videos/${id}/comments/${commentsId}?api_key=${API_KEY}`).then(response => {
            this.axiosGet(id)
        }).catch(err => console.log("Error! it's about", err))
    }


    // event handler functions
    submitHandler = (event) => {
        event.preventDefault()
        const newComment = {
            "name": "Anonymous",
            "comment": event.target.comments.value
        }
        if (this.props.match.path === "/") {
            this.axiosPost(this.props.vidArray[0].id, newComment)
            event.target.comments.value = ""
        }
        else {
            this.axiosPost(this.props.match.params.id, newComment)
            event.target.comments.value = ""
        }
    }


    deleteHandler = (event) => {
        event.preventDefault()
        let commentsId = event.target.id
        if (this.props.match.path === "/") {
            this.axiosDelete(this.props.vidArray[0].id, commentsId)
        } else {
            this.axiosDelete(this.props.match.params.id, commentsId)
        }
    }

    noDeleteHandler = (event) => {
        event.preventDefault()
        alert("You cannot delete this comment")
    }

    // Lifecycle Function
    componentDidUpdate(prevProps) {

        if (this.props.match.path === "/" && prevProps.match.params.id !== this.props.match.params.id) {
            this.axiosGet(this.props.vidArray[0].id)
        }

        if (prevProps.match.params.id !== this.props.match.params.id && this.props.match.path !== "/") {
            this.axiosGet(this.props.match.params.id)

        }
    }


    // Util functions
    dateGet = (dateVar) => {
        return ('0' + (dateVar.getMonth() + 1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
    }

    getStamp = (timestamp) => {
        const msPerSec = 1000
        const msPerMin = msPerSec * 60
        const msPerHr = msPerMin * 60
        const msPerDay = msPerHr * 24

        const currentTime = Date.now()
        const timeElapsed = currentTime - timestamp

        if (timeElapsed < msPerMin) {
            return Math.round(timeElapsed / msPerSec) + ' seconds ago'
        } else if (timeElapsed < msPerHr) {
            return Math.round(timeElapsed / msPerMin) + ' minutes ago'
        } else if (timeElapsed < msPerDay) {
            return Math.round(timeElapsed / msPerHr) + ' Hours ago'
        } else {
            return Math.round(timeElapsed / msPerDay) + ' days ago'
        }

    }

    // function to create form

    createForm = (className, comment, behaviour) => {
        return (<form id={comment.id} key={comment.id} className="commentsLoaded" onSubmit={this.deleteHandler}>
            <div className="commentsLoaded-top">
                <div className={className}></div>
                <p className="commentsLoaded-top__account">{comment.name}</p>
                <p className="commentsLoaded-top__date">{this.dateGet(new Date(Number(comment.timestamp)))}</p>
                <p className="commentsLoaded-top__stamp">{this.getStamp(comment.timestamp)}</p>
            </div>
            <div className="commentsLoaded-bottom">
                <p className="commentsLoaded-bottom__comment">{comment.comment}</p>
                <button className="commentsLoaded__delete" onClick = {behaviour} >DEL</button>
            </div>
        </form>)
    }


    render() {
        return (

            <div className="commentsAll">
                <h4 className="commentsAll__commentsnum">{this.state.comments.length} Comments</h4>

                <form className="comments" onSubmit={this.submitHandler}>
                    <div className="comments__mohan"></div>
                    <label className="comments__label" htmlFor="text">JOIN THE CONVERSATION</label>
                    <textarea className="comments__input" id="text" placeholder="Write comment here" name="comments" required></textarea>
                    <button className="comments__button">COMMENT</button>
                </form>

                {this.state.comments.sort((a, b) => {
                    return b.timestamp - a.timestamp
                }).map((comment) => {

                    if (comment.name !== "Anonymous") {
                        return this.createForm("commentsLoaded-top__circle", comment, this.noDeleteHandler)
                    }
                    else {

                        return this.createForm("commentsLoaded-top__circle-mohan", comment)

                    }
                })}
            </div>

        )
    }
}




export default Comments