import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput} from 'react-native';

const StudentScreen = ({ route, navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const students = [
    { id: 1, name: 'Mary Banda' },
    { id: 2, name: 'Aida Tomato' },
    { id: 3, name: 'John Msika' },
    { id: 4, name: 'Jessey Sitima' },
    { id: 5, name: 'Tabitha Luka' },
    { id: 6, name: 'Abdul Banda' },
    { id: 7, name: 'Manuel Elias Banda' },
    { id: 8, name: 'Chikondi dziko' },
    { id: 9, name: 'John Msika' },
    { id: 10, name: 'Moses Eliya' },
    { id: 11, name: 'Lonjezo Chimtengo' },
    { id: 12, name: 'Margaret Chirombo' },
    // Add more dummy data if needed
  ];
  
  

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
          <Text style={styles.title}>All Students</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a student"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
      </View>
     
      <Text style={styles.subtitle}>Select a student to start the quiz:</Text>
     
      <ScrollView contentContainerStyle={styles.studentList}>
        {filteredStudents.map((student) => (
          <TouchableOpacity
            key={student.id}
            style={styles.studentItem}
            onPress={() => navigation.navigate('WeekPage', { studentId: student.id, studentName: student.name})}
          >
            <Text>{student.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1', // Background color
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db', // Text color
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555', // Text color
  },
  searchContainer: {
    flexDirection: 'row', // This will align children in a row
    alignItems: 'center', // This will align children vertically in the center
    marginBottom: 16,
    justifyContent: 'space-between'
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  studentList: {
    justifyContent: 'center',
  },
  studentItem: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 5,
    backgroundColor: '#fff', // Button background color
  },
});
export default StudentScreen;
