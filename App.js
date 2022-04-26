import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {HomeScreen} from "./src/screens/HomeScreen";
import {LoginScreen} from "./src/screens/LoginScreen";
import {ProfilScreen} from "./src/screens/ProfilScreen";
import {SettingsScreen} from "./src/screens/SettingsScreen";
import {SignupScreen} from "./src/screens/SignupScreen"; 


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Sign Up" component={SignupScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Profil" component={ProfilScreen}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>        
      </Stack.Navigator>
    </NavigationContainer>
  );
};



