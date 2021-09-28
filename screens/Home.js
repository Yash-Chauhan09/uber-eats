import React from "react";
import { View, Text, SafeAreaView, Platform } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" || "windows" ? 25 : 0,
        backgroundColor: "#eee",
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  );
}
