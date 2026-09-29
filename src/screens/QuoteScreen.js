import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme';

export default function QuoteScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.contentPadding}>
        <View style={styles.topBar}>
          <Pressable onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={24} color={COLORS.navy} /></Pressable>
          <Text style={styles.screenTitle}>Price Calculator</Text>
          <Text style={{ width: 24 }} />
        </View>

        <View style={styles.formCard}>
          <TextInput style={styles.input} placeholder="Origin" />
          <TextInput style={styles.input} placeholder="Destination" />
          <TextInput style={styles.input} placeholder="Weight" keyboardType="numeric" />
          <TextInput style={styles.input} placeholder="Domestic / International" />
          <TextInput style={styles.input} placeholder="Service Type" />

          <View style={styles.priceCard}>
            <Text style={styles.priceLabel}>Estimated Price</Text>
            <Text style={styles.priceValue}>AED 570</Text>
          </View>

          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Calculate</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: COLORS.bg },
  contentPadding: { padding: 20, paddingBottom: 40 },
  topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, marginTop: 4 },
  screenTitle: { color: COLORS.navy, fontSize: 22, fontWeight: '800' },
  formCard: { backgroundColor: COLORS.white, borderRadius: 20, padding: 18, shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }, elevation: 3 },
  input: { backgroundColor: '#F4F8FF', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, marginBottom: 12, borderWidth: 1, borderColor: COLORS.border, color: COLORS.navy, fontSize: 15 },
  priceCard: { backgroundColor: '#EEF8FF', borderRadius: 14, padding: 14, marginVertical: 14 },
  priceLabel: { color: COLORS.muted, fontSize: 13 },
  priceValue: { marginTop: 8, fontSize: 28, fontWeight: '800', color: COLORS.primary },
  primaryButton: { backgroundColor: COLORS.primary, borderRadius: 14, paddingVertical: 14, alignItems: 'center', justifyContent: 'center' },
  primaryButtonText: { color: COLORS.white, fontWeight: '800', fontSize: 16 },
});
