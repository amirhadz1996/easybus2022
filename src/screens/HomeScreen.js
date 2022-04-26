import React from "react";
import { View, Text, Button, Settings } from "react-native";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export const HomeScreen = ({navigation}) => {
    return(
        <View>
            
           
            
            
            <Button title = "Sign Up" onPress={()=> navigation.navigate("Sign Up")}></Button>
            <Button title ="Log in" onPress={() => navigation.navigate('Login') }></Button>
            <Button title ="Profile" onPress={() => navigation.navigate('Profil')}></Button>
            <Button title ="Settings" onPress={() => navigation.navigate('Settings')} ></Button>
        </View>
    );
};



