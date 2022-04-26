import react from "react";
import { View, Text, Button } from "react-native";

export const LoginScreen = ({navigation}) => {
return(
<View>
     
    <Button title="Log in" onPress={() => navigation.navigate('Login')}>
    
    </Button>
</View>
);

}