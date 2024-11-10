import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import styles from '../styles';

function ExperienceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Experiência Profissional</Text>
        <Text>Empresa: C4T</Text>
        <Text>Cargo: Support Manager</Text>
        <Text>Período: 2024 - Até o momento</Text>
        <Text>Descrição: Overseeing end-to-end processing of import and export declarations, meticulously addressing any errors and promptly responding to CAS alerts. Offering strategic guidance to users, proactively upholding seamless client operations. Timely upkeep and availability of critical data. Proficiently documenting and resolving reported queries. Leveraging advanced tools and technologies such as JIRA, CAS System, VS Code, and FileZilla. Collaborating closely with the rest of the Customer Service and development teams to identify and address issues effectively.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ExperienceScreen;
