import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { firebase } from "../config/firebaseConfig";

export default function SettingsScreen(props, { navigation }) {
  const usersRef = firebase.firestore().collection("users");
  const userID = props.extraData.id;
  const [userName, setText] = useState("");

  useEffect(() => {
    usersRef
      .doc(userID)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const data = doc.data();
          setText(data["fullName"].toString());
        } else {
          // doc.data() will be undefined in this case
          alert("User doesn't exist!!!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.welcome}>
        <Text style={{ fontSize: 24 }}>Welcome back {userName}!</Text>
      </View>
      <Text>Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    backgroundColor: "lightblue",
    marginBottom: 10,
    alignItems: "center",
    padding: 10,
  },
});
