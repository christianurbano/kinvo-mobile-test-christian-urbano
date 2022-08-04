import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";

import api from "../services/api";

import StocksItem from "../components/StocksItem";
import { styles } from "./styles";
import { sortAlphabetically, sortStocks } from "../util/functions";

const Stocks = () => {
  const [stocks, setStocks] = useState([]);

  const onFavorited = (isFavorited, item) => {
    const updatedStocks = stocks.map((stock) => {
      if (stock.id === item.id) {
        return {
          ...stock,
          favorited: isFavorited,
        };
      }
      return stock;
    });
    const orderedStocks = sortStocks(sortAlphabetically(updatedStocks));

    setStocks(orderedStocks);
  };

  useEffect(() => {
    const fatchStocks = async () => {
      try {
        const response = await api.get("stocks");

        const orderedStocks = sortAlphabetically(response.data.data).map(
          (stock) => {
            return {
              ...stock,
              favorited: false,
            };
          }
        );
        setStocks(orderedStocks);
      } catch (err) {
        console.log(erro);
      }
    };
    fatchStocks();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={stocks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <StocksItem item={item} onFavorited={onFavorited} />
        )}
      />
    </View>
  );
};
export default Stocks;
