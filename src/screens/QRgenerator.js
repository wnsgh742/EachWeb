import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import QRCode from "react-qr-code";
import { auth } from "../firebaseConfig";
const Contianer = styled.View``;
const Titlte = styled.Text``;
const QRView = styled.View`
    height: auto;
    max-width: 64;
    width: 50%;

`;


const QRgenerator = ()=>{
    const idid = {
       
    }
    const UID = auth.currentUser.uid;
    const [id,setId]= useState();
    const url = "https://mugphone.netlify.app/";
    const naver = "https://www.google.com/";
    const logi = "Home";
    useEffect(()=>{
        console.log(id);
    },[])
    return( 
        <Contianer>
            <Titlte>QRgenerator</Titlte>
            <QRView>
            <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%", marginLeft:"20px" }}
                    value={`${url}${logi}`}
                    
                    viewBox={`0 0 256 256`}
                    
                    />
            </QRView>
            </Contianer>
    )
}
export default QRgenerator;