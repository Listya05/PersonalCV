import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

import type { ReactNode } from "react";

// ==========================================
// LIGHT MODE COLORS
// ==========================================

const lightTheme = {
  background: "#F8F7F4",
  card: "#FFFFFF",
  text: "#172C4B",
  secondaryText: "#737B86",
  accent: "#D58F72",
  iconBackground: "#F9EEE8",
  border: "#EEEAE5",
  banner: "#172C4B",
  bannerText: "#FFFFFF",
};

// ==========================================
// DARK MODE COLORS
// ==========================================

const darkTheme = {
  background: "#202631",
  card: "#303946",
  text: "#F0E8DC",
  secondaryText: "#C1C8D1",
  accent: "#D6BD9B",
  iconBackground: "#414B59",
  border: "#46515F",
  banner: "#303946",
  bannerText: "#F0E8DC",
};

// ==========================================
// STORAGE KEY
// ==========================================

const THEME_STORAGE_KEY = "app_theme";

// ==========================================
// THEME CONTEXT TYPE
// ==========================================

type ThemeContextType = {
  isDark: boolean;
  colors: typeof lightTheme;
  toggleTheme: () => void;
};

// ==========================================
// CREATE CONTEXT
// ==========================================

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ==========================================
// THEME PROVIDER
// ==========================================

type ThemeProviderProps = {
  children: ReactNode;
};

export function AppThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // ==========================================
  // LOAD THEME FROM ASYNC STORAGE
  // ==========================================

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);

        setIsDark(savedTheme === "dark");
      } catch (error) {
        console.error("Gagal memuat preferensi tema:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadTheme();
  }, []);

  // ==========================================
  // SAVE THEME TO ASYNC STORAGE
  // ==========================================

  useEffect(() => {
    if (!isLoaded) return;

    const saveTheme = async () => {
      try {
        await AsyncStorage.setItem(
          THEME_STORAGE_KEY,
          isDark ? "dark" : "light",
        );
      } catch (error) {
        console.error("Gagal menyimpan preferensi tema:", error);
      }
    };

    saveTheme();
  }, [isDark, isLoaded]);

  // ==========================================
  // TOGGLE THEME
  // ==========================================

  const toggleTheme = () => {
    setIsDark((previousTheme) => !previousTheme);
  };

  const colors = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        colors,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// ==========================================
// CUSTOM THEME HOOK
// ==========================================

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useAppTheme must be used inside AppThemeProvider");
  }

  return context;
}
