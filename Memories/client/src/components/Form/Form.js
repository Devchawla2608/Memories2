import React from "react";
import{useState} from 'react';
import FileBase from 'react-file-base64'
import './FromStyle.css'
import {useDispatch} from 'react-redux';
import {createPost} from '../../actions/posts' 

function Form() {
  const dispatch = useDispatch();
  const [postData , setPostData] = useState({
    creator:' ',
    title:" ",
    message:" ",
    tage:" ",
    selectedFile:" ",
  })

  const clear = function(){

  }

  const handleSubmit = function(event){
    event.preventDefault()
    dispatch(createPost(postData));
  }
  
  const handleChange = function(event){
    setPostData({
      ...postData,
      [event.target.name] : [event.target.value]
    })
  }

  return (
    <div className="form__container">
      <form className="form">
        <input onChange={handleChange} name="creator" placeholder="Creator"/>
        <input onChange={handleChange} name="title" placeholder="Title"/>
        <input onChange={handleChange} name="message" placeholder=" Message"/>
        <input onChange={handleChange} name="tags" placeholder="Tags"/>
        <input onChange={handleChange} name="creator" placeholder="Creator"/>
        <div className="fileInput"> <FileBase
          type="file"
          multiple={false}
          onDone={({base64}) => setPostData({...postData , selectedFile:base64})}
        /></div>
        <button 
        onClick={handleSubmit}
        >Submit</button>
        <button>Clear</button>
      </form>
    </div>
  )
}

export default Form