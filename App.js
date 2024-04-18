import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Cube from "./screen/Cube";
import Home from "./screen/home";
import Sphere from "./screen/Sphere";
import Pyramide from "./screen/Pyramide";
import CustomShapeScene from "./screen/CustomShapeScene";


export default function App() {
  const [numPage, setNumPage] = useState(5);
  const [isAnimation, setIsAnimation] = useState(false);

  if (numPage == 1) {
    return <Home setNumPage={setNumPage} />;
  }
  return (
    <View style={{ flex: 1 }}>
      {numPage == 2 ? (
        <Cube />
      ) : numPage == 3 ? (
        <Sphere />
      ) : numPage == 4 ? (
        <Pyramide />
      ) : (
        <CustomShapeScene />
      )}
      <TouchableOpacity
        style={styles.buttonReturn}
        onPress={() => setNumPage(1)}
      >
        <Text style={styles.textButton}>&lt; Return</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsAnimation(!isAnimation)}
      >
        <Text style={styles.textButton}>
          {isAnimation ? "Stop Animation" : "Start Animation"}
        </Text>
      </TouchableOpacity>
      <View style={{position: 'absolute', top: 80, right: 10}}>
        {numPage !== 2 && <TouchableOpacity style={{marginVertical: 5}} onPress={()=> setNumPage(2)}>
          <Text style={[styles.textButton, {width:150}]}>Cube</Text>
        </TouchableOpacity>}
        {numPage !== 3 && <TouchableOpacity style={{marginVertical: 5}} onPress={()=> setNumPage(3)}>
          <Text style={[styles.textButton, {width:150}]}>Sphere</Text>
        </TouchableOpacity>}
        {numPage !== 4 && <TouchableOpacity style={{marginVertical: 5}} onPress={()=> setNumPage(4)}>
          <Text style={[styles.textButton, {width:150}]}>Pyramid</Text>
        </TouchableOpacity>}
        {numPage !== 5 && <TouchableOpacity style={{marginVertical: 5}}  onPress={()=> setNumPage(5)}>
          <Text style={[styles.textButton, {width:150}]}>Custom Shape</Text>
        </TouchableOpacity>}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 25,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  textButton: {
    textAlign: "center",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "maroon",
    borderRadius: 10,
  },
  buttonReturn: {
    position: "absolute",
    top: 30,
    left: 10,
  },
});
