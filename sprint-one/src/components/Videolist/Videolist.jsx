import './Videolist.scss'


function Videolist (props) {


        return (
        <div className="videoList">
            <h5 className="videoList__header">NEXT VIDEO</h5>
            {props.list.map((video) => {
        return <div key = {video.id} onClick = {() => props.clickHandler(video.id)} className="videoList-inner">
                    <div className="videoList-wrapper" ><img className="videoList__thumbnail" src ={video.image}></img></div>
                    <div className="videoList-inner-block">
                        <h4 className="videoList-inner-block__title">{video.title} &nbsp;&nbsp;</h4>
                        <p className="videoList-inner-block__channel">{video.channel}</p>
                </div>
            </div>
            })}
        </div>
        
        )
        
}

export default Videolist
