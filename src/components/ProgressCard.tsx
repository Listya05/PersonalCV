import { StyleSheet, Text, View } from "react-native";

import { useAppTheme } from "../context/ThemeContext";

// ==========================================
// PROPS
// ==========================================

type ProgressCardProps = {
  title: string;
  percentage: number;
  icon: string;
};

// ==========================================
// PROGRESS CARD COMPONENT
// ==========================================

export default function ProgressCard({
  title,
  percentage,
  icon,
}: ProgressCardProps) {
  const { colors } = useAppTheme();

  // Memastikan persentase berada di antara 0 sampai 100
  const progressValue = Math.min(100, Math.max(0, percentage));

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ]}
    >
      {/* CARD HEADER */}

      <View style={styles.cardHeader}>
        <View
          style={[styles.iconBox, { backgroundColor: colors.iconBackground }]}
        >
          <Text style={[styles.icon, { color: colors.accent }]}>{icon}</Text>
        </View>

        <Text style={[styles.percentage, { color: colors.text }]}>
          {percentage}%
        </Text>
      </View>

      {/* TITLE */}

      <Text style={[styles.title, { color: colors.secondaryText }]}>
        {title}
      </Text>

      {/* PROGRESS BAR */}

      <View
        style={[styles.progressBackground, { backgroundColor: colors.border }]}
      >
        <View
          style={[
            styles.progressFill,
            {
              width: `${progressValue}%`,
              backgroundColor: colors.accent,
            },
          ]}
        />
      </View>
    </View>
  );
}

// ==========================================
// STYLESHEET
// ==========================================

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 0,
    borderRadius: 16,
    padding: 15,
    borderWidth: 1,
    elevation: 3,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },

  iconBox: {
    width: 35,
    height: 35,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    fontSize: 17,
    fontWeight: "800",
  },

  percentage: {
    fontSize: 18,
    fontWeight: "900",
  },

  title: {
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 11,
  },

  progressBackground: {
    height: 7,
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 10,
  },
});
