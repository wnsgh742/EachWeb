import React from "react";
import styled from "styled-components/native";

const Contianer = styled.View``;
const Title = styled.Text``;
const QRgenerator = styled.TouchableOpacity`
    background-color: black;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border-radius: 15px;
    width: 250px;
    height: 60px;
`;
const QRgeneratorText = styled.Text`
    font-size: 30px;
    color: white;
    border-color: black;
    
    
`;
const QRscanner = styled.TouchableOpacity`
    background-color:black;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border-radius: 15px;
    width: 250px;
    height: 60px;
`;
const QRscannerText = styled.Text`
      font-size: 30px;
    color: white;
    border-color: black;
`;

const Home = ({navigation:{navigate}})=>{

   
    return(
        <Contianer>
            <Title>Home</Title>
            <QRgenerator onPress={()=>navigate("QRgenerator")}>
                <QRgeneratorText>QR생성하기</QRgeneratorText>
            </QRgenerator>
            <QRscanner onPress={()=>navigate("QRscanner")}>
                <QRgeneratorText>QR스캔하기</QRgeneratorText>
            </QRscanner>
        </Contianer>
    )
}
export default Home;