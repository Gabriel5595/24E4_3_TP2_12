import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PersonalInfoScreen from './screens/PersonalInfoScreen';
import AcademicInfoScreen from './screens/AcademicInfoScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import LanguagesScreen from './screens/LanguagesScreen';
import SoftSkillsScreen from './screens/SoftSkillsScreen';
import DrawerMenu from './components/DrawerMenu';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />}>
        <Drawer.Screen name="Informações Pessoais" component={PersonalInfoScreen} />
        <Drawer.Screen name="Informações Acadêmicas" component={AcademicInfoScreen} />
        <Drawer.Screen name="Experiência Profissional" component={ExperienceScreen} />
        <Drawer.Screen name="Idiomas" component={LanguagesScreen} />
        <Drawer.Screen name="Soft Skills" component={SoftSkillsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
