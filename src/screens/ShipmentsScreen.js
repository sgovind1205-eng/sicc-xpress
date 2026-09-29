import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme';
import { activeShipments, deliveredShipments, cancelledShipments } from '../data/mockData';

export default function ShipmentsScreen({ navigation }) {
  const [tab, setTab] = useState('Active');
  const list = tab === 'Active' ? activeShipments : tab === 'Delivered' ? deliveredShipments : cancelledShipments;

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.contentPadding}>
        <View style={styles.topBar}>
          <Pressable onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={24} color={COLORS.navy} /></Pressable>
          <Text style={styles.screenTitle}>My Shipments</Text>
          <Ionicons name="filter-outline" size={22} color={COLORS.navy} />
        </View>

        <View style={styles.segmentRow}>
          {['Active', 'Delivered', 'Cancelled'].map((item) => (
            <Pressable key={item} style={[styles.segment, tab === item && styles.segmentActive]} onPress={() => setTab(item)}>
              <Text style={[styles.segmentText, tab === item && styles.segmentTextActive]}>{item}</Text>
            </Pressable>
          ))}
        </View>

        {list.map((item) => (
          <View key={item.id} style={styles.shipmentCard}>
            <View style={styles.shipmentHeader}>
              <Text style={styles.shipmentId}>{item.id}</Text>
              <Text style={[styles.shipmentStatus, { color: item.color }]}>{item.status}</Text>
            </View>
            <Text style={styles.shipmentRoute}>{item.destination}</Text>
            <View style={styles.shipmentMeta}>
              <Text style={styles.metaText}>{item.date}</Text>
              <Text style={styles.metaValue}>{item.value}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: COLORS.bg },
  contentPadding: { padding: 20, paddingBottom: 40 },
  topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, marginTop: 4 },
  screenTitle: { color: COLORS.navy, fontSize: 22, fontWeight: '800' },
  segmentRow: { flexDirection: 'row', backgroundColor: '#EDF5FF', borderRadius: 12, padding: 4, marginBottom: 14 },
  segment: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  segmentActive: { backgroundColor: COLORS.primary },
  segmentText: { color: COLORS.primary, fontWeight: '700' },
  segmentTextActive: { color: COLORS.white },
  shipmentCard: { backgroundColor: COLORS.white, borderRadius: 18, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: COLORS.border },
  shipmentHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  shipmentId: { color: COLORS.navy, fontWeight: '800', fontSize: 16 },
  shipmentStatus: { fontWeight: '700', fontSize: 12 },
  shipmentRoute: { color: COLORS.muted, marginBottom: 12 },
  shipmentMeta: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  metaText: { color: COLORS.muted },
  metaValue: { color: COLORS.primary, fontWeight: '800' },
});
