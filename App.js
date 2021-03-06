import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomePage, RegistrationScreen } from './src/screens'
import {decode, encode} from 'base-64'

if (!global.atob) {global.atob = encode}
if (!global.btoa) {global.btoa = decode}

const Stack = createStackNavigator(); 

export default function App() {
    const [loading, setLoading] = useState(true); 
    const [user, setUser] = useState(null);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                { user ? (
                    <Stack.Screen name="HomePage">
                        {props => <HomePage {...props} extraData={user} />}
                    </Stack.Screen>
                ) : (
                  <>
                    <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
                    <Stack.Screen name="Registration" component={RegistrationScreen} />
                  </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
