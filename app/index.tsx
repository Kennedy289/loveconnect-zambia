
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>❤️ LoveConnect Zambia</Text>

      <Text style={styles.heading}>
        Find someone special
      </Text>

      <Text style={styles.subtitle}>
        Connect with singles across Zambia.
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>

      <Pressable style={styles.loginButton}>
        <Text style={styles.loginText}>Log In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#D6336C',
    marginBottom: 45,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 12,
    marginBottom: 35,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#D6336C',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  loginButton: {
    padding: 16,
    marginTop: 10,
  },
  loginText: {
    color: '#D6336C',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
