import { Text, View, StyleSheet } from "react-native";

import React, { useEffect, useState } from "react";

export default function Index() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api/test")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Text>{message || "Loading..."}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
});
