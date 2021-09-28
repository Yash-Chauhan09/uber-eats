import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HeaderButton = ({ text, active, setActive }) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: active === text ? "#000" : "#fff",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => setActive(text)}
    >
      <Text
        style={{
          color: active === text ? "#fff" : "#000",
          fontSize: 15,
          fontWeight: 900,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
export default function HeaderTab() {
  const [active, setActive] = useState("Delivery");
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <HeaderButton text="Delivery" active={active} setActive={setActive} />
      <HeaderButton text="Pickup" active={active} setActive={setActive} />
    </View>
  );
}
