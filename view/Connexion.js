import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from "react-native-elements";

export default class Connexion extends React.Component{
    render (){

        return(
            <View style={styles.container}>
                <Text style={styles.titre}>Connexion</Text>

                <TextInput
                    style={{ height: 40, borderRadius:5, marginTop:30, width: 300, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={"Email"}
                />

                <TextInput
                    style={{ height: 40, borderRadius:5, marginTop:30,  width: 300, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={"Password"}
                />

                <View style={{marginTop:30, width:300}} >
                    <Button
                        title="Connexion"
                        type="solid"
                        buttonStyle={styles.button}
                    />
                </View>
                <View style={{marginTop:30, width:300}} >
                    <Button
                        title="Inscription"
                        type="clear"
                    />
                </View>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: 400,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titre: {
        marginBottom:6,
        fontSize:30,
        color: 'purple'
    },
    button:{
        backgroundColor: 'purple',

    }
});



