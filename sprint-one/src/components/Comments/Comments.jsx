import './Comments.scss'
import {Component} from 'react'


    
    
     class Comments extends Component {

         dateGet =(dateVar) =>{
            return  ('0' + (dateVar.getMonth()+1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
          }

         render () {
             return (
                 <>
             {this.props.comments.map((comment) => {
                return (<div key = {comment.id} className="commentsLoaded" >
                        <div className="commentsLoaded-top">
                        <div className="commentsLoaded-top__circle"></div>
                        <p className="commentsLoaded-top__account">{comment.name}</p>
                        <p className="commentsLoaded-top__date">{this.dateGet(new Date(Number(comment.timestamp)))}</p>
                    </div>
                    <p className="commentsLoaded__bottom">{comment.comment}</p>
            </div>)
             })}
             </>
            )
        }
    }

        
//     class Comments extends Component {

//         dateGet =(dateVar) =>{
//            return  ('0' + (dateVar.getMonth()+1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
//          }

//         render () {
//             return (
               
//          <div key = {this.props.comment.id} className="commentsLoaded" >
//                        <div className="commentsLoaded-top">
//                        <div className="commentsLoaded-top__circle"></div>
//                        <p className="commentsLoaded-top__account">{this.props.comment.name}</p>
//                        <p className="commentsLoaded-top__date">{this.dateGet(new Date(Number(this.props.comment.timestamp)))}</p>
//                    </div>
//                    <p className="commentsLoaded__bottom">{this.props.comment.comment}</p>
//            </div>
            
       
//            )
       
//    }}

export default Comments
