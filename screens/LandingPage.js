import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();


export default class LandingPage extends Component {
  navigateToWeekPage = () => {
    this.props.navigation.navigate('WeekPage');
  };

  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={styles.container}>
       
        <Text style={styles.welcomeText}>Welcome to the Continuous Learning Assessment Tools</Text>
        <View style={styles.gifContainer}>
            <Image
              source={require('../assets/images/pencil2.gif')}
              style={styles.imageContainer}
            />
        </View>
       

        <View style={styles.cardContainer}>
          {/* First Card */}
          <TouchableOpacity style={styles.card} onPress={this.navigateToWeekPage}>
            <Text style={styles.toolName}>Standard 1</Text>
            <Text style={styles.gradeName}>Sample A</Text>
          </TouchableOpacity>

          {/* Second Card */}
          <TouchableOpacity style={styles.card} onPress={this.navigateToWeekPage}>
            <Text style={styles.toolName}>Standard 1</Text>
            <Text style={styles.gradeName}>Sample B</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          {/* First Card */}
          <TouchableOpacity style={styles.card} onPress={this.navigateToWeekPage}>
            <Text style={styles.toolName}>Standard 2</Text>
            <Text style={styles.gradeName}>Sample A</Text>
          </TouchableOpacity>

          {/* Second Card */}
          <TouchableOpacity style={styles.card} onPress={this.navigateToWeekPage}>
            <Text style={styles.toolName}>Standard 2</Text>
            <Text style={styles.gradeName}>Sample B</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    padding: 100,
    height: 250,
    width: 250
  },
  gifContainer: {
    height: 400,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  toolName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  gradeName: {
    fontSize: 16,
    color: '#555',
  },
});

