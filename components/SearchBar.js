import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "react-native-vector-icons";

export default function SearchBar() {
  return (
    <View style={{ marginTop: 8 }}>
      <GooglePlacesAutocomplete
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            marginTop: 3,
            outlineWidth: 0,
            fontWeight: "700",
          },
          textInputContainer: {
            borderRadius: 50,
            backgroundColor: "#eee",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: 9,
              borderRadius: 30,
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text style={{ fontWeight: 600 }}>Search</Text>
          </View>
        )}
        placeholder="Search"
      />
    </View>
  );
}
