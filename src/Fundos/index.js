import React, { useState, useEffect } from "react";
import {View, Text, FlatList} from "react-native";
import api from "../services/api";
import FundsItem from "../components/FundsItem";

const FundsScreen = () =>{
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const response = await api.get('funds');
        setFunds(response.data.data)
      } catch(e) {
        console.log(e)
      }
    }    
    fetchFunds();
  }, [])
  
  return(
    <View>
      <FlatList
        data={funds}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <FundsItem name={item.name} type={item.type}/>}
      />
    </View>
  );
}
export default FundsScreen;