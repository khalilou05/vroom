import { View, SafeAreaView, StyleSheet, Button, Text } from "react-native";
import React from "react";
import { NavigationContext } from "navigation-react";
import { useContext } from "react";

export default function Home() {
  const { stateNavigator } = useContext(NavigationContext);
  // const { data } = useContext(NavigationContext);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home</Text>
        <Button
          title="go to detail"
          onPress={() => {
            stateNavigator.navigate("detail");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
