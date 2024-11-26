import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="LoginScreen" options={{ title: "Login" }} />
      <Stack.Screen name="SignupScreen" options={{ title: "Signup" }} />
    </Stack>
  );
}
