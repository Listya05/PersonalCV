import { Pressable, StyleSheet, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useAppTheme } from "../context/ThemeContext";

// ==========================================
// THEME SWITCHER COMPONENT
// ==========================================

export default function ThemeSwitcher() {
  const { isDark, colors, toggleTheme } = useAppTheme();

  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ]}
      onPress={toggleTheme}
    >
      <Ionicons
        name={isDark ? "sunny-outline" : "moon-outline"}
        size={19}
        color={colors.accent}
      />

      <Text style={[styles.buttonText, { color: colors.text }]}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </Text>
    </Pressable>
  );
}

// ==========================================
// STYLESHEET
// ==========================================

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    gap: 9,
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 30,
    borderWidth: 1,
  },

  buttonText: {
    fontSize: 13,
    fontWeight: "700",
  },
});
