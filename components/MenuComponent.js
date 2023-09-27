import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartReducer";

const MenuComponent = ({ food }) => {
  const dispatch = useDispatch();
  const [addItems, setAddItems] = useState(0);
  const [selected, setSelected] = useState(false);
  return (
    <View>
      <Pressable
        style={{
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>{food.name}</Text>
          <Text>₹ {food.price}</Text>
          <Text style={{ matginTop: 5, borderRadius: 4 }}>
            {[0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome
                style={{ paddingHorizantal: 3 }}
                name={i < Math.floor(food.rating) ? "star" : "star-o"}
                size={15}
                color="#FFD700"
              />
            ))}
          </Text>
          <Text
            style={{ width: 180, marginTop: 8, color: "gray", fontSize: 15 }}
          >
            {food.description.length > 30
              ? food.description.substr(0, 35) + "..."
              : food.description}
          </Text>
        </View>

        <Pressable style={{ marginRight: 10 }}>
          <Image
            style={{ width: 120, height: 100, borderRadius: 8 }}
            source={{ uri: food.image }}
          />

          {selected ? (
            <Pressable
              style={{
                position: "absolute",
                top: 90,
                left: 15,
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 5,
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 8,
              }}
            >
              <Pressable
                onPress={() => {
                  if (addItems === 1) {
                    dispatch(removeFromCart(food));
                    setSelected(false);
                    setAddItems(0);
                  } else {
                    dispatch(decrementQuantity(food));

                    setAddItems((c) => c - 1);
                  }
                }}
              >
                <Text
                  style={{ fontSize: 25, color: "green", paddingHorizontal: 6 }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{ fontSize: 20, color: "green", paddingHorizontal: 6 }}
                >
                  {addItems}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setAddItems((c) => c + 1);
                  dispatch(incrementQuantity(food));
                }}
              >
                <Text
                  style={{ fontSize: 20, color: "green", paddingHorizontal: 6 }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setSelected(true);
                if (addItems === 0) {
                  setAddItems((c) => c + 1);
                }
                dispatch(addToCart(food));
              }}
              style={{
                position: "absolute",
                top: 85,
                left: 20,
                flexDirection: "row",
                paddingHorizontal: 25,
                paddingVertical: 5,
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 5,
              }}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "600", color: "#018749" }}
              >
                ADD
              </Text>
            </Pressable>
          )}
        </Pressable>
      </Pressable>
    </View>
  );
};

export default MenuComponent;
