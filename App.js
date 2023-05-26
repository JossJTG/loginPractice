import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import { View, StyleSheet } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Iniciar Sesión" 
          component={LoginScreen} 
          color="red"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;


/* const styles = StyleSheet.create ({

  container: {
    backgroundColor: 'red'
  },
  texto:{
    color: '#1877f2'
  }
}); */