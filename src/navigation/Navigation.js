import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../modules/home/Home';
import About from '../modules/about/About'

const Drawer = createDrawerNavigator();

export default function Navigation() {

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{ drawerLabel: 'Calculator' }}
                />
                <Drawer.Screen
                    name="About"
                    component={About}
                    options={{ drawerLabel: 'About' }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}