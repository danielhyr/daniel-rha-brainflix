import Commentform from '../Commentform/Commentform'
import Comment from '../Comments/Comments'
import Videolist from  '../Videolist/Videolist'
import {Component} from 'react'

import './Video.scss'



class Video extends Component {

    dateGet = (dateVar) =>{
        return  ('0' + (dateVar.getMonth()+1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
    }

    render () {
    return (
        <div className="video">
            <img className="video__img" src = {this.props.content.image}></img>
                <div className="info">
                    <h1 className="info__title">{this.props.content.title}</h1>
                    <div className="info-divider">
                    <div className="info__user"><p>By {this.props.content.channel}</p><p>{this.dateGet(new Date(Number(this.props.content.timestamp)))}</p></div>
                    <div className="info__social"><p>{this.props.content.views}</p><p>{this.props.content.likes}</p></div>
                </div>
         <p className="video__description">{this.props.content.description}
        </p>
        <h4 className="info__commentsnum">3 Comments</h4>

    </div> 
       
</div>
        

    )
}
}




export default Video


