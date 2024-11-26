import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      <KeyboardAwareScrollView className="bg-black">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View className="bg-white h-screen rounded-t-3xl">
            <Text className="text-green-800 text-3xl font-semibold text-center py-3 mt-3">
              Sign up{" "}
            </Text>
            <View>
              <TextInput
                className="tracking-widest bg-gray-100 rounded-lg w-80 text-base py-2 px-1 mx-3 mb-5"
                placeholder="Enter Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                className="tracking-widest bg-gray-100 rounded-lg w-80 text-base py-2 px-1 mx-3 mb-5"
                placeholder="Enter Password"
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TextInput
                className="tracking-widest bg-gray-100 rounded-lg w-80 text-base py-2 px-1 mx-3 mb-5"
                placeholder="Confirm Password"
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </View>
            <TouchableOpacity className="bg-yellow-200 py-2 rounded-md mx-10 mt-16 mb-3">
              <Text className="text-center font-semibold text-white text-lg">
                Register
              </Text>
            </TouchableOpacity>
            <View className="flex-row space-x-2 justify-center">
              <Text>Have an account?</Text>
              <TouchableOpacity>
                <Text className="text-green-500">Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </KeyboardAwareScrollView>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#25292e",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     color: "#fff",
//   },
// });
