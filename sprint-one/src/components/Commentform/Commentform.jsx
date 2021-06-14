import './Commentform.scss'


function Commentform(props) {
    return (
        <form className="comments" onSubmit={props.defaultPrevent}>
            <div className="comments__mohan"></div>
            <label className="comments__label" htmlFor="text">JOIN THE CONVERSATION</label>
            <textarea className="comments__input" id="text" placeholder="Write comment here"></textarea>
            <button className="comments__button">COMMENT</button>
        </form>

    )
}

export default Commentform