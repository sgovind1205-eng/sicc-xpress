import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme';
import { quickActions } from '../data/mockData';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView>
        <View style={styles.headerCard}>
          <Text style={styles.headerGreeting}>Good Morning</Text>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.userName}>Nadia Turner</Text>
              <Text style={styles.userSubtitle}>Premium Courier Client</Text>
            </View>
            <Pressable style={styles.notificationButton} onPress={() => navigation.navigate('Notifications')}>
              <Ionicons name="notifications-outline" size={22} color={COLORS.white} />
            </Pressable>
          </View>
        </View>

        <View style={styles.quickGrid}>
          {quickActions.map((action) => (
            <Pressable key={action.id} style={styles.quickCard} onPress={() => navigation.navigate(action.route)}>
              <View style={styles.quickIcon}><Ionicons name={action.icon} size={26} color={COLORS.primary} /></View>
              <Text style={styles.quickTitle}>{action.title}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Courier Summary</Text>
          <View style={styles.summaryGrid}>
            <View style={styles.summaryBox}><Text style={styles.summaryLabel}>Active</Text><Text style={styles.summaryValue}>04</Text></View>
            <View style={styles.summaryBox}><Text style={styles.summaryLabel}>Delivered</Text><Text style={styles.summaryValue}>18</Text></View>
            <View style={styles.summaryBox}><Text style={styles.summaryLabel}>Pending</Text><Text style={styles.summaryValue}>02</Text></View>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Recent Pickup & Delivery</Text>
          <View style={styles.addressCard}>
            <View style={styles.addressRow}><Ionicons name="location-outline" size={18} color={COLORS.primary} /><Text style={styles.addressTitle}>Pickup Address</Text></View>
            <Text style={styles.addressText}>14 Marina Road, Dubai, UAE</Text>
          </View>
          <View style={styles.addressCard}>
            <View style={styles.addressRow}><Ionicons name="flag-outline" size={18} color={COLORS.primary} /><Text style={styles.addressTitle}>Delivery Address</Text></View>
            <Text style={styles.addressText}>22 Regent Street, London, UK</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  headerCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 20,
    marginTop: 12,
    marginBottom: 18,
  },
  headerGreeting: {
    color: '#D9EDFF',
    fontSize: 14,
  },
  headerRow: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '800',
  },
  userSubtitle: {
    color: '#D7EBFF',
    fontSize: 13,
    marginTop: 4,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 18,
    paddingHorizontal: 8,
  },
  quickCard: {
    width: (width - 60) / 2,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  quickIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: COLORS.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  quickTitle: {
    color: COLORS.navy,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 13,
  },
  sectionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  sectionTitle: {
    color: COLORS.navy,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 14,
  },
  summaryGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryBox: {
    flex: 1,
    backgroundColor: '#F3F8FF',
    borderRadius: 14,
    padding: 14,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  summaryLabel: {
    color: COLORS.muted,
    fontSize: 12,
  },
  summaryValue: {
    color: COLORS.primary,
    fontSize: 22,
    fontWeight: '800',
    marginTop: 6,
  },
  addressCard: {
    backgroundColor: '#F9FBFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  addressTitle: {
    color: COLORS.navy,
    fontWeight: '700',
    marginLeft: 8,
  },
  addressText: {
    color: COLORS.muted,
    lineHeight: 22,
    fontSize: 14,
  },
});
