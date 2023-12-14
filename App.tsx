import React from "react";
import { StateNavigator } from "navigation";
import { NavigationHandler } from "navigation-react";
import { NavigationStack, Scene } from "navigation-react-native";
import Detail from "./components/Detail";
import Home from "./components/Home";

const stateNavigator = new StateNavigator([
  { key: "home" },
  { key: "detail", trackCrumbTrail: true },
]);
const App = () => (
  <NavigationHandler stateNavigator={stateNavigator}>
    <NavigationStack unmountStyle={(from) => (from ? "slide_in" : "slide_out")}>
      <Scene stateKey="home">
        <Home />
      </Scene>
      <Scene stateKey="detail">
        <Detail />
      </Scene>
    </NavigationStack>
  </NavigationHandler>
);

export default App;
