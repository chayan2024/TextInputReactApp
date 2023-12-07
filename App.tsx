import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { appHeaderText, inputPlaceholder, buttonText } from './utils';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handlePress = () => {
    console.log('Button pressed with input:', inputValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{appHeaderText}</Text>
      <TextInput
        style={styles.input}
        placeholder="{inputPlaceholder}"
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
      <Button title={buttonText} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
    width: '90%',
  },
});

export default App;
