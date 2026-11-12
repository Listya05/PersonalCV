import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

import { useAppTheme } from "../context/ThemeContext";
import profileData from "../data/profile.json";

// ==========================================
// PROPS
// ==========================================

type AboutSectionProps = {
  data: typeof profileData;
};

type InfoItemProps = {
  icon: string;
  label: string;
  value: string;
};

// ==========================================
// INFO ITEM COMPONENT
// ==========================================

function InfoItem({ icon, label, value }: InfoItemProps) {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        styles.infoItem,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ]}
    >
      <View
        style={[styles.iconBox, { backgroundColor: colors.iconBackground }]}
      >
        <Text style={[styles.iconText, { color: colors.accent }]}>{icon}</Text>
      </View>

      <Text style={[styles.infoLabel, { color: colors.secondaryText }]}>
        {label}
      </Text>

      <Text style={[styles.infoValue, { color: colors.text }]}>{value}</Text>
    </View>
  );
}

// ==========================================
// ABOUT SECTION
// ==========================================

export default function AboutSection({ data }: AboutSectionProps) {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 380;

  const { colors } = useAppTheme();

  // DATA PERSONAL INFORMATION
  const personalInformation = [
    {
      icon: "ID",
      label: "NIM",
      value: data.nim,
    },
    {
      icon: "NM",
      label: "NAMA LENGKAP",
      value: data.nama,
    },
    {
      icon: "PS",
      label: "PROGRAM STUDI",
      value: data.prodi,
    },
    {
      icon: "PT",
      label: "PERGURUAN TINGGI",
      value: data.perguruanTinggi,
    },
    {
      icon: "S1",
      label: "JENJANG PENDIDIKAN",
      value: data.jenjang,
    },
    {
      icon: "ST",
      label: "STATUS AKADEMIK",
      value: data.statusAkademik,
    },
  ];

  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: isSmallScreen ? 18 : 24,
        },
      ]}
    >
      {/* ================================== */}
      {/* PERSONAL INFORMATION */}
      {/* ================================== */}

      <View style={styles.sectionHeading}>
        <View>
          <Text style={[styles.sectionEyebrow, { color: colors.accent }]}>
            GETTING TO KNOW ME
          </Text>

          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Personal Information
          </Text>
        </View>
      </View>

      {/* INFORMATION GRID */}

      <View style={styles.infoGrid}>
        {personalInformation.map((item, index) => (
          <View
            key={index}
            style={[
              styles.infoGridItem,
              {
                width: isSmallScreen ? "48%" : "48.5%",
              },
            ]}
          >
            <InfoItem icon={item.icon} label={item.label} value={item.value} />
          </View>
        ))}
      </View>

      {/* ================================== */}
      {/* ABOUT ME */}
      {/* ================================== */}

      <View style={styles.aboutSection}>
        <View style={styles.sectionHeading}>
          <View>
            <Text style={[styles.sectionEyebrow, { color: colors.accent }]}>
              PERSONAL INTRODUCTION
            </Text>

            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              About Me
            </Text>
          </View>
        </View>

        {/* ABOUT CARD */}

        <View
          style={[
            styles.aboutCard,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
            },
          ]}
        >
          <Text style={[styles.aboutTitle, { color: colors.text }]}>
            {data.aboutTitle}
          </Text>

          <Text
            style={[styles.aboutDescription, { color: colors.secondaryText }]}
          >
            {data.aboutDescription}
          </Text>
        </View>

        {/* PROFESSION & INTEREST */}

        <Text style={[styles.subSectionTitle, { color: colors.text }]}>
          Profession & Interest
        </Text>

        <View
          style={[
            styles.interestContainer,
            {
              flexDirection: isSmallScreen ? "column" : "row",
            },
          ]}
        >
          {/* PROFESSION CARD */}

          <View
            style={[
              styles.interestCard,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
              },
            ]}
          >
            <View
              style={[
                styles.interestIcon,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <Text style={[styles.interestIconText, { color: colors.accent }]}>
                01
              </Text>
            </View>

            <Text
              style={[styles.interestLabel, { color: colors.secondaryText }]}
            >
              PROFESI
            </Text>

            <Text style={[styles.interestValue, { color: colors.text }]}>
              {data.profesi}
            </Text>
          </View>

          {/* INTEREST CARD */}

          <View
            style={[
              styles.interestCard,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
              },
            ]}
          >
            <View
              style={[
                styles.interestIcon,
                { backgroundColor: colors.iconBackground },
              ]}
            >
              <Text style={[styles.interestIconText, { color: colors.accent }]}>
                02
              </Text>
            </View>

            <Text
              style={[styles.interestLabel, { color: colors.secondaryText }]}
            >
              BIDANG MINAT
            </Text>

            <Text style={[styles.interestValue, { color: colors.text }]}>
              {data.bidangMinat}
            </Text>
          </View>
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
    width: "100%",
    alignSelf: "center",
  },

  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 19,
  },

  sectionEyebrow: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.3,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "800",
    marginTop: 7,
  },

  // PERSONAL INFORMATION GRID

  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },

  infoGridItem: {
    minWidth: 0,
  },

  infoItem: {
    flex: 1,
    minHeight: 145,
    borderRadius: 17,
    padding: 14,
    borderWidth: 1,
    elevation: 3,
  },

  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  iconText: {
    fontSize: 10,
    fontWeight: "900",
  },

  infoLabel: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.7,
    marginBottom: 7,
  },

  infoValue: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
    flexShrink: 1,
  },

  // ABOUT ME

  aboutSection: {
    marginTop: 35,
  },

  aboutCard: {
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    elevation: 3,
  },

  aboutTitle: {
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 12,
  },

  aboutDescription: {
    fontSize: 13,
    lineHeight: 23,
    textAlign: "justify",
  },

  // PROFESSION & INTEREST

  subSectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    marginTop: 25,
    marginBottom: 14,
  },

  interestContainer: {
    gap: 12,
  },

  interestCard: {
    flex: 1,
    borderRadius: 16,
    padding: 17,
    borderWidth: 1,
    elevation: 3,
  },

  interestIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
  },

  interestIconText: {
    fontSize: 11,
    fontWeight: "900",
  },

  interestLabel: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 7,
  },

  interestValue: {
    fontSize: 13,
    fontWeight: "700",
  },
});
