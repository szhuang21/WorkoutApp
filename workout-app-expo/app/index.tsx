import { Text, View, TextInput, Alert, Button, StyleSheet } from "react-native";

import React, { useEffect, useState } from "react";

export default function Index() {
  const [message, setMessage] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/test")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  async function handleSubmit() {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ link: instagramLink }),
      };

      const response = await fetch(
        "http://localhost:3000/api/scrape",
        requestOptions
      );

      const data = await response.json();
      setDescription(data.description || "No response found");
    } catch (error) {
      console.log("error fetching data: ", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Text>{message || "Loading..."}</Text>
      <View>
        <TextInput
          placeholder="Enter Instagram Link"
          value={instagramLink}
          onChangeText={setInstagramLink}
          keyboardType="url"
        />
        <Button title="Submit" onPress={handleSubmit} />
        {description ? (
          <Text style={{ marginTop: 20 }}>{description}</Text>
        ) : null}
      </View>
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
