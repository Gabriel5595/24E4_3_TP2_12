import { SafeAreaView, Text, ScrollView } from 'react-native';
import styles from '../styles';

function AcademicInfoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Informações Acadêmicas</Text>
        <Text>Graduação: Relações Internacionais</Text>
        <Text>Instituição: ESPM</Text>
        <Text>Ano de Conclusão: 2017</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AcademicInfoScreen;
