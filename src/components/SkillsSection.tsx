import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

import { useAppTheme } from "../context/ThemeContext";
import profileData from "../data/profile.json";

type SkillsSectionProps = {
  data: typeof profileData;
};

export default function SkillsSection({ data }: SkillsSectionProps) {
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();

  const columns = width >= 900 ? 3 : width >= 600 ? 2 : 1;

  const cardWidth = columns === 1 ? "100%" : columns === 2 ? "48%" : "31.5%";

  return (
    <View style={styles.container}>
      {/* SECTION HEADING */}
      <View style={styles.headingContainer}>
        <Text style={[styles.subtitle, { color: colors.accent }]}>
          WHAT I CAN DO
        </Text>

        <Text style={[styles.title, { color: colors.text }]}>My Skills</Text>

        <Text style={[styles.description, { color: colors.secondaryText }]}>
          Kemampuan dan teknologi yang sedang saya pelajari dan kembangkan.
        </Text>
      </View>

      {/* SKILLS CARDS */}
      <View style={styles.skillsContainer}>
        {data.skills.map((category) => (
          <View
            key={category.id}
            style={[
              styles.card,
              {
                width: cardWidth,
                backgroundColor: colors.card,
                borderColor: colors.border,
              },
            ]}
          >
            {/* CATEGORY ICON */}
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <Ionicons
                name={category.icon as keyof typeof Ionicons.glyphMap}
                size={24}
                color={colors.accent}
              />
            </View>

            {/* CATEGORY NAME */}
            <Text style={[styles.categoryTitle, { color: colors.text }]}>
              {category.kategori}
            </Text>

            {/* SKILL ITEMS */}
            <View style={styles.itemsContainer}>
              {category.items.map((skill) => (
                <View
                  key={skill}
                  style={[
                    styles.skillItem,
                    {
                      backgroundColor: colors.iconBackground,
                      borderColor: colors.border,
                    },
                  ]}
                >
                  <Text style={[styles.skillText, { color: colors.text }]}>
                    {skill}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* BOTTOM NOTE */}
      <View
        style={[
          styles.noteContainer,
          {
            backgroundColor: colors.banner,
            borderColor: colors.border,
          },
        ]}
      >
        <Ionicons
          name="information-circle-outline"
          size={20}
          color={colors.accent}
        />

        <Text style={[styles.noteText, { color: colors.secondaryText }]}>
          Saya terus mengembangkan kemampuan melalui proses belajar dan praktik
          dalam berbagai proyek.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  headingContainer: {
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 16,
  },
  card: {
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 14,
  },
  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillItem: {
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 9,
    borderWidth: 1,
  },
  skillText: {
    fontSize: 12,
    fontWeight: "600",
  },
  noteContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    marginTop: 20,
  },
  noteText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 19,
  },
});
