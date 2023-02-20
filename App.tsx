import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'react-native-rapi-ui';
import Navigation from '@/nav/Navigation';
import { AuthProvider } from '@/providers/AuthProvider';
import Home from '@/screens/Home';

export default function App() {
  return (
    <ThemeProvider theme="dark">
      <AuthProvider>
        <Navigation />
      </AuthProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}