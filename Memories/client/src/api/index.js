// How we can connect backend and frontend each other 

// import Post from '../components/Posts/Post/Post';

// We will do api calls 
// 1.) Api Call Vaya Fetch 
// 2.) Api Call vaya axios 

// Fetch -> Fetch is a part of a javascript window object methode Fetch Api 

// It allows to fetch data from api asyncronousy without installuung any additional lobraries 


// // Get request Throgh Fetch 
// fetch(url)
// .then(fucntion(res){
//     // Handle response
// }).catch(err){
//     // handle error 
// }

// Post request Throgh Fetch 
// fetch(url , {
// method:Post,
// headers:{
//     'Contect-type':'application/json'
// },
// body:JSON.stringify(data)
// });
// .then(fucntion(res){
//     // Handle response
// }).catch(err){
//     // handle error 
// }

// Response formats 
// Response.jSON()
// Response.text()
// Response.BLOB()
// Response.FORMData()
// Response.ARRAYBUFFER()



// Axios 

// Axios is a javascript library for making http request from Nodejs or XMLH or Borwser 





const axios = require('axios');

const url = 'posts/';

export const fetchPosts = function(){
    axios.get(url);
}

export const createPost = (newPost) => axios.post(`${url}/create` , newPost);