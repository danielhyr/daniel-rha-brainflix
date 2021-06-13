
import Viewicon from '../../assets/Icons/Icon-views.svg'
import Likeicon from '../../assets/Icons/Icon-likes.svg'

import {Component} from 'react'

import './Video.scss'



function Video (props) {

    // dateGet = (dateVar) =>{
    //     return  ('0' + (dateVar.getMonth()+1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
    // }

 
    return (
   
        <div className="video">
            <div className="video-thumbWrapper">
            <video className="video__img" width="470" height="255" poster={props.content.image} controls></video>
                </div>
                {/* <div className="info">
                    <h1 className="info__title">{this.props.content.title}</h1>
                    <div className="info-divider">
                    <div className="info-user">
                        <p className="info-user__data">By {this.props.content.channel}</p>
                        <p className="info-user__dataTwo">{this.dateGet(new Date(Number(this.props.content.timestamp)))}</p></div>
                        <div className="info-social">
                            <p className="info-social__viewcount">
                            <img className="info-social__viewIcon" src = {Viewicon} alt = "The View count icon">
                            </img>{this.props.content.views}</p>
                            
                            <p className="info-social__likecount">
                            <img className="info-social__likeIcon" src = {Likeicon} alt = "The Like count icon">
                            </img>{this.props.content.likes}</p>
                        </div>
                    </div>
                <p className="video__description">{this.props.content.description}
                </p>
            <h4 className="info__commentsnum">3 Comments</h4>
        </div>  */}
       
</div>

        

    )
}





export default Video



