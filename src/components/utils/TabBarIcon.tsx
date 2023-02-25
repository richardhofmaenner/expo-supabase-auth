import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { themeColor, useTheme } from "react-native-rapi-ui";

export default ({ icon, focused }: { icon: any; focused: boolean }) => {
  const { isDarkmode } = useTheme();
  return (
    <Ionicons
      name={icon}
      style={{ marginBottom: -7 }}
      size={24}
      color={
        focused
          ? isDarkmode
            ? themeColor.white100
            : themeColor.primary
          : "rgb(143, 155, 179)"
      }
    />
  );
};
