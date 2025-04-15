import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const RouteScreen = ({ navigation }: any) => {
  return (
    <LinearGradient
          colors={['#88D3CE', '#6E45E2', '#090FFA']} // Degradado 
          style={styles.container}
        >
          <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.navigate('Todo')}
    >
      {/* icono usado para devolver a todoScreen */}
      <AntDesign name="doubleleft" size={24} color="white" />
    </TouchableOpacity>
        <View style={styles.content}></View>

    </LinearGradient>
  )
}

export default RouteScreen;

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
    fontSize: 24,
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
  backButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    padding: 10,
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
    backgroundColor: '#DB4437',
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
    color: 'white',
  },
  registerBold: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});