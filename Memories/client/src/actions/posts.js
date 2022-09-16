import * as api from '../api';
import {useDispatch} from 'react'

// Action creaters 
export const  getPosts = () =>  async (dispatch) => {
    try{

        const {data} = await api.fetchPosts();
        const action =  {
            type:'Fecth_ALL',
            payload:data
        }
        dispatch(action);
    }catch(err){
        console.log("Error " , err);
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        const {data} = await api.createPost(post);
        const action =  {
            type:'CREATE',
            payload:data
        }
        dispatch(action);
        
    }catch(error){
        console.log(error);
    }
}

