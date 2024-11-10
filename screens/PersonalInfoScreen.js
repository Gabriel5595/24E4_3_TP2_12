import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styles from '../styles';

function PersonalInfoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Informações Pessoais</Text>
        <Text>Nome: Gabriel Carvalho</Text>
        <Text>Email: gribeirocarvalho0@hotmail.com</Text>
        <Text>Telefone: +32 471 63 82 35</Text>
        <Text>Endereço: Moensstraat, 12, Mechelen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PersonalInfoScreen;
