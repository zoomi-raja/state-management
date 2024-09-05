export default function authReducer (state, action){
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