import React from 'react'
import './Upload.scss'
import thumbnail from '../../assets/Images/Upload-video-preview.jpg'

function Upload(props) {

    function pushBack(event) {
        event.preventDefault()
        alert("Upload complete!")
        props.history.push('/')
    }

    return (

        <div className="upload">
            <h1 className="upload__header">Upload Video</h1>
            <div className="inner-load">

                <form className="form" onSubmit={pushBack}>
                    <div className="form-one">

                        <div className="form-left">
                            <p className="form-left__description">VIDEO THUMBNAIL</p>
                            <div className="form-left-img-wrapper">
                                <img className="form-left__img" src={thumbnail} alt="the thumbnail of a bicycle view"/>
                            </div>
                        </div>
                        <div className="form-right">
                            <label htmlFor="title" className="form__label">TITLE YOUR VIDEO</label>
                            <input className="form__input" name="title" placeholder="Add a title to your video"></input>
                            <label htmlFor="description" className="form__label">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="form__text-area" name="description" placeholder="Add a description of your video"
                            ></textarea>
                        </div>
                    </div>
                    <div className="btns">
                        <button className="btns__publish" type="submit">PUBLISH</button>
                        <button className="btns__cancel" onClick={(e) => e.preventDefault()}>CANCEL</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Upload
