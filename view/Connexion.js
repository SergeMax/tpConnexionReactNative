import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
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
            email: "",
            password: ""
        };
    }

    render (){
        const db = SQLite.openDatabase("database.db");
        db.transaction(tx => {
            tx.executeSql("create table if not exists user (id integer primary key not null, name text, mail text, mdp text);");
        });
        gocheckUsers();
        var data = null;
        function alert(){
            Alert.alert(
                'Erreur',
                'Login ou mot de passe incorrect',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
            );
        }


        function onLoginPressed (state) {
            const emailError = emailValidator(state.email);
            const passwordError = passwordValidator(state.password);
            console.log(data);
            if (emailError || passwordError) {
                alert()
                return;
            }


            var good = false
            var user = null;
            for (var i =0; i<data.length; i++){
                if(data[i]["mail"] == state.email && data[i]["mdp"] == state.password){
                    good = true;
                    user = data[i]
                }
            }
            if (good){
                navigate('PageConnect', {username: user['name']});
            }else{
                alert()
            }

            var isvalid = false;
            var user = null;

        };

            /* Version Sans bdd


            function onLoginPressed (state) {
            const emailError = emailValidator(state.email);
            const passwordError = passwordValidator(state.password);

            if (emailError || passwordError) {
                alert()
                return;
            }
           var isvalid = false;
            var user = null;
            if(users.length !== undefined){
                console.log("if 1");
                var i = 0;
                if (users[0] == "routename"){
                    i++
                    if (users[1] == "key"){
                        i++
                    }
                }
                if(users.length >i) {
                    console.log("if 2");
                    for (i; i < users.length; i++) {
                        if (users[i][1] == state.email && users[i][2] == state.password) {
                            console.log("good");
                            isvalid = true
                            user = users[i]
                        }
                        tab.push(users[i]);
                    }
                    console.log(" print tab "+tab);
                    if (isvalid == true){
                        navigate('PageConnect', {users: tab, user: user});
                    }else{
                        console.log("no good");
                        alert()
                    }
                }else{
                    console.log("else 1");
                    alert()
                }
                //ecrire le code fonctionnel

                console.log("je test" + tab);
            }else{
                console.log("else 2");
                this.alert()
            }
        };
        const {navigate} = this.props.navigation;

        console.log(this.state);
        console.log(this.props);
        var users = this.props.navigation.state.params.users;
        var tab = [];

        */


        function gocheckUsers(){
            db.transaction(
                tx => {
                    tx.executeSql("select * from user", [], (_, { rows: { _array } }) =>
                        data = _array
                    );
                }
            );
        }
        const {navigate} = this.props.navigation;


        return(
            <View style={styles.container}>
                <Text style={styles.titre}>Connexion</Text>

                <TextInput
                    style={{ height: 40, borderRadius:5, marginTop:30, width: 300, borderColor: 'gray', borderWidth: 1 }}
                    label="E-mail"
                    returnKeyType="next"
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
                    returnKeyType="done"
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry

                />

                <View style={{marginTop:30, width:300}} >
                    <Button
                        title="Connexion"
                        type="solid"
                        buttonStyle={styles.button}
                        onPress={() => onLoginPressed(this.state)}
                    />
                </View>
                <View style={{marginTop:30, width:300}} >
                    <Button
                        title="Inscription"
                        type="clear"
                        onPress={()=> navigate('Inscription'/*, {users: users}*/)}
                    />


                    <TouchableOpacity onPress={() => navigate('ForgotPasswordScreen')}>
                        <Text style={styles.link}>Mot de passe oublié</Text>
                    </TouchableOpacity>

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

    },
    link: {
        fontWeight: 'bold',
        color: 'purple',
        marginLeft: 90,
        alignItems: 'center'

    },
});



