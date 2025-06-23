// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, BackHandler, Alert } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { AntDesign } from '@expo/vector-icons'; // Requiere instalar @expo/vector-icons

// const AuthScreen = ({ navigation }: any) => {
//   const [isLogged, setIsLogged] = React.useState(false);

//   const exitApp = () => {
//         Alert.alert(
//           'Salir',
//           '¿Estás seguro de que quieres salir de la aplicación?',
//           [
//             {
//               text: 'Cancelar',
//               style: 'cancel',
//             },
//             {
//               text: 'Salir',
//               onPress: () => BackHandler.exitApp(),
//             },
//           ],
//           { cancelable: false }
//         );
//      };
//   return (
//     <LinearGradient
//       colors={['#090FFA', '#6E45E2', '#88D3CE']} // Degradado de colores
//       style={styles.container}
//     >
//       <TouchableOpacity 
//       style={styles.exitButton}
//       onPress={exitApp}
//       >
//       <AntDesign name="logout" size={24} color="white" />
//       </TouchableOpacity>
//       <View style={styles.content}>
        
//         <Image 
//           // source={require('./assets/auth-icon.png')} // Reemplaza con tu imagen
//           source={{ uri: 'https://via.placeholder.com/100' }} 
//           style={styles.logo}
//         />
        
//         {isLogged ? (
//           <>
//             <Text style={styles.welcomeText}>¡Bienvenido de vuelta!</Text>
//             <TouchableOpacity 
//               style={[styles.button, styles.mainButton]}
//               onPress={() => navigation.navigate('Home')}
//             >
//               <Text style={styles.buttonText}>Continuar a la App</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             <Text style={styles.title}>¡Bienvenido!</Text>
//             <View style={styles.divider}>
//               <View style={styles.dividerLine} />
//               <Text style={styles.dividerText}>o</Text>
//               <View style={styles.dividerLine} />
//             </View>
//             <TouchableOpacity 
//                  // boton para pasar a la pantalla de TodoScreen
//                       style={[styles.button, styles.googleButton]}
//                       onPress={() => navigation.navigate('Todo')}
//                       activeOpacity={0.7} // Feedback táctil suave
//                     >
//                     <Text style={styles.buttonText}>Iniciar Sesión</Text>
//             </TouchableOpacity>
//             <Text style={styles.registerText}>¿No tienes cuenta? </Text>
//             <Text style={styles.registerText}></Text>
//             <TouchableOpacity 
//                      // boton para pasar a la pantalla de GeneralScreen
//                       style={[styles.button, styles.googleButton]}
//                       onPress={() => navigation.navigate('Todo')}
//                       activeOpacity={0.7} // Feedback táctil suave
//                     >
//                       <Text style={styles.buttonText}>Registrate</Text>
//             </TouchableOpacity>
//             <Text style={styles.buttonText}></Text>
//             <TouchableOpacity 
//               style={[styles.button, styles.googleButton]}
//               onPress={() => console.log('Google login')}
//             >
//               <AntDesign name="google" size={20} color="white" />
//               <Text style={[styles.buttonText, { marginLeft: 10 }]}>Continuar con Google</Text>
//             </TouchableOpacity>
           

//             <TouchableOpacity 
//               style={styles.registerLink}
//               onPress={() => navigation.navigate('Register')}
//             >

//             </TouchableOpacity>
//           </>
//         )}
//       </View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   content: {
//     padding: 20,
//     alignItems: 'center',
//     width: '100%',
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 30,
//   },
//   title2: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 30,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#4c4e5b',
//     textAlign: 'center',
//     marginBottom: 40,
//     lineHeight: 24,
//   },
//   welcomeText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 40,
//     textAlign: 'center',
//   },
//   button: {
//     width: '80%',
//     paddingVertical: 15,
//     borderRadius: 30,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   mainButton: {
//     backgroundColor: 'white',
//   },
//   googleButton: {
//     backgroundColor: '#cacbd6',
//   },
//   emailButton: {
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: '#FF7E5F',
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   buttonText2: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   divider: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//     width: '80%',
//   },
//   dividerLine: {
//     flex: 1,
//     height: 1,
//     backgroundColor: 'white',
//     opacity: 0.5,
//   },
//   dividerText: {
//     color: 'white',
//     marginHorizontal: 10,
//     fontSize: 14,
//   },
//   exitButton: {
//     position: 'absolute',
//     top: 50,
//     left: 20,
//     zIndex: 10,
//     margin: 10,
//     padding: 10,
//   },
//   registerLink: {
//     marginTop: 20,
//   },
//   registerText: {
//     color: '#4c4e5b',
    
//   },
//   registerBold: {
//     fontWeight: 'bold',
//     textDecorationLine: 'underline',
//   },
  
// });

// export default AuthScreen;

import React, { useEffect } from 'react';
import { 
  View, Text, TouchableOpacity, StyleSheet, Image, BackHandler, Alert 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; // Requiere instalar @expo/vector-icons

// Firebase y Expo AuthSession para Google Sign-In
import * as Google from 'expo-auth-session/providers/google';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithCredential, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signOut 
} from 'firebase/auth';

// Configuración Firebase (reemplaza con la tuya)
const firebaseConfig = {
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_AUTH_DOMAIN',
  projectId: 'TU_PROJECT_ID',
  storageBucket: 'TU_STORAGE_BUCKET',
  messagingSenderId: 'TU_MESSAGING_SENDER_ID',
  appId: 'TU_APP_ID',
};

// Inicializa Firebase solo una vez
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthScreen = ({ navigation }: any) => {
  // Estado para saber si el usuario está autenticado
  const [isLogged, setIsLogged] = React.useState(false);
  // Estado para saber si el usuario está autenticado en la nube (Google)
  const [isCloudUser, setIsCloudUser] = React.useState(false);

  // Configura Google Sign-In con Expo AuthSession
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: 'TU_CLIENT_ID_GOOGLE.apps.googleusercontent.com', // Reemplaza con tu clientId
  });

  // Efecto que detecta respuesta de Google Sign-In
  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => {
          // Usuario autenticado con Google
          setIsLogged(true);
          setIsCloudUser(true);
          // Aquí puedes sincronizar datos locales con la nube si quieres
          navigation.navigate('Home');
        })
        .catch(error => {
          Alert.alert('Error en login Google', error.message);
        });
    }
  }, [response]);

  // Detecta cambios en el estado de autenticación Firebase (p. ej. logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setIsLogged(true);
        setIsCloudUser(true);
      } else {
        setIsCloudUser(false);
        // Si quieres, puedes decidir si mantener isLogged true para modo local
      }
    });
    return unsubscribe;
  }, []);

  // Función para salir de la app con confirmación
  const exitApp = () => {
    Alert.alert(
      'Salir',
      '¿Estás seguro de que quieres salir de la aplicación?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Salir', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false }
    );
  };

  // Función para continuar sin registro (modo local)
  const continueWithoutRegistration = () => {
    setIsLogged(true);
    setIsCloudUser(false);
    navigation.navigate('Home');
  };

  // Función para cerrar sesión (solo si está autenticado en la nube)
  const logout = () => {
    if (isCloudUser) {
      signOut(auth)
        .then(() => {
          setIsLogged(false);
          setIsCloudUser(false);
        })
        .catch(error => Alert.alert('Error al cerrar sesión', error.message));
    } else {
      // Si es modo local, solo cambia estado
      setIsLogged(false);
    }
  };

  return (
    <LinearGradient
      colors={['#090FFA', '#6E45E2', '#88D3CE']}
      style={styles.container}
    >
      <TouchableOpacity style={styles.exitButton} onPress={exitApp}>
        <AntDesign name="logout" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} 
          style={styles.logo}
        />

        {isLogged ? (
          <>
            <Text style={styles.welcomeText}>¡Bienvenido de vuelta!</Text>
            <TouchableOpacity 
              style={[styles.button, styles.mainButton]}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.buttonText}>Continuar a la App</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.googleButton]}
              onPress={logout}
            >
              <Text style={styles.buttonText}>
                {isCloudUser ? 'Cerrar sesión' : 'Salir'}
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.title}>¡Bienvenido!</Text>

            <TouchableOpacity 
              style={[styles.button, styles.localButton]}
              onPress={continueWithoutRegistration}
            >
              <Text style={styles.buttonText}>Continuar sin registro</Text>
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>o</Text>
              <View style={styles.dividerLine} />
            </View>
            <TouchableOpacity 
                 // boton para pasar a la pantalla de TodoScreen
                      style={[styles.button, styles.googleButton]}
                      onPress={() => navigation.navigate('Todo')}
                      activeOpacity={0.7} // Feedback táctil suave
                    >
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <Text style={styles.registerText}>¿No tienes cuenta? </Text>
            <Text style={styles.registerText}></Text>
            <TouchableOpacity 
                     // boton para pasar a la pantalla de GeneralScreen
                      style={[styles.button, styles.googleButton]}
                      onPress={() => navigation.navigate('Todo')}
                      activeOpacity={0.7} // Feedback táctil suave
                    >
                      <Text style={styles.buttonText}>Registrate</Text>
            </TouchableOpacity>
            <Text style={styles.buttonText}></Text>
            <TouchableOpacity 
              style={[styles.button, styles.googleButton]}
              onPress={() => console.log('Google login')}
            >
              <AntDesign name="google" size={20} color="white" />
              <Text style={[styles.buttonText, { marginLeft: 10 }]}>Continuar con Google</Text>
            </TouchableOpacity>

            <Text style={styles.registerText}>
              Si registras con Google podrás sincronizar tus datos en la nube.
            </Text>
          </>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mainButton: {
    backgroundColor: 'white',
  },
  googleButton: {
    backgroundColor: '#4285F4', // Azul Google
  },
  localButton: {
    backgroundColor: '#cacbd6',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '80%',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
    opacity: 0.5,
  },
  dividerText: {
    color: 'white',
    marginHorizontal: 10,
    fontSize: 14,
  },
  exitButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    margin: 10,
    padding: 10,
  },
  registerText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});

export default AuthScreen;
