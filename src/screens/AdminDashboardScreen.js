import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { COLORS } from '../theme';
import { adminMetrics } from '../data/mockData';

export default function AdminDashboardScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.contentPadding}>
        <View style={styles.topBar}>
          <Text style={styles.screenTitle}>Admin Dashboard</Text>
        </View>

        <View style={styles.metricsGrid}>
          {adminMetrics.map((item) => (
            <View key={item.label} style={styles.metricBox}>
              <Text style={styles.metricValue}>{item.value}</Text>
              <Text style={styles.metricLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.adminPanel}>
          <Text style={styles.sectionTitle}>Operations</Text>
          <View style={styles.adminActionGrid}>
            <Pressable style={styles.adminButton}><Text style={styles.adminButtonText}>Customer Mgmt</Text></Pressable>
            <Pressable style={styles.adminButton}><Text style={styles.adminButtonText}>Booking Mgmt</Text></Pressable>
            <Pressable style={styles.adminButton}><Text style={styles.adminButtonText}>Shipment Mgmt</Text></Pressable>
            <Pressable style={styles.adminButton}><Text style={styles.adminButtonText}>AWB Generation</Text></Pressable>
            <Pressable style={styles.adminButton}><Text style={styles.adminButtonText}>Pricing</Text></Pressable>
            <Pressable style={styles.adminButton}><Text style={styles.adminButtonText}>Reports</Text></Pressable>
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
  metricsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 18 },
  metricBox: { width: 155, backgroundColor: COLORS.primary, borderRadius: 18, padding: 18, marginBottom: 14 },
  metricValue: { color: COLORS.white, fontSize: 28, fontWeight: '800' },
  metricLabel: { color: '#D7EBFF', marginTop: 6 },
  adminPanel: { backgroundColor: COLORS.white, borderRadius: 20, padding: 18, borderWidth: 1, borderColor: COLORS.border },
  sectionTitle: { color: COLORS.navy, fontSize: 18, fontWeight: '800', marginBottom: 14 },
  adminActionGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  adminButton: { width: 140, backgroundColor: '#F2F8FF', borderRadius: 14, paddingVertical: 14, alignItems: 'center', marginBottom: 10, borderWidth: 1, borderColor: COLORS.border },
  adminButtonText: { color: COLORS.navy, fontWeight: '700' },
});
