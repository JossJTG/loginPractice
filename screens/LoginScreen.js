import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {firebase} from '../firebaseConfig';
import { Link } from "@react-navigation/native";

const LoginScreen = () => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    
    const handleLogin = () =>{
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then ((userCredential) => {
                const user = userCredential.user;
                console.log('Inicio de sesión exitoso', user);
            })
            .catch((error) => {
                console.log('Error en el inicio de sesión', error);
            });
    };


    return (
        <View style = {styles.container}>
            
            {/* <Text style = {styles.texto}>Email: </Text> */}
            <TextInput
                style = {styles.write}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Ingrese su correo electrónico"
            />

            {/* <Text style = {styles.texto}>Password:</Text> */}
            <TextInput
                style = {styles.write}
                value={password}
                onChangeText={(text) => setPassword(text)} 
                placeholder="Ingrese su contraseña"
                secureTextEntry 
            />
            {/* <Link to="https://accounts.google.com/signin" style={styles.gmail} onPress={Link}>Ingresar con google</Link> */}
            <Button 
                color="#1877f2"
                title="Iniciar sesión" 
                onPress={handleLogin}                 
            />
            <Link to="about" style={styles.cambioContra}>¿Has olvidado la contraseña?</Link>

            <Button                 
                color="#42B72A"
                title="Crear cuenta nueva" 
                onPress={handleLogin}                 
            />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        width: '400px',
        paddingTop: '55px',
        padding: '25px',
        backgroundColor: "#fff",

        flex: 1,  
        margin: '5%',
        marginRight: '36%',
        marginLeft: '36%',
        borderRadius: '35px',
        //border: '7px solid black',
        justifyContent: 'start',
    },
    write:{
        width: '100%',
        padding: '10px',
        //marginLeft: '20px',
        marginBottom: '20px',
        border: '1px solid #1877f2',
        borderRadius: '4px',
        color: '#818181',
        
    },
    texto:{
        marginLeft: '0 auto'
    },
    boton: {
        width: '90%',
        padding: 10,
        margin: 10,
        backgroundColor: '#1877f2',
        border: 'none',
        color: 'red',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    cambioContra:{
        marginTop: '10px',
        marginBottom: '25px',
        textAlign: 'center',
        color: '#1877f2'
    },
    /* gmail:{
        marginTop: '0px',
        marginBottom: '25px',
        //textAlign: 'center',
        color: '#DB4437'
    } */
});