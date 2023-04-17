import React, { useState } from "react";
import styled from "styled-components/native";
import QRCode from "react-qr-code";
const Contianer = styled.View``;
const Titlte = styled.Text``;
const QRView = styled.View`
    height: auto;
    max-width: 64;
    width: 50%;

`;


const QRgenerator = ()=>{
    const [id,setId]= useState("va");
    return( 
        <Contianer>
            <Titlte>QRgenerator</Titlte>
            <QRView>
            <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value="id"
                    viewBox={`0 0 256 256`}
                    />
            </QRView>
            </Contianer>
    )
}
export default QRgenerator;