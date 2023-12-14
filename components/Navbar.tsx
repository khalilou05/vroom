import { View, Text, ScrollView } from "react-native";
import React from "react";
import { TabBar, TabBarItem } from "navigation-react-native";

export default function Navbar() {
  return (
    <TabBar primary={false}>
      <TabBarItem title="Personal">
        <ScrollView />
      </TabBarItem>
      <TabBarItem title="Work">
        <ScrollView />
      </TabBarItem>
    </TabBar>
  );
}
