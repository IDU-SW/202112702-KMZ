import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignDetailPage from '../pages/SignDetailPage';
import SajuDetailPage from '../pages/SajuDetailPage';
import ZodiacDetailPage from '../pages/ZodiacDetailPage';
import MainPage from '../pages/MainPage';

const Stack = createStackNavigator();

const StackNavigator = () =>{
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    borderBottomColor: "white",
                    shadowColor: "white",
                    height:70
                },
                headerTitleAlign:'center',
                headerTintColor: "#000",
                headerBackTitleVisible: false
            }}
            
        >
            <Stack.Screen name="MainPage" component={MainPage}/>
            <Stack.Screen name="SajuDetailPage" component={SajuDetailPage}/>
            <Stack.Screen name="SignDetailPage" component={SignDetailPage}/>
            <Stack.Screen name="ZodiacDetailPage" component={ZodiacDetailPage}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;