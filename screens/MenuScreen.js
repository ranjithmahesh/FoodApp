import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Modal from "react-native-modal";
import FoodItem from "../components/FoodItem";
import { useSelector } from "react-redux";
const MenuScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  const navigation = useNavigation();
  const [menu, setMenu] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const fetchMenu = () => {
      setMenu(route.params.menu);
    };

    fetchMenu();
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const route = useRoute();
  return (
    <>
      <ScrollView >
        <View
          style={{
            height: 300,
            backgroundColor: "#B0C4DE",
            borderBottomLeftRadius: 40,
            borderBottomRight: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Ionicons
              name="arrow-back"
              size={30}
              color="black"
              onPress={() => navigation.goBack()}
            />

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="search1" size={22} color="black" />
              <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 8 }}>
                search
              </Text>
            </View>
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
              }}
            >
              <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                {route.params.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <AntDesign
                  style={{ marginHorizontal: 7 }}
                  name="sharealt"
                  size={24}
                  color="black"
                />
                <AntDesign name="hearto" size={24} color="black" />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 7,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: 400 }}>
                {route.params.rating}
              </Text>
              <Text style={{ marginLeft: 3 }}>.</Text>
              <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: 400 }}>
                {route.params.time}mins
              </Text>
            </View>
            <Text style={{ marginTop: 8, color: "gray", fontSize: 17 }}>
              {route.params.cuisines}
            </Text>
            <View
              style={{
                fontWeight: "bold",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text>OutLet</Text>
              <Text
                style={{ marginLeft: 15, fontSize: 15, fontWeight: "bold" }}
              >
                {route.params.adress}
              </Text>
            </View>

            <View
              style={{
                fontWeight: "bold",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text>22mins</Text>
              <Text
                style={{ marginLeft: 15, fontSize: 14, fontWeight: "bold" }}
              >
                Home
              </Text>
            </View>
            <Text
              style={{
                borderColor: "gray",
                borderWidth: 0.6,
                height: 1,
                marginTop: 5,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <MaterialCommunityIcons name="bike-fast" size={24} color="gold" />
              <Text style={{ marginLeft: 7, color: "gray", fontSize: 16 }}>
                0-3 kms |
              </Text>
              <Text style={{ marginLeft: 7, color: "gray", fontSize: 16 }}>
                35 Delivery fee will apply
              </Text>
            </View>
          </View>
        </View>

        <Pressable
          onPress={() =>
            navigation.navigate("Booking", {
              name: route.params.name,
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
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            Book A Reservation
          </Text>
        </Pressable>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: "500",
            marginTop: 10,
          }}
        >
          MENU
        </Text>
        <Text
          style={{
            borderColor: "gray",
            borderWidth: 0.6,
            height: 1,
            marginTop: 5,
          }}
        />

        {route.params.menu.map((item, i) => (
          <FoodItem nbkey={i} item={item} />
        ))}
      </ScrollView>
      <Pressable
        onPress={toggleModal}
        style={{
          width: 60,
          height: 60,
          borderRadius: 40,
          justifyContent: "center",
          backgroundColor: "black",
          marginLeft: "auto",
          position: "absolute",
          bottom: 35,
          right: 25,
          alignContent: "center",
        }}
      >
        <MaterialIcons
          style={{ textAlign: "center" }}
          name="menu-book"
          size={24}
          color="white"
        />
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "500",
            fontSize: 12,
          }}
        >
          MENU
        </Text>
      </Pressable>
      <Modal isVisible={modalVisible} onBackdropPress={toggleModal}>
        <View
          style={{
            height: 190,
            width: 250,
            backgroundColor: "black",
            position: "absolute",
            bottom: 35,
            right: 10,
            borderRadius: 7,
          }}
        >
          {menu.map((item, i) => (
            <View
              key={i}
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 19 }}
              >
                {item.name}
              </Text>

              <Text
                style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 19 }}
              >
                {item.items.length}
              </Text>
            </View>
          ))}
        </View>
      </Modal>
      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#00A877",
            width: "90%",
            padding: 13,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 30,
            position: "absolute",
            left: 20,
            bottom: 10,
            borderRadius: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
              >
                {cart.length} items | ₹ {total}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginTop: 3,
                  color: "white",
                }}
              >
                Extra charges may Apply!
              </Text>
            </View>
            <Pressable
              onPress={() =>
                navigation.navigate("Cart", { name: route.params.name })
              }
            >
              <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
                View Cart
              </Text>
            </Pressable>
          </View>
        </Pressable>
      )}
    </>
  );
};

export default MenuScreen;
