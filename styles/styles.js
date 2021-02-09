import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 250,
    width: 250,
    marginBottom: 40,
  },
  inputView: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 45,
    width: "100%",
    backgroundColor: "black",
    color: "white",
    paddingStart: 25,
    paddingEnd: 25,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",
  },
  loginText: {
    color: "white",
  },
});

export default styles;
