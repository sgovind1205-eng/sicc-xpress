import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { COLORS } from '../theme';
import { shipmentTimeline } from '../data/mockData';

export default function TrackingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.contentPadding}>
        <View style={styles.topBar}>
          <Pressable onPress={() => navigation.goBack()}><Text>←</Text></Pressable>
          <Text style={styles.screenTitle}>Track Shipment</Text>
          <Text style={{ width: 24 }} />
        </View>

        <View style={styles.formCard}>
          <TextInput style={styles.input} placeholder="Enter AWB / Tracking Number" />
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Track Shipment</Text>
          </Pressable>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>AWB: SICC-2341</Text>
          <Text style={styles.statusBadge}>In Transit</Text>
          <View style={styles.timelineList}>
            {shipmentTimeline.map((item, index) => (
              <View key={item.id} style={styles.timelineItem}>
                <View style={[styles.timelineDot, item.active ? styles.timelineDotActive : styles.timelineDotInactive]} />
                {index < shipmentTimeline.length - 1 && <View style={styles.timelineLine} />}
                <View style={styles.timelineTextBox}>
                  <Text style={[styles.timelineStatus, item.active && styles.timelineStatusActive]}>{item.status}</Text>
                  <Text style={styles.timelineTime}>{item.time}</Text>
                </View>
              </View>
            ))}
          </View>
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
  primaryButton: { backgroundColor: COLORS.primary, borderRadius: 14, paddingVertical: 14, alignItems: 'center', justifyContent: 'center' },
  primaryButtonText: { color: COLORS.white, fontWeight: '800', fontSize: 16 },
  sectionCard: { backgroundColor: COLORS.white, borderRadius: 20, padding: 18, marginTop: 18, borderWidth: 1, borderColor: COLORS.border },
  sectionTitle: { color: COLORS.navy, fontSize: 18, fontWeight: '800', marginBottom: 14 },
  statusBadge: { alignSelf: 'flex-start', backgroundColor: '#EAF9F2', color: COLORS.success, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999, fontWeight: '700', marginBottom: 18 },
  timelineList: { marginTop: 10 },
  timelineItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  timelineDot: { width: 14, height: 14, borderRadius: 7, marginRight: 12 },
  timelineDotActive: { backgroundColor: COLORS.primary },
  timelineDotInactive: { backgroundColor: '#DDE7F5' },
  timelineLine: { position: 'absolute', left: 6, top: 16, bottom: -22, width: 2, backgroundColor: '#DDE7F5' },
  timelineTextBox: { flex: 1, backgroundColor: '#F7FAFF', borderRadius: 12, paddingVertical: 10, paddingHorizontal: 12, borderWidth: 1, borderColor: COLORS.border },
  timelineStatus: { color: COLORS.muted, fontWeight: '700' },
  timelineStatusActive: { color: COLORS.primary },
  timelineTime: { color: COLORS.muted, marginTop: 4, fontSize: 12 },
});
