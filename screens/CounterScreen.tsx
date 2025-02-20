import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CounterScreen() {
  const [counter, setCounter] = useState(25);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acumulador</Text>
      <Text style={styles.counter}>{counter}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+5" onPress={() => setCounter(counter + 5)} />
        <Button title="-5" onPress={() => setCounter(counter - 5)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  counter: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
