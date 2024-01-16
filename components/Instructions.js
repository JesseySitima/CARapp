import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const InstructionsPopup = ({ isVisible, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.popupContainer}>
            <View>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.headlineButton}>
              <Text style={styles.headlineButtonText}>GuideLines</Text>
            </TouchableOpacity>
            </View>

          <Text style={styles.title}>Note to Teachers: How to assess learners</Text>
          <Text style={styles.description}>
            For each assessment, you will need samples A and B of the appropriate assessment instrument.
          </Text>

          {/* Maina a malembo Section */}
          {renderSection('Step 1', [
            'Give the learner the assessment instrument to hold.',
            'Turn to the ‘Maina a malembo’ section of the instrument.',
            'Point to each letter and ask the learner to identify the letter names one by one.',
            
          ])}

          {/* Maliwu Section */}
          {renderSection('Step 2', [
            'Turn to the ‘Maliwu’ section of the instrument.',
            'Point to each sound and ask the learner to identify the sounds one by one.',
           
          ])}

          {/* Maphatikizo Section */}
          {renderSection('Step 3', [
            'Turn to the ‘Maphatikizo’ section of the instrument.',
            'Point to each syllable and ask the learner to identify the syllables one by one.',
            
          ])}

          {/* Mawu Section */}
          {renderSection('Step 4', [
            'Turn to the ‘Mawu’ section of the instrument.',
            'Point to each word and ask the learner to read the words one by one.',
           ,
          ])}

        </View>
      </View>
    </Modal>
  );
};

const renderSection = (title, instructions) => (
  <View key={title}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {instructions.map((instruction, index) => (
      <Text key={index} style={styles.instruction}>{`${index + 1}. ${instruction}`}</Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch', // Align items stretch to cover the whole screen
  },
  popupContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  headlineButton: {
    backgroundColor: 'orange', // Choose your preferred color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  headlineButtonText: {
    color: 'white', // Choose your preferred text color
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 15,
  },
  sectionTitle: {
    marginTop: 15,
    fontWeight: 'bold',
  },
  instruction: {
    marginBottom: 8,
  },
  closeButton: {
    backgroundColor: '#6a82fb', // Choose your preferred color
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginBottom: 20
  },
  closeButtonText: {
    color: 'white', // Choose your preferred text color
    fontWeight: 'bold',
  },
});

export default InstructionsPopup;
