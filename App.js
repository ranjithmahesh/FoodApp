import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import StackNavigater from "./StackNavigater";
import Store from "./Store";

export default function App() {
  return (
    <>
      <Provider store={Store}>
        <StackNavigater />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#fff",
  },
});
