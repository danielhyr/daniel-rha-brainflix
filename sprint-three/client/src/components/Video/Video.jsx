

import './Video.scss'
import {v4 as uuid} from 'uuid'

function Video(props) {

    return (
// Used uuid here to keep refreshing video after user selects a different video initially, but opted for props.id to keep it from refreshing every time the user likes the video
        <div key = {props.id} className="video">
            <div className="video-thumbWrapper">
                <video className="video__img" width="470" height="255" src = {props.source} poster={props.content}  controls/>
            </div>
        </div>
    )

};


export default Video



