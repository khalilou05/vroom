import { View, Text, Button, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { NavigationContext } from "navigation-react";
import { useContext } from "react";
const Detail = () => {
  const { stateNavigator } = useContext(NavigationContext);

  return (
    <SafeAreaView style={{ backgroundColor: "lightpink", flex: 1 }}>
      <View>
        <Text>Detail</Text>
        <Button
          title="go Home"
          onPress={() => {
            stateNavigator.navigate("home", { size: "khalil" });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Detail;
