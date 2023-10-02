import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { VerPersonagem } from './src/components/VerPersonagem/index'

export default function App() {
  return (
    <View style={styles.container}>
      <VerPersonagem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
