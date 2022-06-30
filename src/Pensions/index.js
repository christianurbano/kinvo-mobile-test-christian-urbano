import React, { useState, useEffect } from "react";
import {View, FlatList} from "react-native";
import api from "../services/api";
import  PensionItem  from "../components/PensionItem";

const PensionScreen = () =>{
  const [pension, setPension] = useState([]);

  useEffect(() => {
    const fatchPensions = async() => {
      try {
        const response = await api.get('pension');
        setPension(response.data.data)
      }catch (erro){
        console.error(erro)
      }
    }
    fatchPensions();
  }, [])  

  return(
    <View>
      <FlatList 
        data= {pension}
        keyExtractor = {(item) => item.id}
        renderItem= {({item}) => <PensionItem name={item.name}/>}
      />
    </View>
  );
}

export default PensionScreen;