import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../Assets/images/shopping-bag.png"),
    title: "Pick-up",
  },
  {
    image: require("../Assets/images/fast-food.png"),
    title: "Fast-food",
  },
  {
    image: require("../Assets/images/soft-drink.png"),
    title: "Soft-Drink",
  },
  {
    image: require("../Assets/images/coffee.png"),
    title: "Coffee",
  },
  {
    image: require("../Assets/images/bread.png"),
    title: "Breads",
  },
  {
    image: require("../Assets/images/desserts.png"),
    title: "Desserts",
  },
  {
    image: require("../Assets/images/shopping-bag.png"),
    title: "Pick-up",
  },
  {
    image: require("../Assets/images/shopping-bag.png"),
    title: "Pick-up",
  },
  {
    image: require("../Assets/images/shopping-bag.png"),
    title: "Pick-up",
  },
];
export default function Categories() {
  return (
    <View
      style={{
        paddingVertical: 5,
        marginTop: 5,
        backgroundColor: "#fff",
        paddingLeft: 12,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => (
          <View style={{ marginRight: 30, alignItems: "center" }}>
            <Image
              style={{ width: 50, height: 40, resizeMode: "contain" }}
              source={item.image}
            />
            <Text style={{ fontSize: 13, fontWeight: 700 }}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
