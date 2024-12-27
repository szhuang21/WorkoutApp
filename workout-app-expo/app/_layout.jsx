import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack, SplashScreen } from "expo-router";
import GlobalProvider from "../context/GlobalProvider";
// show flash creen until explicitly told to hide
// SplashScreen.preventAutoHideAsync();

// rnfes
const RootLayout = () => {
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="/search/[query]/" options={{ headerShown: false }} /> */}
      </Stack>
    </GlobalProvider>
  );
};

export default RootLayout;
