import { StatusBar } from "expo-status-bar";
import { Redirect, router, Link } from "expo-router";
import {
  Pressable,
  Dimensions,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function Index() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) {
    return <Redirect href="/home" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.logoContainer}>
          <Image
            source={images.logo}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <View style={styles.sloganContainer}>
            <Text style={styles.sloganText}>
              Discover Endless Videos with{" "}
              <Text style={styles.aoraText}>Aora</Text>
              <Image
                source={images.path}
                style={styles.path}
                resizeMode="contain"
              />
            </Text>
          </View>
          <Text style={styles.pText}>
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => {
              console.log("continue with email pressed");
              router.push("/sign-in");
            }}
            containerStyles={styles.buttonContainer}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  link: {
    color: "white",
  },
  button: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    height: 300,
    flex: 1,
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: "full",
    paddingHorizontal: 10,
  },
  text: {
    color: "black",
  },
  logoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 85,
    paddingHorizontal: 4,
  },
  logoImage: {
    width: 130,
    height: 84,
  },
  cardsImage: {
    maxWidth: 380,
    width: "100%",
    height: 300,
  },
  sloganContainer: {
    position: "relative",
    marginTop: 5,
  },
  sloganText: {
    fontSize: 42,
    color: "white",
    textAlign: "center",
  },
  aoraText: {
    color: "orange",
  },
  path: {
    width: 136,
    height: 15,
    position: "absolute",
    bottom: 4,
    right: 18,
  },
  pText: {
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
  buttonContainer: {
    zIndex: 1,
    marginTop: 20,
    width: "100%",
  },
});

// import { StatusBar } from "expo-status-bar";
// import { Link } from "expo-router";
// import { Text, View, TextInput, Alert, Button, StyleSheet } from "react-native";

// import React, { useEffect, useState } from "react";

// export default function Index() {
//   const [message, setMessage] = useState("");
//   const [instagramLink, setInstagramLink] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:3000/api/test")
//       .then((response) => response.json())
//       .then((data) => setMessage(data.message))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   async function handleSubmit() {
//     try {
//       const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ link: instagramLink }),
//       };

//       const response = await fetch(
//         "http://localhost:3000/api/scrape",
//         requestOptions
//       );

//       const data = await response.json();
//       setDescription(data.description || "No response found");
//     } catch (error) {
//       console.log("error fetching data: ", error);
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>hi!</Text>
//       <View>
//         <StatusBar style="auto" />
//         <Link href="/home">Go to Home</Link>
//       </View>

//       <Text>{message || "Loading..."}</Text>
//       <View>
//         <TextInput
//           placeholder="Enter Instagram Link"
//           value={instagramLink}
//           onChangeText={setInstagramLink}
//           keyboardType="url"
//         />
//         <Button title="Submit" onPress={handleSubmit} />
//         {description ? (
//           <Text style={{ marginTop: 20 }}>{description}</Text>
//         ) : null}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: "#25292e",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "black",
//   },
// });
