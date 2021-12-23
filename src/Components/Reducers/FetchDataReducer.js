export const FetchDataReducer =(state=[] , action) =>{
    switch(action.type){
        case "GET_FETCH_DATA":
            return action.payload;
        default :
            return state;
    }
}