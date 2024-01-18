import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const WeekPage = ({ navigation }) => {
  const learningPeriods = [
    {
        week: 'Week 1 - 5',
        categories: [
          {
            name: 'Maina a Malembo',
            words: ['A', 'm', 'N', 'u', 'K'],
          },
          {
            name: 'Maliwu',
            words: ['O', 'm', 'n', 'u', 'K'],
          },
          {
            name: 'Maphatikizo',
            words: ['Ma', 'ni', 'ko', 'la', 'nu'],
          },
          {
            name: 'Mawu',
            words: ['Luma', 'amama', 'kola', 'muka', 'akukoka'],
          },
        ],
      },
    {
        week: 'Week 1 - 10',
        categories: [
          {
            name: 'Maina a Malembo',
            words: ['E', 'T', 'u', 'P', 'W'],
          },
          {
            name: 'Maliwu',
            words: ['a', 'd', 'n', 'ch', 'Nd'],
          },
          {
            name: 'Maphatikizo',
            words: ['Se', 'chu', 'tu', 'ndo', 'mi'],
          },
          {
            name: 'Mawu',
            words: ['Ndowa', 'zako', 'tema', 'chule', 'kulima'],
          },
        ],
      },
    {
        week: 'Week 1 - 15',
        categories: [
          {
            name: 'Maina a Malembo',
            words: ['E', 'T', 'u', 'P', 'W'],
          },
          {
            name: 'Maliwu',
            words: ['a', 'd', 'n', 'ch', 'Nd'],
          },
          {
            name: 'Maphatikizo',
            words: ['Se', 'chu', 'tu', 'ndo', 'mi'],
          },
          {
            name: 'Mawu',
            words: ['Ndowa', 'zako', 'tema', 'chule', 'kulima'],
          },
        ],
      },
    {
        week: 'Week 1 - 20',
        categories: [
          {
            name: 'Maina a Malembo',
            words: ['E', 'T', 'u', 'P', 'W'],
          },
          {
            name: 'Maliwu',
            words: ['a', 'd', 'n', 'ch', 'Nd'],
          },
          {
            name: 'Maphatikizo',
            words: ['Se', 'chu', 'tu', 'ndo', 'mi'],
          },
          {
            name: 'Mawu',
            words: ['Ndowa', 'zako', 'tema', 'chule', 'kulima'],
          },
        ],
      },
    {
        week: 'Week 1 - 25',
        categories: [
          {
            name: 'Maina a Malembo',
            words: ['E', 'T', 'u', 'P', 'W'],
          },
          {
            name: 'Maliwu',
            words: ['a', 'd', 'n', 'ch', 'Nd'],
          },
          {
            name: 'Maphatikizo',
            words: ['Se', 'chu', 'tu', 'ndo', 'mi'],
          },
          {
            name: 'Mawu',
            words: ['Ndowa', 'zako', 'tema', 'chule', 'kulima'],
          },
        ],
      },
    {
        week: 'Week 1 - 30',
        categories: [
          {
            name: 'Maina a Malembo',
            words: ['E', 'T', 'u', 'P', 'W'],
          },
          {
            name: 'Maliwu',
            words: ['a', 'd', 'n', 'ch', 'Nd'],
          },
          {
            name: 'Maphatikizo',
            words: ['Se', 'chu', 'tu', 'ndo', 'mi'],
          },
          {
            name: 'Mawu',
            words: ['Ndowa', 'zako', 'tema', 'chule', 'kulima'],
          },
        ],
      },
    {
        week: 'Week 1 - 34',
        categories: [
          {
            name: 'Maina a Malembo',
            words: ['E', 'T', 'u', 'P', 'W'],
          },
          {
            name: 'Maliwu',
            words: ['a', 'd', 'n', 'ch', 'Nd'],
          },
          {
            name: 'Maphatikizo',
            words: ['Se', 'chu', 'tu', 'ndo', 'mi'],
          },
          {
            name: 'Mawu',
            words: ['Ndowa', 'zako', 'tema', 'chule', 'kulima'],
          },
        ],
      },
      
      // Add more periods as needed
    ];

  const handleItemClick = (period) => {
    navigation.navigate('Categories', { selectedPeriod: period, data: learningPeriods });
    console.log(`Clicked on ${period}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>Select by clicking the week conducting the Assessment.</Text>
      <ScrollView style={styles.scrollContainer}>
        {learningPeriods.map((period, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() => handleItemClick(period)}
          >
            <Text>{period.week}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  instruction: {
    fontSize: 20,
    marginBottom: 16,
  },
  scrollContainer: {
    flex: 1,
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default WeekPage;
