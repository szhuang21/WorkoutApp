import { Image, View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { signIn, signout } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLoggedIn(true);
      Alert.alert("Success", "User Signed in Successfully");
      router.push("/home");

      // set it to global state...
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  const signout = async () => {
    try {
      await signout();
      // set it to global state...
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      console.log("logout successful");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.scrollview}>
          <Image
            source={images.logo}
            reiszeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.text}>Log in to Aora</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={styles.formField}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={styles.formField}
            keyboardType="email-address"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles={styles.button}
            isLoading={isSubmitting}
          />
          <View style={styles.noAccountContainer}>
            <Text style={styles.noAccountText}>Don't have an account?</Text>
            <Link style={styles.signupText} href="/sign-up">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  scrollview: {
    alignContent: "center",
    width: "full",
    minHeight: "100%",
    paddingHorizontal: 24,
    marginVertical: 48,
  },
  logo: {
    width: 115,
    height: 35,
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 600,
    color: "white",
  },
  formField: {
    marginTop: 7,
  },
  button: {
    marginTop: 20,
  },
  noAccountContainer: {
    justifyContent: "center",
    paddingTop: 5,
    flexDirection: "row",
  },
  noAccountText: {
    color: "white",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  signupText: {
    color: "white",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 5,
    flexDirection: "row",
    color: "orange",
    fontWeight: 600,
  },
});
export default SignIn;
