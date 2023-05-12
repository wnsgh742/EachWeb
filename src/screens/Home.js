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
const HistoryView = styled.TouchableOpacity`
    background-color:black;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border-radius: 15px;
    width: 250px;
    height: 60px;
`;
const HistoryText = styled.Text`
      font-size: 30px;
    color: white;
    border-color: black;
`;
const ProfileView = styled.TouchableOpacity`
    background-color:black;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border-radius: 15px;
    width: 250px;
    height: 60px;
`;
const ProfileText = styled.Text`
      font-size: 30px;
    color: white;
    border-color: black;
`;

const Home = ({navigation:{navigate}})=>{
    
   
    return(
        <Contianer>
           
            <QRgenerator onPress={()=>navigate("QRgenerator")}>
                <QRgeneratorText>QR생성하기</QRgeneratorText>
            </QRgenerator>
            <QRscanner onPress={()=>navigate("QRscanner")}>
                <QRscannerText>QR스캔하기</QRscannerText>
            </QRscanner>
            <HistoryView onPress={()=>navigate("History")}>
                <HistoryText>History</HistoryText>
            </HistoryView>
            <ProfileView onPress={()=>navigate("Profile")}>
                <ProfileText>Profile</ProfileText>
            </ProfileView>
        </Contianer>
    )
}
export default Home;