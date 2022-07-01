import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import icon from "../../../assets/Icon/heart.svg";

export default function StocksItem({
  name,
  ticker,
  profitability,
  minimumValue,
}) {
  // [like.setLike] = useState({ icon });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
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
}
