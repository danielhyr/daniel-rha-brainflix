import './Comments.scss'
import { Component } from 'react'

class Comments extends Component {


    blockOnDelete = (event) => {
        event.preventDefault();
        alert("You cannot delete this comment");
    };


    // Util functions
    dateGet = (dateVar) => {
        return ('0' + (dateVar.getMonth() + 1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear();
    };

    // Dynamix timestamp
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

    };

    // function to create form

    createForm = (className, comment, behaviour) => {
        return (<form id={comment.id} key={comment.id} className="commentsLoaded" onSubmit={this.props.handleOnDelete}>
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
    };


    render() {
        return (

            <div className="commentsAll">
                <h4 className="commentsAll__commentsnum">{this.props.comments.length} Comments</h4>

                <form className="comments" onSubmit={this.props.handleOnSubmit}>
                    <div className="comments__mohan"></div>
                    <label className="comments__label" htmlFor="text">JOIN THE CONVERSATION</label>
                    <textarea className="comments__input" id="text" placeholder="Write comment here" name="comments" required></textarea>
                    <button className="comments__button">COMMENT</button>
                </form>

                {this.props.comments.sort((a, b) => {
                    return b.timestamp - a.timestamp
                }).map((comment) => {

                    if (comment.name !== "Anonymous") {
                        return this.createForm("commentsLoaded-top__circle", comment, this.blockOnDelete)
                    }
                    else {

                        return this.createForm("commentsLoaded-top__circle-mohan", comment)

                    }
                })}
            </div>

        );
    }
};




export default Comments