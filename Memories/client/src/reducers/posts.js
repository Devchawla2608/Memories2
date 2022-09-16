const initialState = [];
export const reducer = function( posts = initialState, action){

    if(action.type === 'FETCH_ALL'){
        return action.payload
    }else if(action.type === "CREATE"){
        return [...posts , action.payload]
    }else{
        return posts;
    }
}