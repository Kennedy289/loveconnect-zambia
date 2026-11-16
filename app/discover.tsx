
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

const profiles = [
  { name: 'Mary', age: 23, city: 'Lusaka', about: 'I enjoy music and travelling ❤️' },
  { name: 'Grace', age: 25, city: 'Ndola', about: 'Looking for a genuine connection 💕' },
  { name: 'Daniel', age: 27, city: 'Kitwe', about: 'I love football and adventure ⚽' },
];

export default function DiscoverScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Discover ❤️</Text>
      <Text style={styles.subtitle}>Meet singles across Zambia</Text>

      {profiles.map((person) => (
        <View key={person.name} style={styles.card}>
          <Text style={styles.avatar}>👤</Text>
          <Text style={styles.name}>{person.name}, {person.age}</Text>
          <Text style={styles.city}>📍 {person.city}</Text>
          <Text style={styles.about}>{person.about}</Text>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Like ❤️</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F7',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D6336C',
    marginTop: 35,
  },
  subtitle: {
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 22,
    borderRadius: 16,
    marginBottom: 18,
    alignItems: 'center',
  },
  avatar: {
    fontSize: 55,
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 8,
  },
  city: {
    color: '#777',
    marginTop: 5,
  },
  about: {
    marginTop: 12,
    textAlign: 'center',
    color: '#555',
  },
  button: {
    backgroundColor: '#D6336C',
    padding: 13,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 18,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
