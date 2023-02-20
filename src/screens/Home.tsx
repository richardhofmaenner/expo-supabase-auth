import { View, StyleSheet } from "react-native";
import { Layout, Text } from "react-native-rapi-ui";

export default function Home() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
