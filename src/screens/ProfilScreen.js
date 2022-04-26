    import React from "react";
    import { Text, View } from "react-native";

    export const ProfilScreen = ({navigation}) => {
        const dummydata=require("../reducers/dummydata.json");
        return(
            <View>
                {dummydata.data}
                {dummydata.map((d,index)=>(
                    <View key={index}> 
                    <Text>{d.name} {d.surname}</Text>
                    <Text>{d.number}</Text>
                    <Text>{d.stanje}</Text>
                   
                    
                     </View>
                ))}
                 </View>
        );
    }
