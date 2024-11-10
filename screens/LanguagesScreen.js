import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styles from '../styles';

function LanguagesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Idiomas</Text>
        <Text>Inglês: Avançado</Text>
        <Text>Espanhol: Avançado</Text>
        <Text>Francês: Intermediário</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LanguagesScreen;
