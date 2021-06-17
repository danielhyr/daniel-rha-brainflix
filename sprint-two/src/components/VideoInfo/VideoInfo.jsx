import Viewicon from '../../assets/Icons/Icon-views.svg'
import Likeicon from '../../assets/Icons/Icon-likes.svg'

import './VideoInfo.scss'

function VideoInfo({content}) {


    const dateGet = (dateVar) => {
        return ('0' + (dateVar.getMonth() + 1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
    }


    return (
        <div className="info">
            <h1 className="info__title">{content.title}</h1>
            <div className="info-divider">
                <div className="info-user">
                    <p className="info-user__data">By {content.channel}</p>
                    <p className="info-user__dataTwo">{dateGet(new Date(Number(content.timestamp)))}</p></div>
                <div className="info-social">
                    <p className="info-social__viewcount">
                        <img className="info-social__viewIcon" src={Viewicon} alt="The View count icon">
                        </img>{content.views}</p>

                    <p className="info-social__likecount">
                        <img className="info-social__likeIcon" src={Likeicon} alt="The Like count icon">
                        </img>{content.likes}</p>
                </div>
            </div>
            <p className="info__description">{content.description}
            </p>
            <h4 className="info__commentsnum">3 Comments</h4>
        </div>
    )
}

export default VideoInfo