import { StyleSheet } from "react-native";
import { theme } from "../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundBase,
  },
  circle: {
    color: theme.colors.circle,
    width: 56,
    height: 56,
    borderRadius: 50,
  },
});
