import React, {useState, useEffect} from "react";
import { View, FlatList } from "react-native";
import api from "../services/api";
import StocksItem from "../components/StocksItem";

const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  
  useEffect(() => { 
    const fatchStocks = async () => {
      try {
        const response = await api.get('stocks');
        //console.log(JSON.stringify(response.data,null,2))
        setStocks(response.data.data)
      }catch(err){
        console.log(erro)
      }
    }
    fatchStocks();
  }, [])
  

  return (
    <View>
      <FlatList
        data={stocks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <StocksItem name={item.name} ticker={item.ticker} profitability={item.profitability} />}
      />
    </View>
  );
};
export default Stocks;