import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack, SplashScreen } from "expo-router";

// show flash creen until explicitly told to hide
SplashScreen.preventAutoHideAsync();

// rnfes
const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
