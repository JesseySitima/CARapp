import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AlphabetScreen from './screens/AlphabetScreen';
import StudentScreen from './screens/StudentScreen';
import ScoreScreen from './screens/ScoreScreen';
import LandingPage from './screens/LandingPage';
import WeekPage from './screens/WeekPage';
import CategoriesPage from './screens/CategoriesPage';
import InstructionsPopup from './components/Instructions';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

const App = () => {
  const [instructionsVisible, setInstructionsVisible] = useState(false);

  const openInstructions = () => setInstructionsVisible(true);
  const closeInstructions = () => setInstructionsVisible(false);

  const headerWithInstructions = {
    headerRight: () => (
      <TouchableOpacity onPress={openInstructions}>
         <MaterialIcons name="help-outline" size={30}  style={{ marginRight: 15 }} />
      </TouchableOpacity>
    ),
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerTitle: '', ...headerWithInstructions }}
        />
        <Stack.Screen
          name="WeekPage"
          component={WeekPage}
          options={{ headerTitle: 'Assessment Weeks', ...headerWithInstructions }}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesPage}
          options={{ headerTitle: 'Sections', ...headerWithInstructions }}
        />
        <Stack.Screen
          name="Students"
          component={StudentScreen}
          options={headerWithInstructions}
        />
        <Stack.Screen
          name="QuizScreen"
          component={AlphabetScreen}
          options={{ headerTitle: 'Assessments', ...headerWithInstructions }}
        />
        <Stack.Screen
          name="ScoreScreen"
          component={ScoreScreen}
          options={headerWithInstructions}
        />
        {/* Add more screens if needed */}
      </Stack.Navigator>
      <InstructionsPopup isVisible={instructionsVisible} onClose={closeInstructions} />
    </NavigationContainer>
  );
};

export default App;
