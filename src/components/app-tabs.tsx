import { NativeTabs } from "expo-router/unstable-native-tabs";
import React from "react";
import { DynamicColorIOS, useColorScheme } from "react-native";

import { Colors } from "@/constants/theme";

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      labelStyle={{ selected: { color: colors.text } }}
      tintColor={DynamicColorIOS({
        dark: "white",
        light: "black",
      })}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: "house", selected: "house.fill" }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="alarms">
        <NativeTabs.Trigger.Label>Alarms</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: "alarm", selected: "alarm.fill" }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: "gear.circle", selected: "gearshape.circle.fill" }}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
