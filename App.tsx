import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "react-native-rapi-ui";

import Navigation from "@/nav/Navigation";
import { AuthProvider } from "@/providers/AuthProvider";

export default function App() {
  return (
    <ThemeProvider theme="dark">
      <AuthProvider>
        <Navigation />
      </AuthProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
