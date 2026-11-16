
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [interestedIn, setInterestedIn] = useState('');

  function register() {
    if (!name || !age || !city || !gender || !interestedIn) {
      Alert.alert('Missing details', 'Please complete all fields.');
      return;
    }

    if (Number(age) < 18) {
      Alert.alert('Age restriction', 'You must be 18 or older.');
      return;
    }

    Alert.alert(
      'Registration details saved',
      `Welcome, ${name}! Your profile is ready for the next step.`
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your account ❤️</Text>
      <Text style={styles.subtitle}>Join LoveConnect Zambia</Text>

      <TextInput
        style={styles.input}
        placeholder="Your full name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Your age (18+)"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <TextInput
        style={styles.input}
        placeholder="Your city (e.g. Lusaka)"
        value={city}
        onChangeText={setCity}
      />

      <Text style={styles.label}>Your gender</Text>
      <View style={styles.options}>
        {['Male', 'Female'].map(option => (
          <Pressable
            key={option}
            style={[
              styles.option,
              gender === option && styles.selected,
            ]}
            onPress={() => setGender(option)}
          >
            <Text>{option}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Interested in</Text>
      <View style={styles.options}>
        {['Male', 'Female', 'Everyone'].map(option => (
          <Pressable
            key={option}
            style={[
              styles.option,
              interestedIn === option && styles.selected,
            ]}
            onPress={() => setInterestedIn(option)}
          >
            <Text>{option}</Text>
          </Pressable>
        ))}
      </View>

      <Pressable style={styles.button} onPress={register}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F7',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#D6336C',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginTop: 8,
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    fontSize: 16,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
  },
  options: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  option: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selected: {
    backgroundColor: '#F8C7D8',
    borderColor: '#D6336C',
  },
  button: {
    backgroundColor: '#D6336C',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
