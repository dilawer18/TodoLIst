//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../Screens/'
import navigationStrings from '../constants/navigationStrings';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={navigationStrings.LOGIN} component={Screens.Login} />
                <Stack.Screen name={navigationStrings.HOME} component={Screens.Home} />
                {/* <Stack.Screen name={navigationStrings.LOGIN} component={Screens.Login} /> */}
                <Stack.Screen name={navigationStrings.SIGN_UP} component={Screens.SignUp} />
                <Stack.Screen name={navigationStrings.ADD_TASK} component={Screens.AddTask} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Routes;
