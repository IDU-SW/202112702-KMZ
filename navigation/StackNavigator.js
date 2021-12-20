import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SajuDetailPage from '../pages/SajuDetailPage';
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
        </Stack.Navigator>
    )
}

export default StackNavigator;