

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
        </div>
    )
}

export default Video



