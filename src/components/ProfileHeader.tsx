import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useAppTheme } from "../context/ThemeContext";
import profileData from "../data/profile.json";

// ==========================================
// PROPS
// ==========================================

type ProfileHeaderProps = {
  data: typeof profileData;
};

// ==========================================
// PROFILE HEADER
// ==========================================

export default function ProfileHeader({ data }: ProfileHeaderProps) {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 380;

  const { isDark, colors, toggleTheme } = useAppTheme();

  return (
    <>
      {/* NAVIGATION */}

      <View
        style={[
          styles.navbar,
          {
            paddingHorizontal: isSmallScreen ? 18 : 24,
          },
        ]}
      >
        <View
          style={[styles.logoBox, { backgroundColor: colors.banner }]}
          accessible={false}
        >
          <Text style={styles.logoText}>L.</Text>
        </View>

        <Text
          style={[styles.navTitle, { color: colors.text }]}
          accessibilityRole="header"
        >
          MY PORTFOLIO
        </Text>

        {/* THEME BUTTON */}

        <Pressable
          style={[
            styles.themeButton,
            {
              backgroundColor: colors.iconBackground,
              borderColor: colors.border,
            },
          ]}
          onPress={toggleTheme}
          accessibilityRole="button"
          accessibilityLabel={
            isDark ? "Aktifkan Light Mode" : "Aktifkan Dark Mode"
          }
          accessibilityHint="Ketuk untuk mengubah tema tampilan aplikasi"
          hitSlop={8}
          android_ripple={{ color: colors.border, borderless: true }}
        >
          <Ionicons
            name={isDark ? "sunny-outline" : "moon-outline"}
            size={20}
            color={colors.text}
            accessible={false}
          />
        </Pressable>
      </View>

      {/* HERO SECTION */}

      <View
        style={[
          styles.heroSection,
          {
            paddingHorizontal: isSmallScreen ? 20 : 25,
          },
        ]}
      >
        <View style={styles.heroTop}>
          <View style={styles.introBox}>
            <Text style={[styles.eyebrow, { color: colors.accent }]}>
              HELLO, WELCOME TO MY SPACE
            </Text>

            <Text
              style={[
                styles.heading,
                {
                  fontSize: isSmallScreen ? 37 : 43,
                  color: colors.text,
                },
              ]}
              accessibilityRole="header"
            >
              Get to{"\n"}know me.
            </Text>
          </View>

          {/* DECORATIVE CIRCLE */}

          <View
            style={[
              styles.decorCircle,
              {
                width: isSmallScreen ? 43 : 55,
                height: isSmallScreen ? 43 : 55,
                backgroundColor: isDark ? "#414B59" : "#F1D7C9",
              },
            ]}
            accessible={false}
            importantForAccessibility="no"
          >
            <View
              style={[
                styles.decorInner,
                {
                  backgroundColor: colors.accent,
                },
              ]}
            />
          </View>
        </View>

        {/* PROFILE PHOTO */}

        <View style={styles.profileWrapper}>
          <View
            style={[styles.imageAccent, { backgroundColor: colors.accent }]}
            accessible={false}
            importantForAccessibility="no"
          />

          <View
            style={[
              styles.imageFrame,
              {
                backgroundColor: colors.card,
              },
            ]}
          >
            <Image
              source={require("../../assets/profile.jpeg")}
              style={styles.profileImage}
              resizeMode="cover"
              accessible
              accessibilityLabel={`Foto profil ${data.nama}`}
            />
          </View>

          <View
            style={[styles.imageLabel, { backgroundColor: colors.banner }]}
            accessible={false}
          >
            <Text style={styles.imageLabelText}>MY PROFILE</Text>
          </View>
        </View>

        {/* PROFILE IDENTITY */}

        <View style={styles.nameSection}>
          <Text
            style={[
              styles.name,
              {
                fontSize: isSmallScreen ? 22 : 25,
                color: colors.text,
              },
            ]}
            accessibilityRole="header"
          >
            {data.nama}
          </Text>

          {/* CURRENT PROFESSION */}

          <View style={styles.roleRow}>
            <View
              style={[styles.roleLine, { backgroundColor: colors.accent }]}
              accessible={false}
            />

            <Text style={[styles.role, { color: colors.secondaryText }]}>
              {data.profesi.toUpperCase()} {data.prodi.toUpperCase()}
            </Text>
          </View>

          {/* CAREER GOAL */}

          <View
            style={[
              styles.careerBadge,
              { backgroundColor: colors.iconBackground },
            ]}
          >
            <Text style={[styles.careerText, { color: colors.accent }]}>
              {data.careerGoal}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

// ==========================================
// STYLESHEET
// ==========================================

const styles = StyleSheet.create({
  navbar: {
    minHeight: 72,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logoBox: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
  },

  navTitle: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  themeButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    borderWidth: 1,
  },

  heroSection: {
    paddingTop: 28,
  },

  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  introBox: {
    flex: 1,
    paddingRight: 8,
  },

  eyebrow: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.2,
  },

  heading: {
    fontWeight: "900",
    lineHeight: 48,
    marginTop: 12,
  },

  decorCircle: {
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
  },

  decorInner: {
    width: 25,
    height: 25,
    borderRadius: 15,
  },

  profileWrapper: {
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 15,
  },

  imageAccent: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 30,
    transform: [{ rotate: "7deg" }],
    top: 3,
    left: 3,
  },

  imageFrame: {
    width: 184,
    height: 184,
    borderRadius: 27,
    padding: 6,
    elevation: 5,
  },

  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 22,
    backgroundColor: "#DCE4EC",
  },

  imageLabel: {
    position: "absolute",
    right: -15,
    bottom: 17,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 8,
  },

  imageLabelText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },

  nameSection: {
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: 5,
  },

  name: {
    fontWeight: "900",
    textAlign: "center",
  },

  roleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    flexWrap: "wrap",
  },

  roleLine: {
    width: 22,
    height: 2,
    marginRight: 9,
  },

  role: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },

  careerBadge: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 12,
  },

  careerText: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});
