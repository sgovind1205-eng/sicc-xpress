import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { COLORS } from '../theme';
import { supabase } from '../supabase';

export default function AuthScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Login');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      Alert.alert('Required', 'Please enter email and password.');
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (error) {
      Alert.alert('Login Failed', error.message);
      return;
    }

    navigation.replace('MainTabs');
  };

  const handleSignUp = async () => {
    if (!email.trim() || !password || !confirmPassword) {
      Alert.alert('Required', 'Please enter all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Password Error', 'Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        'Password Error',
        'Password must be at least 6 characters.'
      );
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          mobile: mobile.trim(),
        },
      },
    });

    setLoading(false);

    if (error) {
      Alert.alert('Sign Up Failed', error.message);
      return;
    }

    if (data.session) {
      Alert.alert('Success', 'Account created successfully.');
      navigation.replace('MainTabs');
    } else {
      Alert.alert(
        'Account Created',
        'Please check your email and confirm your account before logging in.'
      );
      setActiveTab('Login');
    }
  };

  const handleForgotPassword = async () => {
    if (!email.trim()) {
      Alert.alert(
        'Enter Email',
        'Please enter your email address first.'
      );
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(
      email.trim()
    );

    setLoading(false);

    if (error) {
      Alert.alert('Error', error.message);
      return;
    }

    Alert.alert(
      'Password Reset',
      'Password reset instructions have been sent to your email.'
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.contentPadding}>
        <View style={styles.authHeader}>
          <View style={styles.logoMini}>
            <Text style={styles.logoMiniText}>S</Text>
          </View>

          <Text style={styles.title}>Welcome</Text>

          <Text style={styles.subtitle}>
            Deliver with confidence
          </Text>
        </View>

        <View style={styles.tabRow}>
          {['Login', 'Sign Up'].map((tab) => (
            <Pressable
              key={tab}
              style={[
                styles.tabButton,
                activeTab === tab && styles.tabButtonActive,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.tabTextActive,
                ]}
              >
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.formCard}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#777"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          {activeTab === 'Sign Up' && (
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              placeholderTextColor="#777"
              value={mobile}
              onChangeText={setMobile}
              keyboardType="phone-pad"
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#777"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {activeTab === 'Sign Up' && (
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#777"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          )}

          {activeTab === 'Login' && (
            <Pressable
              style={styles.forgot}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotText}>
                Forgot Password?
              </Text>
            </Pressable>
          )}

          <Pressable
            style={[
              styles.primaryButton,
              loading && styles.disabledButton,
            ]}
            disabled={loading}
            onPress={
              activeTab === 'Login'
                ? handleLogin
                : handleSignUp
            }
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.primaryButtonText}>
                {activeTab === 'Login'
                  ? 'Login'
                  : 'Create Account'}
              </Text>
            )}
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
    elevation: 3,
  },

  input: {
    backgroundColor: '#F4F8FF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginBottom: 14,
    color: COLORS.navy,
    fontSize: 15,
  },

  forgot: {
    alignItems: 'flex-end',
    marginBottom: 18,
  },

  forgotText: {
    color: COLORS.primary,
    fontWeight: '600',
  },

  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  disabledButton: {
    opacity: 0.7,
  },

  primaryButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '800',
  },
});