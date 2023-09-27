import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Pressable, ScrollView, Text, View, Alert } from "react-native";
import RNUpiPayment from "react-native-upi-payment";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../redux/CartReducer";
import reactNativeUpiPayment from "react-native-upi-payment";
import { auth } from "../firebase";
const CartScreen = () => {
  const user = auth.currentUser;
  const cart = useSelector((state) => state.cart.cart);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  const MakePayment = () => {
    reactNativeUpiPayment.initializePayment(
      {
        vpa: "mobileNo@upi", // or can be john@ybl or mobileNo@upi
        payeeName: "John Doe",
        amount: "1",
        transactionRef: "aasf-332-aoei-fn",
      },
      successCallback,
      failureCallback
    );
  };

  function successCallback(data) {
    navigation.replace("LoadingScreen");
  }

  function failureCallback(data) {
    Alert(data);
  }

  return (
    <>
      <ScrollView>
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
            {route.params.name}
          </Text>
        </View>
        {total > 0 ? (
          <>
            <View
              style={{
                backgroundColor: "white",
                padding: 15,
                borderRadius: 8,
                marginHorizontal: 10,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 16 }}>
                Ordering for someone els?
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "700", color: "#FF4500" }}
              >
                Add Deatails
              </Text>
            </View>

            <View
              style={{
                marginTop: 16,
                marginHorizontal: 5,
                backgroundColor: "white",
                borderRadius: 12,
                padding: 14,
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              {cart.map((item, i) => (
                <View
                  key={i}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text style={{ width: 120, fontSize: 16, fontWeight: "600" }}>
                    {item.name}
                  </Text>
                  <Pressable
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      alignItems: "center",
                      borderColor: "#BEBEBE",
                      borderWidth: 0.5,
                      borderRadius: 10,
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        dispatch(decrementQuantity(item));
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "green",
                          paddingHorizontal: 6,
                          fontWeight: "600",
                        }}
                      >
                        -
                      </Text>
                    </Pressable>

                    <Pressable>
                      <Text
                        style={{
                          fontSize: 20,
                          color: "green",
                          paddingHorizontal: 6,
                          fontWeight: "600",
                        }}
                      >
                        {item.quantity}
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        dispatch(incrementQuantity(item));
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "green",
                          paddingHorizontal: 6,
                          fontWeight: "600",
                        }}
                      >
                        +
                      </Text>
                    </Pressable>
                  </Pressable>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    ₹ {item.price * item.quantity}
                  </Text>
                </View>
              ))}
            </View>

            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Billing Deatils
              </Text>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 7,
                  padding: 10,
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                  >
                    Item Total
                  </Text>
                  <Text style={{ fontSize: 17, fontWeight: "400" }}>
                    ₹ {total}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 9,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                  >
                    Delivery Free | 1.2KM
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#FF4500",
                    }}
                  >
                    FREE
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                  >
                    Free Delivery on Your order
                  </Text>
                </View>
                <View
                  style={{
                    borderColor: "gray",
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                  >
                    Delivery Tip
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#FF4500",
                    }}
                  >
                    ADD TIP
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                  >
                    Taxes and Charges
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#FF4500",
                    }}
                  >
                    ₹ 95
                  </Text>
                </View>
                <View
                  style={{
                    borderColor: "gray",
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 9,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    To Pay
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    ₹ {total + 95}
                  </Text>
                </View>
              </View>
            </View>
          </>
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 16, fontWeight: "600" }}
            >
              Your Cart is Empty
            </Text>
          </View>
        )}
      </ScrollView>
      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            marginBottom: 20,
            padding: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              ₹ {total + 95}
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: "#00A877",
              }}
            >
              View Detailed Bill
            </Text>
          </View>

          <Pressable
            onPress={MakePayment}
            style={{
              backgroundColor: "#00A877",
              padding: 14,
              width: 200,
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              Proceed to pay
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default CartScreen;
