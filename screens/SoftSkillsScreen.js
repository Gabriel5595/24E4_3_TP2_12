import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styles from '../styles';

function SoftSkillsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Soft Skills</Text>
        <Text>Comunicação</Text>
        <Text>Trabalho em equipe</Text>
        <Text>Resolução de problemas</Text>
        <Text>Empatia</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SoftSkillsScreen;
