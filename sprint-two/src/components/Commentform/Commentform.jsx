import './Commentform.scss'
import {Component} from 'react'
import { API_KEY, API_URL } from '../../utils/api'

import axios from 'axios'

class Commentform extends Component {


submitHandler = (event) => {
        event.preventDefault()
        console.log(this.props)
        let currentId = this.props.content.id
        console.log(event.target.comments.value)
        const newComment = {
            "name" : "Random User",
            "comment" : event.target.comments.value
        }

        axios.post(`${API_URL}videos/${currentId}/comments?api_key=${API_KEY}`, newComment).then(response => {
            console.log(response)
        }).catch(err => console.log("Error! it's about", err))
       
    }

    render() {
    return (
        <form className="comments" onSubmit={this.submitHandler}>
            <div className="comments__mohan"></div>
            <label className="comments__label" htmlFor="text">JOIN THE CONVERSATION</label>
            <textarea className="comments__input" id="text" placeholder="Write comment here" name="comments" required></textarea>
            <button className="comments__button">COMMENT</button>
        </form>

    )
}
}




export default Commentform