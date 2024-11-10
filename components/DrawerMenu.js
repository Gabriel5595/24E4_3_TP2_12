import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function DrawerMenu(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <TouchableOpacity
        style={styles.item}
        onPress={() => props.navigation.navigate('Informações Pessoais')}
      >
        <Text>Informações Pessoais</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => props.navigation.navigate('Informações Acadêmicas')}
      >
        <Text>Informações Acadêmicas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => props.navigation.navigate('Experiência Profissional')}
      >
        <Text>Experiência Profissional</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => props.navigation.navigate('Idiomas')}
      >
        <Text>Idiomas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => props.navigation.navigate('Soft Skills')}
      >
        <Text>Soft Skills</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default DrawerMenu;
