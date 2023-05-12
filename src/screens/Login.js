import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import styled from "styled-components/native";

const Contianer = styled.View``;
const Title = styled.Text``;
const Google = styled.TouchableOpacity`
    border-radius: 3px;
    border: 3px;
    width: 130px;
    align-items: center;
    background-color: beige;
`;
const GoogleText = styled.Text``;
const Login = ()=>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleLogin = ()=>{
        signInWithPopup(auth,provider).then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        });  
        }
    return(
        <Contianer>
            <Title>Login</Title>
            <Google onPress={googleLogin}>
                <GoogleText>Google Login</GoogleText>
            </Google>
        </Contianer>
    )
}
export default Login;