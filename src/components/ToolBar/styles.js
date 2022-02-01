import { StyleSheet } from "react-native";
import Colors from "../../theme/Color";
import Dimensions from "../../theme/Dimension";
export const styles = StyleSheet.create({
  logo: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  toolbarTitle: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "700",

    marginRight: 20,
  },
  androidButtonText: {
    color: "blue",
    fontSize: Dimensions.headerText,
  },

  toolBar: {
    width: "100%",
    display: "flex",
    backgroundColor: Colors.colorPrimary,
    fontSize: Dimensions.headerText,
    height: Dimensions.headerheight,
    height: 70,
    marginBottom: 10,
    // flexDirection: "row",
    color: Colors.white,
    alignItems: "center",
  },
  title: {
    color: Colors.white,
    fontSize: Dimensions.title,
    fontWeight: "700",
    marginBottom: 16,
  },
  toggle: {
    padding: 10,
  },
});
