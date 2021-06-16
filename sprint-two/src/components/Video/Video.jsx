

import './Video.scss'



function Video(props) {
console.log(props.match.params.id)
const imageID = props.match.params.id
console.log(props.data)
const imageFound = props.data.find(video => video.id === imageID)

if (imageFound === undefined) {
    return   <div className="video">
        <div className="video-thumbWrapper">
        <video className="video__img" width="470" height="255"  poster={props.data[0].image}  controls></video>
    </div>
</div>
} else {
    return (

        <div className="video">
            <div className="video-thumbWrapper">
                <video className="video__img" width="470" height="255" poster={imageFound.image} controls></video>
            </div>
        </div>
    )
}
}

export default Video



