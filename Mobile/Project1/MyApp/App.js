import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  let x = 1;
  // x.toString();
  let imgUrl = "https://picsum.photos/200/300";
  const testFunc = ()=> {
    x = x + 100;
    console.log(x);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={testFunc}>lorem</Text>
      <Image source={{
        width:200,
        height:300,
        uri: imgUrl,
        }}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f8',
    justifyContent: "center",
    alignItems: "center"
  },
});
