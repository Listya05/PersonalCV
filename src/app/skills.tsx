import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

// IMPORT DATA JSON
import profileData from "../data/profile.json";

// IMPORT COMPONENT
import SkillsSection from "../components/SkillsSection";

// IMPORT THEME
import { useAppTheme } from "../context/ThemeContext";

export default function Skills() {
  const { isDark, colors } = useAppTheme();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        style={{ backgroundColor: colors.background }}
      >
        {/* PAGE HEADER */}
        <View style={styles.pageHeader}>
          <Text style={[styles.pageTitle, { color: colors.text }]}>
            My Skills
          </Text>

          <Text
            style={[styles.pageDescription, { color: colors.secondaryText }]}
          >
            Kemampuan dan teknologi yang sedang saya pelajari dan kembangkan
            dalam bidang pengembangan perangkat lunak.
          </Text>
        </View>

        {/* SKILLS SECTION */}
        <SkillsSection data={profileData} />

        {/* FOOTER */}
        <View style={[styles.footer, { backgroundColor: colors.banner }]}>
          <Text style={[styles.footerText, { color: colors.bannerText }]}>
            Learning Today, Growing Tomorrow.
          </Text>
        </View>
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

  pageHeader: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 20,
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 10,
  },

  pageDescription: {
    fontSize: 14,
    lineHeight: 22,
  },

  footer: {
    marginTop: 30,
    paddingVertical: 22,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  footerText: {
    fontSize: 13,
    fontWeight: "600",
  },
});
