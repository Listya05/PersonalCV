import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function AppTabs() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // WARNA IKON NAVIGASI
        tabBarActiveTintColor: "#005BAC",
        tabBarInactiveTintColor: isDark ? "#A0A9B8" : "#8993A3",

        // STYLE NAVIGASI BAWAH
        tabBarStyle: {
          backgroundColor: isDark ? "#172C4B" : "#FFFFFF",
          borderTopColor: isDark ? "#30415B" : "#E5E7EB",
          height: 65,
          paddingTop: 6,
          paddingBottom: 6,
        },

        // STYLE LABEL
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
        },
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color as string} />
          ),
        }}
      />

      {/* ABOUT */}
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-outline"
              size={size}
              color={color as string}
            />
          ),
        }}
      />

      {/* SKILLS */}
      <Tabs.Screen
        name="skills"
        options={{
          title: "Skills",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="code-slash-outline"
              size={size}
              color={color as string}
            />
          ),
        }}
      />

      {/* PORTFOLIO */}
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="folder-outline"
              size={size}
              color={color as string}
            />
          ),
        }}
      />

      {/* MY SCORE */}
      <Tabs.Screen
        name="my-score"
        options={{
          title: "My Score",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="school-outline"
              size={size}
              color={color as string}
            />
          ),
        }}
      />

      {/* CONTACT */}
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail-outline" size={size} color={color as string} />
          ),
        }}
      />
    </Tabs>
  );
}
