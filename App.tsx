import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen'; // Nota: Revisa si es "Wellcome" o "Welcome"
import AuthScreen from './src/screens/AuthScreen';
import DailyScreen from './src/screens/DailyScreen';
import PreventiveScreen from './src/screens/PreventiveScreen';
import EmergencyScreen from './src/screens/EmergencyScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import General2Screen from './src/screens/GeneralScreen';
import MainSlideshow from './src/presentation/components/MainSlideshow';
import TodoScreen from './src/screens/TodoScreen';
import RouteScreen from './src/screens/RouteScreen';
// 1. Define los tipos de rutas
type RootStackParamList = {
  Welcome: undefined;
  AuthScreen: undefined;
  Daily: undefined;
  Todo: undefined;
  General: undefined;
  Preventive: undefined;
  Emergency: undefined;
  Profile: undefined; 
  MainSlideshow: undefined;
  Route: undefined// Agrega más rutas aquí cuando las necesites
};

// 2. Exporta los tipos para usarlos en las pantallas
export type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
export type AuthScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AuthScreen'>;
export type DailyScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Daily'>;
export type TodoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Todo'>;
export type GeneralcreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'General'>;
export type PreventiveScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Preventive'>;
export type EmergencyScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Emergency'>;
export type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;
export type MainSlideshowScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MainSlideshow'>;
export type RouteScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Route'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6E45E2', // Color del header
          },
          headerTintColor: '#fff', // Color del texto
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} // Pantalla completa sin header
        />
        <Stack.Screen 
          name="AuthScreen" 
          component={AuthScreen}
          options={{ headerShown: false  }} // Título personalizado
        />
         <Stack.Screen 
          name="Daily" 
          component={DailyScreen}
          options={{ headerShown: false  }} // Título personalizado
        />
         <Stack.Screen 
          name="Todo" 
          component={TodoScreen}
          options={{ headerShown: false  }} // Título personalizado
        />
          <Stack.Screen 
          name="General" 
          component={General2Screen}
          options={{ headerShown: false  }} // Título personalizado
        />
         <Stack.Screen 
          name="Preventive" 
          component={PreventiveScreen}
          options={{ headerShown: false  }} // Título personalizado
        />
         <Stack.Screen 
          name="Emergency" 
          component={EmergencyScreen}
          options={{ headerShown: false  }} // Título personalizado
        />
         <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{ headerShown: false  }} // Título personalizado
        />
          <Stack.Screen 
          name="MainSlideshow" 
          component={MainSlideshow}
          options={{ headerShown: false  }} // Título personalizado
        />
          <Stack.Screen 
          name="Route" 
          component={RouteScreen}
          options={{ headerShown: false  }} // Título personalizado
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
