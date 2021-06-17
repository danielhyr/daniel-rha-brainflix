

import './Video.scss'


function Video(props) {

    return (

        <div className="video">
            <div className="video-thumbWrapper">
                <video className="video__img" width="470" height="255" poster={props.content.image} controls></video>
            </div>
        </div>
    )

}


export default Video



