import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

// IMPORT DATA JSON
import profileData from "../data/profile.json";

// IMPORT COMPONENTS
import ProfileHeader from "../components/ProfileHeader";

// IMPORT THEME
import { useAppTheme } from "../context/ThemeContext";

function HomeContent() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 380;

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
        {/* PROFILE HEADER */}
        <ProfileHeader data={profileData} />

        {/* INTRO BANNER */}
        <View
          style={[
            styles.banner,
            isSmallScreen && styles.bannerSmall,
            { backgroundColor: colors.banner },
          ]}
        >
          <Text style={[styles.bannerTitle, { color: colors.bannerText }]}>
            Let's Keep Growing!
          </Text>

          <Text
            style={[styles.bannerDescription, { color: colors.bannerText }]}
          >
            Terus belajar, berkembang, dan menciptakan hal-hal baru melalui
            pengalaman dan pengetahuan.
          </Text>
        </View>

        {/* FOOTER */}
        <View style={[styles.footer, { backgroundColor: colors.banner }]}>
          <Text style={styles.footerDescription}>Personal CV & Portfolio</Text>

          <Text style={styles.footerCopyright}>
            © 2026 All Rights Reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function Index() {
  return <HomeContent />;
}

// ==========================================
// STYLESHEET
// ==========================================

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },

  banner: {
    marginHorizontal: 24,
    marginVertical: 35,
    paddingVertical: 35,
    paddingHorizontal: 28,
    borderRadius: 20,
    alignItems: "center",
  },

  bannerSmall: {
    marginHorizontal: 16,
    paddingHorizontal: 20,
  },

  bannerTitle: {
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
  },

  bannerDescription: {
    fontSize: 14,
    lineHeight: 23,
    textAlign: "center",
  },

  footer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  footerName: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 6,
  },

  footerDescription: {
    color: "#E9A98E",
    fontSize: 13,
    marginBottom: 15,
  },

  footerCopyright: {
    color: "#B9C4D1",
    fontSize: 11,
  },
});
