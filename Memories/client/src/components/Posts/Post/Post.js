import React from "react";
import '../../../App.css'



function Post({post}) {
  const newArray = post.tags.map(function(post){
    return <h1>#{post}</h1>
  })
  return (
    <div className="post">
      <img/>
      <div>
        <h1>{post.creator}</h1>
        <h1>{post.createdAt}</h1>
      </div>
      <div>
        <button onClick = {function(){

        }}>

        </button>
      </div>
      <div>
        <h1>{newArray}</h1>
      </div>
      <h1>{post.message}</h1>
      <button onClick={function(){
        
      }}>
        <i class="fa-solid fa-delete-right"></i>
        <h1>{post.likeCount}</h1>
      </button>
      <button onClick={function(){
        
      }}>
        <i class="fa-solid fa-heart"></i>
        Delete 
      </button>
    </div>
  )
}

export default Post