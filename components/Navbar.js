import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Profile } from './Profile';
// import MainContent from './MainContent';
import MainContainer from './MainContainer';

export const Navbar = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: '#949494',
                pressColor: '#a1bce6',
                labelStyle: { fontSize: 16 },
                style: {
                    backgroundColor: '#65727a',
                    paddingTop: 40,
                },
            }}
        >
            <Tab.Screen name="Feeds" component={MainContainer} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}