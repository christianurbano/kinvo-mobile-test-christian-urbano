import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
 
export default function StocksItem({name, ticker, profitability}){
    return(
        <View style={styles.container}>
            <Text style={styles.nome}>{name}</Text>
            <Text>{ticker}</Text>
            <Text>{profitability}</Text>
        </View>
    )
}