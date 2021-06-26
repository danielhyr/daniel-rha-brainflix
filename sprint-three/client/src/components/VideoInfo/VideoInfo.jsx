import Viewicon from '../../assets/Icons/Icon-views.svg'
import Likeicon from '../../assets/Icons/Icon-likes.svg'
import { API_URL } from '../../utils/api'

import './VideoInfo.scss'
import axios from 'axios';

function VideoInfo({content, handleOnClick}) {


    const dateGet = (dateVar) => {
        return ('0' + (dateVar.getMonth() + 1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
    };

    return (
        <div className="info">
            <h1 className="info__title">{content.title}</h1>
            <div className="info-divider">
                <div className="info-user">
                    <p className="info-user__data">By {content.channel}</p>
                    <p className="info-user__data-two">{dateGet(new Date(Number(content.timestamp)))}</p></div>
                <div className="info-social">
                    <p className="info-social__viewcount">
                        <img className="info-social__view-icon" src={Viewicon} alt="The View count icon"/>
                        {content.views}</p>
                    <p  className="info-social__likecount" onClick={handleOnClick}>
                        <img id = {content.id} className="info-social__like-icon" src={Likeicon} alt="The Like count icon"/>
                        {content.likes}</p>
                </div>
            </div>
            <p className="info__description">{content.description}
            </p>
        </div>
    )
};

export default VideoInfo