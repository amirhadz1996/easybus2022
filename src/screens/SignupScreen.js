import react from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from "react-native";

export const SignupScreen = ({navigation}) => {
return(
<View>
    <Text style={StyleSheet.header}>Registration</Text>
     <TextInput style={StyleSheet.textinput} placeholder="First Name"></TextInput>
     <TextInput style={StyleSheet.textinput} placeholder="Last Name"></TextInput>

    <Button title="Sign up" onPress={() => navigation.navigate('Sign Up')}>
        
    </Button>
</View>
);


}
