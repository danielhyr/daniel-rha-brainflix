import './Commentform.scss'


function Commentform () {
    return (
        <form className="comments">
            
            {/* <img className = "comments__mohan" src = {Mohan} alt="circle mohan"></img> */}
            <div className = "comments__mohan"></div>
            <label className = "comments__label" htmlFor = "text">JOIN THE CONVERSATION</label>
            <textarea className="comments__input" id="text"placeholder="Write comment here"></textarea>
            <button className="comments__button">COMMENT</button>
        </form>

    )
}

export default Commentform