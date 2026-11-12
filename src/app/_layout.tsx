import { DarkTheme, DefaultTheme, Tabs, ThemeProvider } from "expo-router";

import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import { AppThemeProvider, useAppTheme } from "@/context/ThemeContext";

SplashScreen.preventAutoHideAsync();

// ==========================================
// NAVIGATION CONTENT
// ==========================================

function AppTabs() {
  const { isDark, colors } = useAppTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />

      <Tabs
        screenOptions={{
          headerShown: false,

          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: colors.secondaryText,

          tabBarStyle: {
            backgroundColor: colors.card,
            borderTopColor: colors.border,
            height: 65,
            paddingTop: 6,
            paddingBottom: 6,
          },

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
              <Ionicons
                name="home-outline"
                size={size}
                color={typeof color === "string" ? color : colors.accent}
              />
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
                color={typeof color === "string" ? color : colors.accent}
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
                color={typeof color === "string" ? color : colors.accent}
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
                color={typeof color === "string" ? color : colors.accent}
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
                color={typeof color === "string" ? color : colors.accent}
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
              <Ionicons
                name="mail-outline"
                size={size}
                color={typeof color === "string" ? color : colors.accent}
              />
            ),
          }}
        />

        {/* EXPLORE - HIDDEN FROM TAB BAR */}
        <Tabs.Screen
          name="explore"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}

// ==========================================
// ROOT LAYOUT
// ==========================================

export default function RootLayout() {
  return (
    <AppThemeProvider>
      <AppTabs />
    </AppThemeProvider>
  );
}
