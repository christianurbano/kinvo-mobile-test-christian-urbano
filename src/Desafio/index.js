import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

import ButtonMenu from "../components/Button";
import { styles } from "./styles";

import LogoStock from "../../assets/Icon/stack.svg";
import LogoFunds from "../../assets/Icon/funds.svg";
import LogoPension from "../../assets/Icon/pension.svg";

export default function Desafio() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ButtonMenu
        icon={<LogoStock />}
        title="Ações"
        onPress={() => navigation.navigate("Action")}
      />
      <ButtonMenu
        icon={<LogoFunds />}
        title="Fundos"
        onPress={() => navigation.navigate("Funds")}
      />
      <ButtonMenu
        icon={<LogoPension />}
        title="Previdências"
        onPress={() => navigation.navigate("Pensions")}
      />
    </View>
  );
}
