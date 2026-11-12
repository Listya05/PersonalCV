import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useAppTheme } from "../context/ThemeContext";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: string;
  icon: string;
};

type PortfolioData = {
  projects: Project[];
};

type PortfolioSectionProps = {
  data: PortfolioData;
};

export default function PortfolioSection({ data }: PortfolioSectionProps) {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      {/* SECTION HEADER */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>My Portfolio</Text>

        <Text style={[styles.subtitle, { color: colors.secondaryText }]}>
          Beberapa proyek yang sedang dan pernah saya kerjakan sebagai bagian
          dari proses belajar dan pengembangan kemampuan.
        </Text>
      </View>

      {/* PROJECT LIST */}
      <View style={styles.projectList}>
        {data.projects.map((project) => (
          <View
            key={project.id}
            style={[
              styles.card,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
              },
            ]}
          >
            {/* PROJECT ICON */}
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <Ionicons
                name={project.icon as keyof typeof Ionicons.glyphMap}
                size={28}
                color={colors.accent}
              />
            </View>

            {/* PROJECT INFORMATION */}
            <Text style={[styles.category, { color: colors.accent }]}>
              {project.category}
            </Text>

            <Text style={[styles.projectTitle, { color: colors.text }]}>
              {project.title}
            </Text>

            <Text style={[styles.description, { color: colors.secondaryText }]}>
              {project.description}
            </Text>

            {/* TECHNOLOGIES */}
            <Text style={[styles.techTitle, { color: colors.text }]}>
              Technologies
            </Text>

            <View style={styles.techList}>
              {project.technologies.map((tech, index) => (
                <View
                  key={`${project.id}-${index}`}
                  style={[
                    styles.techBadge,
                    { backgroundColor: colors.iconBackground },
                  ]}
                >
                  <Text style={[styles.techText, { color: colors.text }]}>
                    {tech}
                  </Text>
                </View>
              ))}
            </View>

            {/* PROJECT STATUS */}
            <View
              style={[
                styles.statusContainer,
                { borderTopColor: colors.border },
              ]}
            >
              <View style={styles.statusIndicator} />

              <Text
                style={[styles.statusText, { color: colors.secondaryText }]}
              >
                {project.status}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 25,
    paddingBottom: 30,
  },

  header: {
    marginBottom: 22,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 22,
  },

  projectList: {
    gap: 20,
  },

  card: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
  },

  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  category: {
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.7,
  },

  projectTitle: {
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 25,
    marginBottom: 10,
  },

  description: {
    fontSize: 13,
    lineHeight: 21,
    marginBottom: 18,
  },

  techTitle: {
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 10,
  },

  techList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  techBadge: {
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 8,
  },

  techText: {
    fontSize: 11,
    fontWeight: "600",
  },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderTopWidth: 1,
    marginTop: 18,
    paddingTop: 14,
  },

  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E9A98E",
  },

  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
