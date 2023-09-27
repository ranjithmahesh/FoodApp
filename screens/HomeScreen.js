import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import hotels from "../data/hotels";
import MenuItem from "../components/MenuItem";

const HomeScreen = () => {
  const data = hotels;
  return (
    <ScrollView >
      {/* Search bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderBlockColor: "#C0C0C0",
          borderRadius: 7,
        }}
      >
        <TextInput
          placeholder="search for Restaurant items or more"
          style={{ fontSize: 17 }}
        />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>
      {/* Image Carousel */}
      <Carousel />

      {/* Food Types */}
      <FoodTypes />
      {/* Quick Food  component*/}
      <QuickFood />

      {/* Filter Button */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            width: 120,
          }}
        >
          <Text style={{ marginRight: 6 }}>Filter</Text>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            width: 120,
          }}
        >
          <Text>Sort By Rating</Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text>Sort By Price</Text>
        </Pressable>
      </View>

      {/* Hotels map */}
      {data.map((item, i) => (
        <MenuItem key={i} item={item} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
