import react from 'react';
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js';
import Image from './images/memories.png'
import './App.css'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {getPosts} from './actions/posts.js' 
function App() {
  const dispatch = useDispatch();

  useEffect(function(){
    dispatch(getPosts());
  },[dispatch])
  
  return (
    <div className='container'>

      <div className='header'>
        <h1 className='heading'>
          Memories
        </h1>
        <img src={Image} className="logo"></img>
      </div>

      <div className='bottom'>
        <div className='left'>
            <Posts/>
        </div>
        <div className='right'>
            <Form/>
        </div>
      </div>




    </div>
  )
}

export default App