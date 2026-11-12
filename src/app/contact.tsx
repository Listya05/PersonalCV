import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ContactForm from "@/components/ContactForm";
import { useAppTheme } from "@/context/ThemeContext";

export default function ContactPage() {
  const { colors } = useAppTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={[styles.subtitle, { color: colors.accent }]}>
            LET'S CONNECT
          </Text>

          <Text style={[styles.title, { color: colors.text }]}>
            Get in Touch
          </Text>

          <Text style={[styles.description, { color: colors.secondaryText }]}>
            Punya pertanyaan, ingin berdiskusi, atau tertarik untuk
            berkolaborasi? Silakan kirim pesan melalui formulir di bawah ini.
          </Text>
        </View>

        <ContactForm />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 32,
  },

  header: {
    marginBottom: 28,
  },

  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    lineHeight: 23,
  },
});
