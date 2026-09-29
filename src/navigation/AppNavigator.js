import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SplashScreen from './screens/SplashScreen';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import TrackingScreen from './screens/TrackingScreen';
import ShipmentsScreen from './screens/ShipmentsScreen';
import QuoteScreen from './screens/QuoteScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import AdminDashboardScreen from './screens/AdminDashboardScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#0F2F5C',
        tabBarInactiveTintColor: '#6B7A90',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          paddingBottom: 10,
          paddingTop: 8,
          height: 78,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.08,
          shadowRadius: 12,
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home-outline';
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          if (route.name === 'Tracking') iconName = focused ? 'location' : 'location-outline';
          if (route.name === 'Shipments') iconName = focused ? 'cube' : 'cube-outline';
          if (route.name === 'Quote') iconName = focused ? 'calculator' : 'calculator-outline';
          if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
          if (route.name === 'Admin') iconName = focused ? 'shield-checkmark' : 'shield-checkmark-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tracking" component={TrackingScreen} />
      <Tab.Screen name="Shipments" component={ShipmentsScreen} />
      <Tab.Screen name="Quote" component={QuoteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Admin" component={AdminDashboardScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Tracking" component={TrackingScreen} />
        <Stack.Screen name="Shipments" component={ShipmentsScreen} />
        <Stack.Screen name="Quote" component={QuoteScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Admin" component={AdminDashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
