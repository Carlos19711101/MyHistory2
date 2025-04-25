import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, BackHandler, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');
const cardWidth = screenWidth * 0.8;
const cardMargin = screenWidth * 0.02;

const TodoScreen = ({ navigation }: any) => {
  // Array de imágenes de prueba (puedes reemplazar con tus URLs)
  const demoImages = [
    'https://cdn-icons-png.flaticon.com/512/3652/3652191.png', // Calendario
    'https://cdn-icons-png.flaticon.com/512/159/159469.png',   // Herramientas
    'https://cdn-icons-png.flaticon.com/512/2781/2781395.png', // Emergencia
    'https://cdn-icons-png.flaticon.com/512/1144/1144760.png', // Perfil
    'https://cdn-icons-png.flaticon.com/512/447/447031.png' // Ruta
  ];

  // Datos de las tarjetas con imágenes
  const cards = [
    {
      id: 1,
      title: 'Profile',
      subtitle: 'Perfil de usuario',
      color: '#9C27B0', // Morado
      screenName: 'Profile',
      image: demoImages[3]
    },
    {
      id: 2,
      title: 'Daily',
      subtitle: 'Actividades diarias',
      color: '#4CAF50', // Verde
      screenName: 'Daily',
      image: demoImages[0]
    },
    {
      id: 3,
      title: 'Preventive',
      subtitle: 'Mantenimiento preventivo',
      color: '#2196F3', // Azul
      screenName: 'Preventive',
      image: demoImages[1]
    },
    {
      id: 4,
      title: 'Emergency',
      subtitle: 'Casos de emergencia',
      color: '#FF5252', // Rojo
      screenName: 'Emergency',
      image: demoImages[2]
    },
    {
      id: 5,
      title: 'Route',
      subtitle: 'Perfil de usuario',
      color: '#9C27B0', // Morado
      screenName: 'Route',
      image: demoImages[4]
    },
  ];
  const exitApp = () => {
    Alert.alert(
      'Salir',
      '¿Estás seguro de que quieres salir de la aplicación?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Salir',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      { cancelable: false }
    );
  };


  return (
    <LinearGradient
      colors={['#88D3CE', '#6E45E2', '#090FFA']}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('AuthScreen')}
      >
        <AntDesign name="doubleleft" size={34} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.exitButton}
        onPress={exitApp}
      >
        <AntDesign name="logout" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <Text style={styles.title}></Text>
        <Text style={styles.title}>Opciones Principales</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselContainer}
          snapToInterval={cardWidth + cardMargin * 2}
          decelerationRate="fast"
        >
          {cards.map((card) => (
            <TouchableOpacity
              key={card.id}
              style={[styles.card, {
                backgroundColor: card.color,
                width: cardWidth,
                marginHorizontal: cardMargin
              }]}
              onPress={() => navigation.navigate(card.screenName)}
            >
              <Image
                source={{ uri: card.image }}
                style={styles.cardImage}
                resizeMode="contain"
              />
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingTop: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  carouselContainer: {
    paddingHorizontal: cardMargin,
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    height: cardWidth * 0.9, // Aumenté un poco el alto para las imágenes
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    padding: 15,
  },
  cardImage: {
    width: '40%',
    height: '40%',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  exitButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    padding: 10,
    margin: 10,
  },
  exitButtonText: {
  },
});

export default TodoScreen;