export const CheckStatusReducer =(state=[] , action) =>{
    switch(action.type){
        case "GET_STATUS":
            return action.payload;
        default :
            return state;
    }
}