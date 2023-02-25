import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Login from "@/screens/auth/Login";
import Register from "@/screens/auth/Register";

const AuthStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

export default Auth;
