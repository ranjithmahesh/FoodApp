import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

import { useState } from "react";

const ReseravationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState([]);

  const [selectedDate, setSelectedDate] = useState("");

  const datea = [
    {
      id: "0",
      name: "26 Tue",
    },
    {
      id: "1",
      name: "27 Wed",
    },
    {
      id: "2",
      name: "28 Thu",
    },
    {
      id: "3",
      name: "29 Fri",
    },
    {
      id: "4",
      name: "30 Sat",
    },
  ];

  const times = [
    {
      id: "0",
      time: "12:00 PM",
    },
    {
      id: "1",
      time: "1:00 PM",
    },
    {
      id: "2",
      time: "2:01 PM",
    },
    {
      id: "3",
      time: "3:00 PM",
    },
    {
      id: "4",
      time: "4:00 PM",
    },
  ];

  return (
    <>
      <SafeAreaView>
        <View
          style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons
            name="arrow-back"
            size={30}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 3 }}>
              Book the table
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "400",
                color: "gray",
                marginHorizontal: 10,
              }}
            >
              {route.params.name},{route.params.adress}
            </Text>
          </View>
        </View>
        {/* ///////////////////// */}

        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginHorizontal: 10,
            marginTop: 30,
          }}
        >
          When are you visiting?
        </Text>
        <View
          style={{
            backgroundColor: "white",
            marginTop: 20,
            marginHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          {/* ///////////// */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginHorizontal: 10,
            }}
          >
            Select Data
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {datea.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => setSelectedDate(item.name)}
                style={
                  selectedDate.includes(item.name)
                    ? {
                        margin: 10,
                        borderRadius: 7,
                        padding: 15,
                        backgroundColor: "green",
                        borderWidth: 0.7,
                      }
                    : {
                        margin: 10,
                        borderRadius: 7,
                        padding: 15,
                        borderColor: "gray",
                        borderWidth: 0.7,
                      }
                }
              >
                <Text
                  style={
                    selectedDate.includes(item.name)
                      ? {
                          color: "white",
                          fontWeight: "600",
                        }
                      : {}
                  }
                >
                  {item.name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: "white",
            marginTop: 20,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginHorizontal: 10,
              marginTop: 10,
            }}
          >
            Select Time
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {times.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => setSelectedTime(item.time)}
                style={
                  selectedTime.includes(item.time)
                    ? {
                        margin: 10,
                        borderRadius: 7,
                        padding: 15,
                        backgroundColor: "green",
                        borderWidth: 0.7,
                      }
                    : {
                        margin: 10,
                        borderRadius: 7,
                        padding: 15,
                        borderColor: "gray",
                        borderWidth: 0.7,
                      }
                }
              >
                <Text
                  style={
                    selectedTime.includes(item.time)
                      ? {
                          color: "white",
                          fontWeight: "600",
                        }
                      : {}
                  }
                >
                  {item.time}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        {selectedDate && selectedTime ? (
          <Pressable
            onPress={() =>
              navigation.navigate("Review", {
                name: route.params.name,
                pickUpDate: selectedDate,
                selectedTime: selectedTime,
                adress: route.params.adress,
              })
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
              marginTop: "100%",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
              Proceed
            </Text>
          </Pressable>
        ) : null}
      </SafeAreaView>
    </>
  );
};

export default ReseravationScreen;
