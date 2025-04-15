import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; // Requiere instalar @expo/vector-icons

const AuthScreen = ({ navigation }: any) => {
  const [isLogged, setIsLogged] = React.useState(false);

  return (
    <LinearGradient
      colors={['#090ffa', '#6E45E2', '#88D3CE']} // Degradado de colores
      style={styles.container}
    >
      <View style={styles.content}>
        
        <Image 
          // source={require('./assets/auth-icon.png')} // Reemplaza con tu imagen
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
          </>
        ) : (
          <>
            <Text style={styles.title}>¡Bienvenido!</Text>
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
                      onPress={() => navigation.navigate('General2')}
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
           
            {/* <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>o</Text>
              <View style={styles.dividerLine} />
            </View> */}

            {/* <TouchableOpacity 
              style={[styles.button, styles.emailButton]}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={[styles.buttonText, { color: '#FF7E5F' }]}>Usar correo electrónico</Text>
            </TouchableOpacity> */}

            <TouchableOpacity 
              style={styles.registerLink}
              onPress={() => navigation.navigate('Register')}
            >

            </TouchableOpacity>
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
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    color: '#4c4e5b',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
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
    backgroundColor: '#cacbd6',
  },
  emailButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#FF7E5F',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: '600',
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
  registerLink: {
    marginTop: 20,
  },
  registerText: {
    color: '#4c4e5b',
    
  },
  registerBold: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default AuthScreen;
