// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AlphabetScreen from './screens/AlphabetScreen';
import StudentScreen from './screens/StudentScreen';
import ScoreScreen from './screens/ScoreScreen';
import LandingPage from './screens/LandingPage';
import WeekPage from './screens/WeekPage';
import CategoriesPage from './screens/CategoriesPage'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerTitle: '' }} />
        <Stack.Screen name="WeekPage" component={WeekPage} options={{ headerTitle: 'Assessment Weeks' }}/>
        <Stack.Screen name="Categories" component={CategoriesPage} />
        <Stack.Screen name="Students" component={StudentScreen} />
        <Stack.Screen name="QuizScreen" component={AlphabetScreen} />
        <Stack.Screen name="ScoreScreen" component={ScoreScreen} />
        {/* Add more screens if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
