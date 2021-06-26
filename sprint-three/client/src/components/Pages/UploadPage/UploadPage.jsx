import React from 'react'
import './UploadPage.scss'
import thumbnail from '../../../assets/Images/Upload-video-preview.jpg'
import axios from 'axios'
import { API_URL } from '../../../utils/api'

function UploadPage(props) {


    function axiosPost ( newComment) {
        return axios.post(`${API_URL}videos`, newComment).then(response => {
            console.log(response)
        }).catch(err => console.log("Error! it's about", err));
    };

    function handleOnSubmit(event) {
        event.preventDefault();
        alert("Upload complete!");
        const newVideo = {
            "title": event.target.title.value,
            "description": event.target.description.value
        }

        axiosPost(newVideo)

        console.log(newVideo)
        

        props.history.push('/');
    };

    

    function handleOnCancel(event) {
        event.preventDefault();
        alert("Cancel Upload!");
        props.history.push('/');
    };

    return (

        <div className="upload">
            <h1 className="upload__header">Upload Video</h1>
            <div className="inner-load">

                <form className="form" onSubmit={handleOnSubmit}>
                    <div className="form-one">

                        <div className="form-left">
                            <p className="form-left__description">VIDEO THUMBNAIL</p>
                            <div className="form-left-img-wrapper">
                                <img className="form-left__img" src={thumbnail} alt="the thumbnail of a bicycle view"/>
                            </div>
                        </div>
                        <div className="form-right">
                            <label htmlFor="title" className="form__label">TITLE YOUR VIDEO</label>
                            <input className="form__input" name="title" placeholder="Add a title to your video" required></input>
                            <label htmlFor="description" className="form__label">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="form__text-area" name="description" placeholder="Add a description of your video"
                            required></textarea>
                        </div>
                    </div>
                    <div className="btns">
                        <button className="btns__publish" type="submit">PUBLISH</button>
                        <button className="btns__cancel" >CANCEL</button>
                    </div>

                </form>
            </div>
        </div>
    )
};

export default UploadPage
