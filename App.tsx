// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import WelcomeScreen from './src/screens/WellcomeScreen';
// import AuthScreen from './src/screens/AuthScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Welcome" component={WelcomeScreen} />
//         <Stack.Screen name="AuthScreen" component={AuthScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen'; // Nota: Revisa si es "Wellcome" o "Welcome"
import AuthScreen from './src/screens/AuthScreen';

// 1. Define los tipos de rutas
type RootStackParamList = {
  Welcome: undefined;
  AuthScreen: undefined;
  // Agrega más rutas aquí cuando las necesites
};

// 2. Exporta los tipos para usarlos en las pantallas
export type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
export type AuthScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AuthScreen'>;

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
