// screens/ScoreScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScoreScreen = ({ route, navigation }) => {
    const { score, studentName } = route.params;

  const handleGoBack = () => {
    // You can adjust this to navigate back to the WelcomeScreen or any other screen
    navigation.navigate('tudents');
  };

  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Quiz Completed</Text>
    <Text style={styles.scoreText}>{`Score for ${studentName}`}:</Text>
    <Text style={styles.scoreText}>{score}</Text>
      
  </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ScoreScreen;
