import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useAppTheme } from "../context/ThemeContext";
import profileData from "../data/profile.json";

// ==========================================
// PROPS
// ==========================================

type HobbySectionProps = {
  data: typeof profileData;
};

// ==========================================
// HOBBY SECTION
// ==========================================

export default function HobbySection({ data }: HobbySectionProps) {
  const { width } = useWindowDimensions();

  const { colors } = useAppTheme();

  // RESPONSIVE CARD
  const columns = width >= 1000 ? 3 : 2;
  const gap = 16;
  const sectionWidth = Math.min(width - 48, 900);

  const cardWidth = (sectionWidth - gap * (columns - 1)) / columns;

  return (
    <View style={[styles.section, { backgroundColor: colors.background }]}>
      {/* SECTION HEADING */}

      <View style={styles.headingContainer}>
        <Text style={[styles.eyebrow, { color: colors.accent }]}>
          A LITTLE ABOUT ME
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Hobbies & Interests
        </Text>

        <Text
          style={[styles.sectionDescription, { color: colors.secondaryText }]}
        >
          Things I enjoy doing in my free time.
        </Text>
      </View>

      {/* HOBBY CARDS */}

      <View style={styles.hobbyGrid}>
        {data.hobbies.map((hobby) => (
          <View
            key={hobby.id}
            style={[
              styles.hobbyCard,
              {
                width: cardWidth,
                backgroundColor: colors.card,
                borderColor: colors.border,
              },
            ]}
          >
            {/* ICON */}

            <View
              style={[
                styles.iconContainer,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <Ionicons
                name={
                  hobby.icon as React.ComponentProps<typeof Ionicons>["name"]
                }
                size={29}
                color={colors.accent}
              />
            </View>

            {/* HOBBY NAME */}

            <Text style={[styles.hobbyName, { color: colors.text }]}>
              {hobby.nama}
            </Text>

            {/* HOBBY DESCRIPTION */}

            <Text
              style={[styles.hobbyDescription, { color: colors.secondaryText }]}
            >
              {hobby.deskripsi}
            </Text>
          </View>
        ))}
      </View>

      {/* BOTTOM NOTE */}

      <Text style={[styles.bottomNote, { color: colors.secondaryText }]}>
        Different interests, one curious mind.
      </Text>
    </View>
  );
}

// ==========================================
// STYLESHEET
// ==========================================

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 24,
    paddingVertical: 55,
    alignItems: "center",
  },

  headingContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  eyebrow: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2.5,
    marginBottom: 9,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 9,
  },

  sectionDescription: {
    fontSize: 13,
    textAlign: "center",
    lineHeight: 21,
  },

  hobbyGrid: {
    width: "100%",
    maxWidth: 900,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },

  hobbyCard: {
    minHeight: 180,
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#172C4B",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
  },

  hobbyName: {
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 8,
  },

  hobbyDescription: {
    fontSize: 10,
    lineHeight: 16,
    textAlign: "center",
  },

  bottomNote: {
    fontSize: 11,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 27,
  },
});
