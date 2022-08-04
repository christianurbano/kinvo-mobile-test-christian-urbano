import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./style";
import IconHeart from "../../../assets/Icon/heart.svg";
import IconHeartWhite from "../../../assets/Icon/heartwhite.svg";

const StocksItem = (props) => {
  const {
    item: { name, ticker, profitability, minimumValue, favorited },
    onFavorited,
  } = props;

  const onHeartClick = () => {
    onFavorited(!favorited, props.item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>{name}</Text>
        <TouchableOpacity onPress={onHeartClick} style={styles.heart}>
          {favorited ? <IconHeart /> : <IconHeartWhite />}
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{ticker}</Text>
      <View style={styles.line} />
      <View style={styles.row}>
        <Text style={styles.subTitle}>Valor mínimo:</Text>
        <Text style={styles.value}>R$ {minimumValue}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.subTitle}>Rentabilidade:</Text>
        <Text style={styles.titleProfitability}>{profitability}%</Text>
      </View>
    </View>
  );
};

export default StocksItem;
