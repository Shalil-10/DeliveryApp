import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import RestaurantScreen from '../screens/RestaurantScreen/RestaurantScreen'
import BasketScreen from '../screens/BasketScreen/BasketScreen'
import PreparingOrderScreen from '../screens/PreparingOrderScreen/PreparingOrderScreen'
import { createStackNavigator } from '@react-navigation/stack'
import DeliveryScreen from '../screens/DeliveryScreen/DeliveryScreen'
import { CardStyleInterpolators } from '@react-navigation/stack';

// const Stack = createNativeStackNavigator()
const Stack = createStackNavigator()


const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomeScreen} />


            <Stack.Screen name='Restaurant' component={RestaurantScreen} />
            <Stack.Screen name='Basket' component={BasketScreen}
                options={{ cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid}}
            />
            <Stack.Screen name='PreparingOrder' component={PreparingOrderScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid}}/>
            <Stack.Screen name='Delivery' component={DeliveryScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid}} />
        </Stack.Navigator>
    )
}

export default Navigation