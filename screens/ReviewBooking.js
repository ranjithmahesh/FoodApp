import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

import { useState } from "react";

const ReviewBooking = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={{ marginTop: 30 }}>
        <View
          style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons
            name="arrow-back"
            size={30}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 3 }}>
            Review booking details
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            height: 210,
            marginHorizontal: 20,
            marginVertical: 5,
            padding: 10,
            borderRadius: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 10,
              marginRight: 40,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 19, fontWeight: "bold" }}>
              {route.params.pickUpDate} 2023
            </Text>

            <Text style={{ fontSize: 19, fontWeight: "bold" }}>
              {route.params.selectedTime}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 10,
              marginHorizontal: 10,
            }}
          >
            {route.params.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "gray",
              marginHorizontal: 10,
            }}
          >
            {route.params.adress}
          </Text>
          <View style={{ marginTop: 20, position: "relative" }}>
            <Text
              style={{
                fontSize: 8,
                fontWeight: "bold",
                color: "white",
                marginHorizontal: 10,
                backgroundColor: "green",
                width: 80,
                padding: 3,
                position: "absolute",
                top: -8,
                zIndex: 1,
                left: 10,
                borderRadius: 5,
              }}
            >
              OFFER FOR YOU
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",

                marginHorizontal: 10,
                borderWidth: 1,
                borderColor: "green",
                padding: 10,
                borderRadius: 10,
              }}
            >
              Flat 15% Offon Total Bill
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <Pressable
        onPress={() =>
          navigation.navigate("confirm")
        }
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          width: "90%",
          height: 55,
          borderRadius: 10,
          backgroundColor: "#00A877",
          padding: 14,
          marginTop: "115%",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
          Confirm Booking
        </Text>
      </Pressable>
    </>
  );
};

export default ReviewBooking;
