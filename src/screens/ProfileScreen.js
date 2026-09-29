import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme';

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.contentPadding}>
        <View style={styles.topBar}>
          <Pressable onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={24} color={COLORS.navy} /></Pressable>
          <Text style={styles.screenTitle}>Customer Profile</Text>
          <Pressable onPress={() => navigation.navigate('Notifications')}><Ionicons name="notifications-outline" size={24} color={COLORS.navy} /></Pressable>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.avatarCircle}><Text style={styles.avatarText}>NT</Text></View>
          <Text style={styles.profileName}>Nadia Turner</Text>
          <Text style={styles.profileMeta}>+971 55 123 8900</Text>
          <Text style={styles.profileMeta}>nadia.turner@sicc.com</Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Saved Addresses</Text>
          <Text style={styles.addressText}>Home: 14 Marina Road, Dubai, UAE</Text>
          <Text style={styles.addressText}>Office: 6th Floor, Business Bay, Dubai</Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Order History</Text>
          <View style={styles.historyItem}><Text style={styles.historyText}>SICC-2341</Text><Text style={styles.historyTextMuted}>International • In Transit</Text></View>
          <View style={styles.historyItem}><Text style={styles.historyText}>SICC-5531</Text><Text style={styles.historyTextMuted}>Domestic • Delivered</Text></View>
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
  profileCard: { alignItems: 'center', backgroundColor: COLORS.white, borderRadius: 20, padding: 22, marginBottom: 18, borderWidth: 1, borderColor: COLORS.border },
  avatarCircle: { width: 82, height: 82, borderRadius: 41, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  avatarText: { color: COLORS.white, fontWeight: '800', fontSize: 28 },
  profileName: { color: COLORS.navy, fontSize: 24, fontWeight: '800' },
  profileMeta: { color: COLORS.muted, marginTop: 6 },
  sectionCard: { backgroundColor: COLORS.white, borderRadius: 20, padding: 18, marginBottom: 18, borderWidth: 1, borderColor: COLORS.border },
  sectionTitle: { color: COLORS.navy, fontSize: 18, fontWeight: '800', marginBottom: 14 },
  addressText: { color: COLORS.muted, lineHeight: 22, fontSize: 14 },
  historyItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  historyText: { color: COLORS.navy, fontWeight: '700' },
  historyTextMuted: { color: COLORS.muted },
});
