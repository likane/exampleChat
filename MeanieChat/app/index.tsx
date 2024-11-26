import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      className="flex-1 justify-center"
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/LoginScreen">Login</Link>
      <Link href="/SignupScreen">Signup</Link>
    </View>
  );
}
