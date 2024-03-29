// screens/AlphabetScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Font from 'expo-font';


const AlphabetScreen = ({ route, navigation }) => {
    const { studentId, studentName } = route.params;
    const { selectedCategory } = route.params;
  
    // Use words from the selected category or provide a default value (empty array)
    const alphabet = selectedCategory.words || [];
  
    const [shuffledAlphabet, setShuffledAlphabet] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [fontSize, setFontSize] = useState(1);
    const [alphabetCompleted, setAlphabetCompleted] = useState(false);
  
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };
  
    const handleAnswer = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }
      if (currentIndex < shuffledAlphabet.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // End of the shuffled alphabet, reshuffle and start again
        const newShuffledAlphabet = shuffleArray(alphabet);
        setShuffledAlphabet(newShuffledAlphabet);
        setCurrentIndex(0);
        setAlphabetCompleted(true);
      }
    };
  
    const handleRetry = () => {
      // Reset quiz state and start again
      setScore(0);
      setCurrentIndex(0);
      setAlphabetCompleted(false);
      const newShuffledAlphabet = shuffleArray(alphabet);
      setShuffledAlphabet(newShuffledAlphabet);
    };
  
    const handleFinishQuiz = () => {
      // Navigate to the ScoreScreen with the score
      navigation.navigate('ScoreScreen', { score, studentName });
    };
  
    useEffect(() => {
      
      const windowHeight = Dimensions.get('window').height;
      const calculatedFontSize = Math.max(windowHeight / 6, 80); // Ensure a minimum font size of 80
      setFontSize(calculatedFontSize);
      
      // Set the screen orientation to landscape when the component mounts
    const setLandscapeOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    };

    setLandscapeOrientation();
  
      // Shuffle the alphabet when the component mounts or when the selected category changes
      const newShuffledAlphabet = shuffleArray(alphabet);
      setShuffledAlphabet(newShuffledAlphabet);

      return () => {
        // Reset the screen orientation to portrait when the component unmounts
        ScreenOrientation.unlockAsync();
      };
    }, [alphabet]); // Add alphabet as a dependency

    // Load the Indika font when the component mounts
    useEffect(() => {
      const loadFont = async () => {
        try {
          await Font.loadAsync({
            Andika: require('../components/Andika-Regular.ttf'),
          });
          console.log('Font loaded successfully');
        } catch (error) {
          console.error('Error loading font:', error);
        }
      };
    
      loadFont();
    }, []);

  return (
    <View style={styles.mainContainer}>
      

      <Text style={styles.heading}>{selectedCategory.name}</Text>

      <View style={styles.container}>
        {alphabetCompleted ? (
          <View>
            <Text style={styles.completedText}>Assessment for {selectedCategory.name} Completed!</Text>
            <Text style={styles.completedText}>Score :  {score}</Text>

            <TouchableOpacity style={[styles.button, styles.retryButton]} onPress={handleRetry}>
              <Icon name="refresh" size={20} color="white" />
              <Text style={styles.buttonText}>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={[styles.alphabetText, { fontSize, fontFamily: 'Andika',  }]}>
            {shuffledAlphabet[currentIndex]}
          </Text>
        )}

        {!alphabetCompleted && (
          <View style={styles.buttonContainer}>
            <View style={styles.wrongContainer}>
              <TouchableOpacity style={[styles.button, styles.wrongButton]} onPress={() => handleAnswer(false)}>
                <Text style={styles.buttonText}>Wrong</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rightContainer}>
              <TouchableOpacity style={[styles.button, styles.correctButton]} onPress={() => handleAnswer(true)}>
                <Text style={styles.buttonText}>Correct</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
    
        {alphabetCompleted && (
                <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>

                    <Text style={styles.goBackText}>Next Section</Text>
                </TouchableOpacity>
            )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 20, // Adjust as needed
      },
      heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
       
        textAlign: 'center',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      alphabetText: {
       
        marginBottom: 20,
      },
  buttonContainer: {
   
    width: '80%',
  },
  rightContainer: {
    marginBottom: 20
  },
  wrongContainer: {
    marginBottom: 20
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  wrongButton: {
    backgroundColor: '#e74c3c', // Red color
  },
  correctButton: {
    backgroundColor: '#2ecc71', // Green color
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  completedText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    textAlign: 'center',
  },
  finishButton: {
    backgroundColor: '#3498db', // Blue color
    marginTop: 20,
  },
  retryButton: {
    backgroundColor: '#ffac46', // Blue color
    marginTop: 10,
    width: 100,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  goBackButton: {
    backgroundColor: '#2ecc71', // Blue color
    marginTop: 10,
    width: 120,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
},
goBackText: {
    color: '#3498db',
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
},

});

export default AlphabetScreen;
