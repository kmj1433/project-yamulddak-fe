import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CoPurchase from './screens/CoPurchase';
import Community from './screens/Community';
import MyAccount from './screens/MyAccount';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import PostDetail from './screens/PostDetail';
import PostWrite from './screens/PostWrite';
import Challenge from './screens/Challenge';
import ChallengeDetail from './screens/ChallengeDetail';
import Notify from './screens/Notify';
import SignUp_1 from './screens/SignUp_1';
import SignUp_2 from './screens/SignUp_2';
import SignUp_3 from './screens/SignUp_3';
import SignUp_4 from './screens/SignUp_4';
import SelectVege from './screens/SelectVege';

const App = () => {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: {
            height: 86,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: -5,
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#424242'
        }}>
        <Tab.Screen
          name='CoPurchase'
          component={CoPurchase}
          options={{
            tabBarLabel: '공동구매',
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons name={focused ? 'shopping' : 'shopping-outline'}
                color={focused ? '#000000' : '#424242'}
                size={25} />
            )
          }}
        />
        <Tab.Screen name='Community'
          component={Community}
          options={{
            tabBarLabel: '커뮤니티',
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons name={focused ? 'sticker-text' : 'sticker-text-outline'}
                color={focused ? '#000000' : '#424242'}
                size={25} />
            )
          }}
        />
        <Tab.Screen name='MyAccount'
          component={MyAccount}
          options={{
            tabBarLabel: '내 계정',
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons name={focused ? 'account-circle' : 'account-circle-outline'}
                color={focused ? '#000000' : '#424242'}
                size={28} />
            )
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SignUp_1' component={SignUp_1} />
        <Stack.Screen name='SignUp_2' component={SignUp_2} />
        <Stack.Screen name='SignUp_3' component={SignUp_3} />
        <Stack.Screen name='SignUp_4' component={SignUp_4} />
        <Stack.Screen name='Bottom' component={BottomTabScreen} />

        <Stack.Screen name='CoPurchase' component={CoPurchase} />
        <Stack.Screen name='PostDetail' component={PostDetail} />
        <Stack.Screen name='PostWrite' component={PostWrite} />
        <Stack.Screen name='Notify' component={Notify} />
        <Stack.Screen name='Community' component={Community} />
        <Stack.Screen name='Challenge' component={Challenge} />
        <Stack.Screen name='ChallengeDetail' component={ChallengeDetail} />
        <Stack.Screen name='SelectVege' component={SelectVege} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default App