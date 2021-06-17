import './Videolist.scss'
import { Link } from 'react-router-dom'

function Videolist({list, match}) {
    const selectId = match.params.id

    let filterVid = list.filter(video => video.id !== selectId)

    if (match.path === "/home") {
        filterVid = list.filter(video => video.id !== list[0].id)
    }
    return (
        <div className="videoList">
            <h5 className="videoList__header">NEXT VIDEO</h5>
            {filterVid.map((video) => {

                return <div key={video.id} className="videoList-inner">
                    <Link to={`/videos/${video.id}`} >
                        <div className="videoList-wrapper" ><img className="videoList__thumbnail" src={video.image} alt="images as thumbnails for the videos"></img></div>
                    </Link>
                    <div className="videoList-inner-block">
                        <h4 className="videoList-inner-block__title">{video.title} &nbsp;&nbsp;</h4>
                        <p className="videoList-inner-block__channel">{video.channel}</p>
                    </div>
                </div>
            }
            )}
        </div>

    )

}


export default Videolist


