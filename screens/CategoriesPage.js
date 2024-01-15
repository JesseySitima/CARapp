import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const CategoriesPage = ({ route, navigation }) => {
  // Extract the selected period and data from the route parameters
  const { selectedPeriod, data } = route.params;

  // Find the selected week in the data
  const selectedWeekData = data.find((weekData) => weekData.week === selectedPeriod.week);

  // Extract categories from the selected week data
  const categories = selectedWeekData ? selectedWeekData.categories : [];

  const handleItemClick = (category) => {
    const selectedCategory = {
      name: category.name,
      words: category.words,
    };
  
    console.log(`Clicked on ${selectedCategory.name} in ${selectedPeriod.week}`);
    console.log('Words in the selected category:', selectedCategory.words);
  
    navigation.navigate('QuizScreen', { selectedPeriod, selectedCategory, data });
  
    console.log(`Navigated to StudentScreen with ${selectedCategory.name} in ${selectedPeriod.week}`);
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories for {selectedPeriod.week}</Text>
      <Text style={styles.instruction}>Click on a category to proceed</Text>
      <ScrollView style={styles.scrollContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() => handleItemClick(category)}
          >
            <Text style={styles.categoryText}>{category.name}</Text>
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
    marginBottom: 8,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 16,
    color: '#888',
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

export default CategoriesPage;
