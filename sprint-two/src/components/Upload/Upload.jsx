import React from 'react'
import './Upload.scss'
import thumbnail from '../../assets/Images/Upload-video-preview.jpg'

function Upload() {
    return (
        <div className="upload">
            <h1 className="upload__header">Upload Video</h1>
            <div className="innerLoad">
                <div className="innerLoad-left">
                    <p className="innerLoad-left__description">VIDEO THUMBNAIL</p>
                    <div className="innerLoad-left-imgWrapper">
                        <img className="innerLoad-left__img" src={thumbnail}></img>
                    </div>
                </div>
                <form className="form">
                    <label htmlFor="title" className="form__label">TITLE YOUR VIDEO</label>
                    <input className="form__input" name="title" placeholder="Add a title to your video"></input>
                    <label htmlFor="description" className="form__label">ADD A VIDEO DESCRIPTION</label>
                    <textarea className="form__textArea" name="description" placeholder="Add a description of your video"
                    ></textarea>
                    <div className="btns">
                        <button className="btns__publish">PUBLISH</button>
                        <button className="btns__cancel">CANCEL</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Upload
