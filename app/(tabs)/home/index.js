import { Link, Redirect, Stack } from "expo-router";
import { View, Text } from "react-native";

const Tab1Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ headerShown: true, title: "Home" }} />
      <Text style={{ marginBottom: 20 }}>Página Principal</Text>
      <Link style={{ marginBottom: 20 }} href="/home/details">Go to Details</Link>
      <Link href="/home/new-entry-modal">Present modal</Link>
    </View>
  );
};
export default Tab1Index;
