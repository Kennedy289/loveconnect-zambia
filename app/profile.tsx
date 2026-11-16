
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heart}>❤️</Text>
      <Text style={styles.title}>My Profile</Text>

      <View style={styles.card}>
        <Text style={styles.name}>Your Name</Text>
        <Text style={styles.detail}>Your age</Text>
        <Text style={styles.detail}>Your city, Zambia</Text>
        <Text style={styles.detail}>Your interests</Text>
      </View>

      <Text style={styles.message}>
        Your LoveConnect journey starts here!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  heart: {
    fontSize: 65,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D6336C',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 25,
    borderRadius: 16,
    alignItems: 'center',
    gap: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 16,
    color: '#666',
  },
  message: {
    marginTop: 25,
    color: '#D6336C',
    fontSize: 16,
    textAlign: 'center',
  },
});
