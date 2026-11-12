import { ScrollView, StatusBar, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import portfolioData from "../data/portfolio.json";

import PortfolioSection from "../components/PortfolioSection";

import { useAppTheme } from "../context/ThemeContext";

export default function Portfolio() {
  const { isDark, colors } = useAppTheme();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.background }}
        contentContainerStyle={styles.scrollContent}
      >
        <PortfolioSection data={portfolioData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },
});
