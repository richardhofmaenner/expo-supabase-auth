import { NavigationContainer } from "@react-navigation/native";
import Auth from "./AuthStack";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";
import Main from "./MainStack";

export default function Navigation() {
  const auth = useContext(AuthContext)
  const user = auth.user
  return (
    <NavigationContainer>
      {user == true && <Main />}
      {user == false && <Auth />}
    </NavigationContainer>
  )
}