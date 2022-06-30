import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "../Button/styles";

const ButtonMenu = (props) => {
  const { onPress, title, icon } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <View style={styles.circle}>
          <View style={styles.logo} resizeMode="contain">
            {icon}
          </View>
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}></Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonMenu;
