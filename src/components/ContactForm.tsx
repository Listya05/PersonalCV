import { useState } from "react";

import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { useAppTheme } from "../context/ThemeContext";

// ==========================================
// CONTACT FORM COMPONENT
// ==========================================

export default function ContactForm() {
  // THEME
  const { isDark, colors } = useAppTheme();

  // STATE FORM
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  // STATE FEEDBACK
  const [feedback, setFeedback] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // PROSES FORM
  const handleSubmit = () => {
    // VALIDASI KOLOM KOSONG
    if (!nama.trim() || !email.trim() || !pesan.trim()) {
      setIsSuccess(false);
      setFeedback("Mohon lengkapi semua kolom formulir terlebih dahulu.");
      return;
    }

    // VALIDASI FORMAT EMAIL
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setIsSuccess(false);
      setFeedback("Format email tidak valid. Silakan periksa kembali.");
      return;
    }

    // JIKA VALIDASI BERHASIL
    setIsSuccess(true);
    setFeedback(`Terima kasih, ${nama.trim()}! Pesan kamu berhasil diproses.`);

    // KOSONGKAN FORM
    setNama("");
    setEmail("");
    setPesan("");
  };

  return (
    <View style={styles.contactSection}>
      {/* SECTION HEADING */}

      <View style={styles.sectionHeading}>
        <View>
          <Text style={[styles.sectionEyebrow, { color: colors.accent }]}>
            LET'S CONNECT
          </Text>

          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Contact Me
          </Text>
        </View>
      </View>

      {/* CONTACT CARD */}

      <View
        style={[
          styles.contactCard,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
          },
        ]}
      >
        <Text
          style={[styles.contactDescription, { color: colors.secondaryText }]}
        >
          Punya pertanyaan atau ingin menghubungi saya? Silakan isi formulir
          berikut.
        </Text>

        {/* INPUT NAMA */}

        <View style={styles.inputGroup}>
          <Text style={[styles.inputLabel, { color: colors.text }]}>
            Nama Lengkap
          </Text>

          <TextInput
            style={[
              styles.textInput,
              {
                backgroundColor: colors.iconBackground,
                borderColor: colors.border,
                color: colors.text,
              },
            ]}
            placeholder="Masukkan nama lengkap"
            placeholderTextColor={colors.secondaryText}
            value={nama}
            onChangeText={setNama}
            autoCapitalize="words"
            returnKeyType="next"
          />
        </View>

        {/* INPUT EMAIL */}

        <View style={styles.inputGroup}>
          <Text style={[styles.inputLabel, { color: colors.text }]}>Email</Text>

          <TextInput
            style={[
              styles.textInput,
              {
                backgroundColor: colors.iconBackground,
                borderColor: colors.border,
                color: colors.text,
              },
            ]}
            placeholder="contoh@email.com"
            placeholderTextColor={colors.secondaryText}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />
        </View>

        {/* INPUT PESAN */}

        <View style={styles.inputGroup}>
          <Text style={[styles.inputLabel, { color: colors.text }]}>Pesan</Text>

          <TextInput
            style={[
              styles.textInput,
              styles.messageInput,
              {
                backgroundColor: colors.iconBackground,
                borderColor: colors.border,
                color: colors.text,
              },
            ]}
            placeholder="Tuliskan pesan kamu di sini..."
            placeholderTextColor={colors.secondaryText}
            value={pesan}
            onChangeText={setPesan}
            multiline
            textAlignVertical="top"
          />
        </View>

        {/* BUTTON SUBMIT */}

        <Pressable
          style={({ pressed }) => [
            styles.submitButton,
            { backgroundColor: colors.banner },
            pressed && styles.submitButtonPressed,
          ]}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Kirim Pesan</Text>

          <Text style={[styles.submitButtonArrow, { color: colors.accent }]}>
            →
          </Text>
        </Pressable>

        {/* FEEDBACK */}

        {feedback !== "" && (
          <View
            style={[
              styles.feedbackBox,
              {
                backgroundColor: isSuccess
                  ? isDark
                    ? "#263F35"
                    : "#E8F5ED"
                  : isDark
                    ? "#493333"
                    : "#FCEDEC",
              },
            ]}
          >
            <Text
              style={[
                styles.feedbackText,
                {
                  color: isSuccess ? "#54B987" : "#E47C78",
                },
              ]}
            >
              {feedback}
            </Text>
          </View>
        )}

        {/* FORM NOTE */}

        <Text style={[styles.formNote, { color: colors.secondaryText }]}>
          * Formulir ini merupakan simulasi pengiriman pesan.
        </Text>
      </View>
    </View>
  );
}

// ==========================================
// STYLING
// ==========================================

const styles = StyleSheet.create({
  contactSection: {
    marginTop: 38,
    paddingHorizontal: 24,
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

  contactCard: {
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    elevation: 3,
  },

  contactDescription: {
    fontSize: 12,
    lineHeight: 21,
    marginBottom: 22,
  },

  inputGroup: {
    marginBottom: 17,
  },

  inputLabel: {
    fontSize: 12,
    fontWeight: "800",
    marginBottom: 9,
  },

  textInput: {
    minHeight: 48,
    borderWidth: 1,
    borderRadius: 11,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 13,
  },

  messageInput: {
    height: 115,
    paddingTop: 13,
  },

  submitButton: {
    minHeight: 50,
    borderRadius: 12,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  submitButtonPressed: {
    opacity: 0.8,
  },

  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },

  submitButtonArrow: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },

  feedbackBox: {
    borderRadius: 10,
    padding: 13,
    marginTop: 15,
  },

  feedbackText: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 19,
  },

  formNote: {
    fontSize: 10,
    marginTop: 15,
    textAlign: "center",
    lineHeight: 16,
  },
});
