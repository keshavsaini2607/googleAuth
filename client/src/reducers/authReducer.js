export const authReducer = (state=null, action) => {
    console.log("Auth Reducer", action.payload);
    switch(action.type){
        case "GET_USER":
            return action.payload || false
        default:
            return state    
    }
}