import { StyleSheet, Text, View } from "react-native";

import { useAppTheme } from "../context/ThemeContext";
import ProgressCard from "./ProgressCard";

// ==========================================
// TIPE DATA PROPS
// ==========================================

type ProgressItem = {
  id: number;
  nama: string;
  persentase: number;
};

type MyScoreData = {
  academicIdentity: {
    nama: string;
    nim: string;
    mataKuliah: string;
    dosen: string;
  };

  currentScore: {
    nilai: number;
    grade: string;
  };

  learningPoints: {
    total: number;
    unit: string;
  };

  learningProgress: ProgressItem[];
};

type MyScoreSectionProps = {
  data: MyScoreData;
};

// ==========================================
// KOMPONEN MY SCORE SECTION
// ==========================================

export default function MyScoreSection({ data }: MyScoreSectionProps) {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      {/* SECTION HEADER */}
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          My Score
        </Text>

        <Text style={[styles.sectionSubtitle, { color: colors.secondaryText }]}>
          Academic Performance & Learning Progress
        </Text>
      </View>

      {/* ACADEMIC IDENTITY */}
      <View
        style={[
          styles.identityCard,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
          },
        ]}
      >
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          Academic Identity
        </Text>

        <View style={styles.identityItem}>
          <Text style={[styles.label, { color: colors.secondaryText }]}>
            Name
          </Text>

          <Text style={[styles.value, { color: colors.text }]}>
            {data.academicIdentity.nama}
          </Text>
        </View>

        <View style={styles.identityItem}>
          <Text style={[styles.label, { color: colors.secondaryText }]}>
            NIM
          </Text>

          <Text style={[styles.value, { color: colors.text }]}>
            {data.academicIdentity.nim}
          </Text>
        </View>

        <View style={styles.identityItem}>
          <Text style={[styles.label, { color: colors.secondaryText }]}>
            Course
          </Text>

          <Text style={[styles.value, { color: colors.text }]}>
            {data.academicIdentity.mataKuliah}
          </Text>
        </View>

        <View style={[styles.identityItem, styles.lastIdentityItem]}>
          <Text style={[styles.label, { color: colors.secondaryText }]}>
            Lecturer
          </Text>

          <Text style={[styles.value, { color: colors.text }]}>
            {data.academicIdentity.dosen}
          </Text>
        </View>
      </View>

      {/* CURRENT SCORE & GRADE */}
      <View style={styles.scoreRow}>
        {/* CURRENT SCORE */}
        <View style={[styles.scoreCard, { backgroundColor: colors.banner }]}>
          <Text style={[styles.scoreLabel, { color: colors.bannerText }]}>
            Current Score
          </Text>

          <Text style={[styles.scoreValue, { color: colors.bannerText }]}>
            {data.currentScore.nilai}
          </Text>

          <Text style={[styles.scoreDescription, { color: colors.bannerText }]}>
            Academic Score
          </Text>
        </View>

        {/* GRADE */}
        <View
          style={[
            styles.gradeCard,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
            },
          ]}
        >
          <Text style={[styles.gradeLabel, { color: colors.secondaryText }]}>
            Grade
          </Text>

          <Text style={[styles.gradeValue, { color: colors.accent }]}>
            {data.currentScore.grade}
          </Text>

          <Text
            style={[styles.gradeDescription, { color: colors.secondaryText }]}
          >
            Final Grade
          </Text>
        </View>
      </View>

      {/* LEARNING POINTS */}
      <View
        style={[
          styles.pointsCard,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
          },
        ]}
      >
        <View style={styles.pointsInfo}>
          <Text style={[styles.pointsLabel, { color: colors.secondaryText }]}>
            Learning Points
          </Text>

          <Text style={[styles.pointsDescription, { color: colors.text }]}>
            Total accumulated points
          </Text>
        </View>

        <Text style={[styles.pointsValue, { color: colors.accent }]}>
          {data.learningPoints.total.toLocaleString("id-ID")}{" "}
          {data.learningPoints.unit}
        </Text>
      </View>

      {/* LEARNING PROGRESS */}
      <View style={styles.progressSection}>
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          Learning Progress
        </Text>

        <Text
          style={[styles.progressSubtitle, { color: colors.secondaryText }]}
        >
          Your learning achievement indicators
        </Text>

        <View style={styles.progressGrid}>
          {data.learningProgress.map((item) => (
            <View key={item.id} style={styles.progressItem}>
              <ProgressCard
                title={item.nama}
                percentage={item.persentase}
                icon={item.nama.charAt(0)}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

// ==========================================
// STYLESHEET
// ==========================================

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 25,
  },

  sectionHeader: {
    marginBottom: 22,
  },

  sectionTitle: {
    fontSize: 26,
    fontWeight: "900",
    marginBottom: 6,
  },

  sectionSubtitle: {
    fontSize: 13,
    lineHeight: 20,
  },

  identityCard: {
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 15,
  },

  identityItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 11,
    borderBottomWidth: 0.5,
    borderBottomColor: "#D9DEE7",
    gap: 12,
  },

  lastIdentityItem: {
    borderBottomWidth: 0,
  },

  label: {
    fontSize: 12,
    flex: 1,
  },

  value: {
    fontSize: 13,
    fontWeight: "700",
    flex: 2,
    textAlign: "right",
  },

  scoreRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 15,
  },

  scoreCard: {
    flex: 1.3,
    minHeight: 145,
    padding: 18,
    borderRadius: 18,
    justifyContent: "center",
  },

  scoreLabel: {
    fontSize: 12,
    fontWeight: "600",
  },

  scoreValue: {
    fontSize: 42,
    fontWeight: "900",
    marginVertical: 5,
  },

  scoreDescription: {
    fontSize: 11,
    opacity: 0.8,
  },

  gradeCard: {
    flex: 1,
    minHeight: 145,
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  gradeLabel: {
    fontSize: 12,
    fontWeight: "600",
  },

  gradeValue: {
    fontSize: 42,
    fontWeight: "900",
    marginVertical: 5,
  },

  gradeDescription: {
    fontSize: 11,
  },

  pointsCard: {
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },

  pointsInfo: {
    flex: 1,
  },

  pointsLabel: {
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 5,
  },

  pointsDescription: {
    fontSize: 11,
  },

  pointsValue: {
    fontSize: 22,
    fontWeight: "900",
  },

  progressSection: {
    marginTop: 5,
  },

  progressSubtitle: {
    fontSize: 12,
    marginTop: -8,
    marginBottom: 16,
  },

  progressGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  progressItem: {
    width: "48%",
  },
});
