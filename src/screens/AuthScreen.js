import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import { COLORS } from '../theme';

export default function AuthScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Login');

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.contentPadding}>
        <View style={styles.authHeader}>
          <View style={styles.logoMini}>
            <Text style={styles.logoMiniText}>S</Text>
          </View>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Deliver with confidence</Text>
        </View>

        <View style={styles.tabRow}>
          {['Login', 'Sign Up'].map((tab) => (
            <Pressable
              key={tab}
              style={[styles.tabButton, activeTab === tab && styles.tabButtonActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.formCard}>
          <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" />
          {activeTab === 'Sign Up' && <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />}
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />
          {activeTab === 'Sign Up' && <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />}
          <TextInput style={styles.input} placeholder="OTP Verification" keyboardType="number-pad" />

          {activeTab === 'Login' && (
            <Pressable style={styles.forgot}><Text style={styles.forgotText}>Forgot Password?</Text></Pressable>
          )}

          <Pressable style={styles.primaryButton} onPress={() => navigation.replace('MainTabs')}>
            <Text style={styles.primaryButtonText}>{activeTab === 'Login' ? 'Login' : 'Create Account'}</Text>
          </Pressable>
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
  contentPadding: {
    padding: 20,
    paddingBottom: 40,
  },
  authHeader: {
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 22,
  },
  logoMini: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  logoMiniText: {
    fontSize: 30,
    fontWeight: '800',
    color: COLORS.white,
  },
  title: {
    fontSize: 30,
    color: COLORS.navy,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.muted,
    marginTop: 8,
  },
  tabRow: {
    flexDirection: 'row',
    backgroundColor: '#DDEAFE',
    borderRadius: 14,
    padding: 6,
    marginBottom: 18,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  tabButtonActive: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    fontWeight: '700',
    color: COLORS.primary,
  },
  tabTextActive: {
    color: COLORS.white,
  },
  formCard: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  input: {
    backgroundColor: '#F4F8FF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    color: COLORS.navy,
    fontSize: 15,
  },
  forgot: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  forgotText: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: COLORS.white,
    fontWeight: '800',
    fontSize: 16,
  },
});
