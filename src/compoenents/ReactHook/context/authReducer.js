export default function functionauthReducer (state, action){
    console.log(state, action)
    switch (action.type){
        case "PERFORM_LOGIN":
            state = {
                ...state,
                login: action.login
            }
            break;
        case "PERFORM_LOGOUT":
            state = {
                ...state,
                login: action.login
            }
            break;
        default:
    }
    return state;
}