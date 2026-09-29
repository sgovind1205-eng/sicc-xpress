import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme';

export default function BookingScreen({ navigation }) {
  const [domestic, setDomestic] = useState(true);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.contentPadding}>
        <View style={styles.topBar}>
          <Pressable onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={24} color={COLORS.navy} /></Pressable>
          <Text style={styles.screenTitle}>Courier Booking</Text>
          <Text style={{ width: 24 }} />
        </View>

        <View style={styles.formCard}>
          <Text style={styles.label}>Service Type</Text>
          <View style={styles.segmentRow}>
            <Pressable style={[styles.segment, domestic && styles.segmentActive]} onPress={() => setDomestic(true)}>
              <Text style={[styles.segmentText, domestic && styles.segmentTextActive]}>Domestic</Text>
            </Pressable>
            <Pressable style={[styles.segment, !domestic && styles.segmentActive]} onPress={() => setDomestic(false)}>
              <Text style={[styles.segmentText, !domestic && styles.segmentTextActive]}>International</Text>
            </Pressable>
          </View>

          <TextInput style={styles.input} placeholder="Sender Name" />
          <TextInput style={styles.input} placeholder="Sender Mobile" keyboardType="phone-pad" />
          <TextInput style={styles.input} placeholder="Sender Address" multiline />
          <TextInput style={styles.input} placeholder="Receiver Name" />
          <TextInput style={styles.input} placeholder="Receiver Mobile" keyboardType="phone-pad" />
          <TextInput style={styles.input} placeholder="Receiver Address" multiline />
          <TextInput style={styles.input} placeholder="Parcel Type" />
          <TextInput style={styles.input} placeholder="Weight (kg)" keyboardType="numeric" />
          <TextInput style={styles.input} placeholder="Dimensions (L x W x H cm)" />
          <TextInput style={styles.input} placeholder="Pickup Date" />
          <TextInput style={styles.input} placeholder="Delivery Option" />

          <View style={styles.priceCard}>
            <Text style={styles.priceLabel}>Estimated Shipping Charge</Text>
            <Text style={styles.priceValue}>AED 670</Text>
          </View>

          <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('MainTabs')}>
            <Text style={styles.primaryButtonText}>Confirm Booking</Text>
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
  label: { color: COLORS.navy, fontWeight: '700', marginBottom: 8 },
  segmentRow: { flexDirection: 'row', backgroundColor: '#EDF5FF', borderRadius: 12, padding: 4, marginBottom: 14 },
  segment: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  segmentActive: { backgroundColor: COLORS.primary },
  segmentText: { color: COLORS.primary, fontWeight: '700' },
  segmentTextActive: { color: COLORS.white },
  input: { backgroundColor: '#F4F8FF', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, marginBottom: 12, borderWidth: 1, borderColor: COLORS.border, color: COLORS.navy, fontSize: 15 },
  priceCard: { backgroundColor: '#EEF8FF', borderRadius: 14, padding: 14, marginVertical: 14 },
  priceLabel: { color: COLORS.muted, fontSize: 13 },
  priceValue: { marginTop: 8, fontSize: 28, fontWeight: '800', color: COLORS.primary },
  primaryButton: { backgroundColor: COLORS.primary, borderRadius: 14, paddingVertical: 14, alignItems: 'center', justifyContent: 'center' },
  primaryButtonText: { color: COLORS.white, fontWeight: '800', fontSize: 16 },
});
