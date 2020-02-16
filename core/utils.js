
export const emailValidator = email => {
    const re = /\S+@\S+\.\S+/;

    if (!email || email.length <= 0) return 'Email cannot be empty.';
    if (!re.test(email)) return 'Ooops! We need a valid email address.';

    return '';
};


export const passwordValidator = password => {
    if (!password || password.length <= 0) return 'Password cannot be empty.';

    return '';
};

export const nameValidator = name => {
    if (!name || name.length <= 0) return 'Name cannot be empty.';

    return '';
};
export const alert = () => {
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

    if (emailError || passwordError) {
        alert()
        return;
    }
    console.log("je test" + tab);
    var isvalid = false;
    var user = null;
    if(users.length !== undefined){
        console.log("if 1");
        var i = 0;

        //ecrire le code fonctionnel

        console.log("je test" + tab);
    }else{
        console.log("else 2");
        alert()
    }
};