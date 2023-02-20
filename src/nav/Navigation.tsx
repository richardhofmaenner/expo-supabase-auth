import { NavigationContainer } from "@react-navigation/native";
import Auth from "./auth";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

export default function Navigation() {
  const auth = useContext(AuthContext)
  const user = auth.user
  return (
    <NavigationContainer>
      {user == false && <Auth />}
    </NavigationContainer>
  )
}