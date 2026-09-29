import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { COLORS } from '../theme';
import { notifications } from '../data/mockData';

export default function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.contentPadding}>
        <View style={styles.topBar}>
          <Pressable onPress={() => navigation.goBack()}><Text>←</Text></Pressable>
          <Text style={styles.screenTitle}>Notifications</Text>
          <Text style={{ width: 24 }} />
        </View>

        {notifications.map((item) => (
          <View key={item.id} style={styles.notifyCard}>
            <View style={[styles.notifyDot, item.type === 'success' ? styles.notifySuccess : styles.notifyInfo]} />
            <View style={styles.notifyContent}>
              <Text style={styles.notifyTitle}>{item.title}</Text>
              <Text style={styles.notifyText}>{item.text}</Text>
              <Text style={styles.notifyTime}>{item.time}</Text>
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
  notifyCard: { backgroundColor: COLORS.white, borderRadius: 18, padding: 16, marginBottom: 12, flexDirection: 'row', borderWidth: 1, borderColor: COLORS.border },
  notifyDot: { width: 12, height: 12, borderRadius: 6, marginRight: 12, marginTop: 6 },
  notifySuccess: { backgroundColor: COLORS.success },
  notifyInfo: { backgroundColor: COLORS.accent },
  notifyContent: { flex: 1 },
  notifyTitle: { color: COLORS.navy, fontWeight: '800', marginBottom: 4 },
  notifyText: { color: COLORS.muted, lineHeight: 20 },
  notifyTime: { color: COLORS.muted, fontSize: 12, marginTop: 8 },
});
