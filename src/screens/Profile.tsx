import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, View } from "react-native";
import { Layout, Text, TextInput } from "react-native-rapi-ui";

import { MainStackParamList } from "../types/navigation";
import ChangePassword from "@/components/profile/ChangePassword";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  return (
    <Layout>
      <ScrollView
        style={{
          flex: 1,
          marginHorizontal: 20,
          marginVertical: 40,
        }}
      >
        <ChangePassword />
      </ScrollView>
    </Layout>
  );
}
