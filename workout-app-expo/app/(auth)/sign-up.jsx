import {
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLoggedIn(true);
      Alert.alert("Success", "User Signed Up Successfully");
      // set it to global state...
      router.push("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
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
          <Text style={styles.text}>Sign up to Aora</Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles={styles.formField}
          />
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
            title="Sign Up"
            handlePress={submit}
            containerStyles={styles.button}
            isLoading={isSubmitting}
          />
          <View style={styles.noAccountContainer}>
            <Text style={styles.noAccountText}>Have an account already?</Text>
            <Link style={styles.signupText} href="/sign-in">
              Sign In
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
    marginTop: 10,
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
    paddingTop: 5,
    flexDirection: "row",
  },
  signupText: {
    color: "white",
    justifyContent: "center",
    paddingTop: 5,
    marginLeft: 5,
    flexDirection: "row",
    color: "orange",
    fontWeight: 600,
  },
});
export default SignUp;
