import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { Button } from "react-native-elements";
import {
    emailValidator,
    passwordValidator,
    nameValidator,
} from '../core/utils';
import * as SQLite from 'expo-sqlite'

export default class Connexion extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        };
    }


    render (){

        const db = SQLite.openDatabase("database.db");
        db.transaction(tx => {
            tx.executeSql("create table if not exists user (id integer primary key not null, name text, mail text, mdp text);");
        });

        function onSignUppPressed (state){
            const nameError = nameValidator(state.name);
            const emailError = emailValidator(state.email);
            const passwordError = passwordValidator(state.password);
            var user = [];
            if (emailError || passwordError || nameError) {
                alerte();
                return;
            } else {

                db.transaction(
                    tx => {
                        tx.executeSql("insert into user (name, mail, mdp) values (?, ?, ?)", [state.name, state.email, state.password]);
                    }
                );
                navigate('Connexion', {username: state.name});

                user = [state.name, state.email, state.password];
            }
            var getprop = Object.getOwnPropertyNames(users);
            console.log("je print mon tab => " + getprop);
            getprop.push(user);
            console.log("je print mon tab add => " + getprop);
            console.log("je print mon tab tab => " + tab)
            if (tab != null) {
                tab.push(user)

                navigate('Connexion', {users: tab, user: user});
            } else {
                navigate('Connexion', {users: getprop, user: user});
            }
        };
        function alerte(){
            console.log("je passe this func")
            Alert.alert(
                'Erreur',
                'Login ou mot de passe incorrect',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
            );
        }
        const {navigate} = this.props.navigation;
        // console.log(this.props.navigation.state.params);
        //
        // console.log(this.props.navigation.state.params.users);
        // var users = this.props.navigation.state.params.users
        // var tab = null
        // console.log(users.length);
        // if (users.length != undefined) {
        //     tab = users
        // }


        return(
            <View style={styles.container}>
                <Text style={styles.titre}>Inscription</Text>

                <TextInput
                    label="Nom"
                    style={{ height: 40, borderRadius:5, marginTop:30, width: 300, borderColor: 'gray', borderWidth: 1 }}
                    value={this.state.name}
                    placeholder="Nom"
                    returnKeyType="next"
                    onChangeText={text => this.setState({ name: text })}
                />

                <TextInput
                    style={{ height: 40, borderRadius:5, marginTop:30, width: 300, borderColor: 'gray', borderWidth: 1 }}
                    label="E-mail"
                    returnKeyType="next"
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />

                <TextInput
                    style={{ height: 40, borderRadius:5, marginTop:30,  width: 300, borderColor: 'gray', borderWidth: 1 }}
                    label="Mot de passe"
                    placeholder="Mdp"
                    returnKeyType="done"
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry

                />

                <View style={{marginTop:30, width:300}} >
                    <Button
                        title="S'inscire"
                        type="solid"
                        buttonStyle={styles.button}
                        onPress={() => onSignUppPressed(this.state)}
                    />
                </View>
                <View style={{marginTop:30, width:300}} >
                    <Button
                        title="Vous etes deja inscrit?"
                        type="clear"
                        onPress={()=> navigate('Connexion'/*, {users: users}*/)}
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


