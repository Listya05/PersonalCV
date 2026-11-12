import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

// IMPORT DATA JSON
import profileData from "../data/profile.json";

// IMPORT COMPONENTS
import AboutSection from "../components/AboutSection";
import HobbySection from "../components/HobbySection";

// IMPORT THEME
import { useAppTheme } from "../context/ThemeContext";

export default function About() {
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
            About Me
          </Text>

          <Text
            style={[styles.pageDescription, { color: colors.secondaryText }]}
          >
            Mengenal lebih dekat informasi pribadi, latar belakang pendidikan,
            dan kegiatan yang saya sukai.
          </Text>
        </View>

        {/* PERSONAL INFORMATION */}
        <AboutSection data={profileData} />

        {/* HOBBY SECTION */}
        <HobbySection data={profileData} />

        {/* FOOTER */}
        <View style={[styles.footer, { backgroundColor: colors.banner }]}>
          <Text style={[styles.footerText, { color: colors.bannerText }]}>
            Personal Profile & Interests
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
