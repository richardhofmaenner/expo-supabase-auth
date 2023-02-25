import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";

import Auth from "./AuthStack";
import Main from "./MainStack";

import { AuthContext } from "@/providers/AuthProvider";

export default function Navigation() {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user === true && <Main />}
      {user === false && <Auth />}
    </NavigationContainer>
  );
}
