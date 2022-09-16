import React from "react";
import { useSelector } from 'react-redux';
import Post from './Post/Post'

function Posts() {

  const posts = useSelector(function (state) {
    return state.posts;
  })
  // if(posts.length!=0){
  //   const newArray = posts.map(function (post) {
  //     <div>
  //       <Post
  //         post={post}
  //       />
  //     </div>
  //   })
  // }
  return (
    <div>
         {/* {newArray} */}
    </div>
  )
}

export default Posts


