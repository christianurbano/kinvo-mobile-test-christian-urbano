import React from "react";
import { Text, View } from "react-native";

export default function PensionItem({name}){
  return (
    <View>
      <Text>{name}</Text>      
    </View>
  )
}