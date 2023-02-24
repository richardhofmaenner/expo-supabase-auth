import SecondScreen from "@/screens/SecondScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MainTabs from "./MainTabs"

const MainStack = createNativeStackNavigator()

export default function Main () {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
    </MainStack.Navigator>
  )
}