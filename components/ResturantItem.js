import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const ResturantImage = () => (
  <>
    <Image
      style={{ width: "100%", height: 180 }}
      source="https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg"
    />
    <TouchableOpacity style={{ position: "absolute", top: 20, right: 30 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);
const ResturantInfo = () => (
  <View
    style={{
      height: 25,
      backgroundColor: "#eee",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 25,
    }}
  >
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontWeight: 800, fontSize: 15 }}>Biryani House</Text>
      <Text style={{ fontWeight: 400, fontSize: 13 }}>35min * 45min</Text>
    </View>
    <View
      style={{
        width: 25,
        height: 25,
        borderRadius: "50%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: 700, fontSize: 15 }}>4</Text>
    </View>
  </View>
);
export default function ResturantItem() {
  return (
    <View style={{ marginVertical: 20 }}>
      <ResturantImage />
      <ResturantInfo />
    </View>
  );
}
