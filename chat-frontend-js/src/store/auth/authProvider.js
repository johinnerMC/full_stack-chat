import { useSelector } from "react-redux";
import { fetchSinToken } from "../../helpers/fetch";
import { checkingCredentials, login, logout, verificationFailure } from "./authSlice"


export const authenticationWithEmailAndPassword = ({name, email, password}) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );

        const resp = await fetchSinToken('login/new', {name, email, password}, 'POST');
        console.log(resp)
        if( !resp.ok ){
            return dispatch( verificationFailure(resp.msg) )
        }

        localStorage.setItem('token', resp.token);

        const {uid} = resp.usuario;
        dispatch( login({name, uid, email}) )
    }
}

export const logInAuthentication = ({ email, password }) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );

        const resp = await fetchSinToken('login', { email, password}, 'POST');

        if( !resp.ok ){
            return dispatch( verificationFailure(resp.msg) )
        }

        localStorage.setItem('token', resp.token);

        const {name, uid} = resp.usuario;
        dispatch( login({name, uid, email}) )
    }
}