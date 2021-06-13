import './Comments.scss'

    function Comments (props) {
      let  dateGet =(dateVar) =>{
           return  ('0' + (dateVar.getMonth()+1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
         }
            return (
                <>
            {props.comments.map((comment) => {
               return (<div key = {comment.id} className="commentsLoaded" >
                       <div className="commentsLoaded-top">
                       <div className="commentsLoaded-top__circle"></div>
                       <p className="commentsLoaded-top__account">{comment.name}</p>
                       <p className="commentsLoaded-top__date">{dateGet(new Date(Number(comment.timestamp)))}</p>
                   </div>
                   <p className="commentsLoaded__bottom">{comment.comment}</p>
               </div>)
            })}
            </>
           )
       }

export default Comments
