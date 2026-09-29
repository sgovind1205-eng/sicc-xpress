import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../theme';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('Auth'), 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoCircle}>
        <Text style={styles.logoLetter}>S</Text>
      </View>
      <Text style={styles.logoText}>SICC Xpress</Text>
      <Text style={styles.tagline}>Fast, Safe & Reliable Courier Service</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 110,
    height: 110,
    borderRadius: 28,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  logoLetter: {
    fontSize: 52,
    fontWeight: '800',
    color: COLORS.primary,
  },
  logoText: {
    fontSize: 34,
    fontWeight: '800',
    color: COLORS.white,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#D7EBFF',
    letterSpacing: 0.5,
  },
});
