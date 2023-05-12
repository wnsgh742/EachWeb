import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { auth, db } from "../firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";

const Contianer = styled.View``;
const Titlte = styled.Text``;
const MainProfileTextInputView = styled.View`
    margin-left: 40px;
    justify-content: center;
`;
const MainProfileTextInput = styled.TextInput`
    font-size: 16px;
    margin-bottom: 5px;
`;
const MainProfileText = styled.Text`
    font-size: 16px;
    margin-bottom: 5px;
`;
const MainProfileButtonView= styled.View`
    flex-direction: row;
`;
const MainProfileButton = styled.Button`
    
`;
const Profile = ()=>{
    const UID = auth.currentUser.uid;
    const [nickName, setNickName] = useState("");
    const [age, setAge] = useState("");
    const [job, setJob] = useState("");
    const [region, setRegion] = useState("");
    const [profileData, setProfileData] = useState();
   /* const SaveProfile = ()=>{
      
        firestore().collection("Profile").doc(UID).set({
            id:UID,
           nickname: nickName,
           age: age,
            job: job,
           region: region,
           date:Date.now(),
        })
       
        getProfile();
        console.log("Sucess");  
    }*/
    const Save = async()=>{
        try {
          
              await addDoc(collection(db,"Profile"),{
               id:UID,
               nickname: nickName,
               age: age,
                job: job,
               region: region,
               date:Date.now(),
             });
            get();
            console.log("Sucess");  
           } catch (err) {
            console.log(err);
            }
           }
    
    const get = async()=>{
        try{
            let b = [];
            const userInfo = collection(db,"Profile");
           const userIdQuery = query(userInfo, where("id", "==", UID));
           const userQuerySnapshot = await getDocs(userIdQuery);
           userQuerySnapshot.forEach((doc)=>{
            b.push({...doc.data()})  
            setProfileData(b[0]);
           })
        }
        catch(e){
            console.log(e);
        }
    }
  /*  const getProfile = ()=>{
        let b = []
         firestore().collection("Profile").where("id","==",UID)
         .onSnapshot((snapshot)=>{
             snapshot.docs
             .forEach((doc)=>b.push({...doc.data()}));
           
            setProfileData(b[0]);
         })
        
     } */
     useEffect(()=>{
        get();
    
    },[])
    return( 
        <Contianer>
            <Titlte>Profile</Titlte>
            <MainProfileTextInputView>
                <MainProfileTextInput 
                    value={nickName}
                    onChangeText={(text)=>setNickName(text)}
                    placeholder="NickName"
                />
                <MainProfileTextInput 
                     value={age}
                     onChangeText={(text)=>setAge(text)}
                     placeholder="age"
                />
                <MainProfileTextInput 
                     value={job}
                     onChangeText={(text)=>setJob(text)}
                     placeholder="job"
                />
                <MainProfileTextInput 
                    value={region}
                    onChangeText={(text)=>setRegion(text)}
                    placeholder="Region"

                />
            </MainProfileTextInputView>
            <MainProfileButtonView>
            <MainProfileButton title="확인" color="black" onPress={Save}/>
            <MainProfileButton title="수정" color="black" />
            </MainProfileButtonView>
            </Contianer>
    )
}

export default Profile;