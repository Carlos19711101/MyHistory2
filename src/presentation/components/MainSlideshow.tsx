import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.6; // 60% para tarjeta central
const SIDE_CARD_WIDTH = width * 0.4; // 40% para tarjetas laterales
const SPACING = 0.6;
const MARGIN_HORIZONTAL = (width - CARD_WIDTH) / 2 - SPACING;

interface CardItem {
  id: string;
  color: string;
  text: string;
}

const MainSlideshow: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tarjetas originales
  const originalCards: CardItem[] = [
    { id: '1', color: '#ff9ff3', text: 'Tarjeta 1' },
    { id: '2', color: '#feca57', text: 'Tarjeta 2' },
    { id: '3', color: '#1dd1a1', text: 'Tarjeta 3' },
    { id: '4', color: '#0d1ff5', text: 'Tarjeta 4' },
    { id: '5', color: '#eb0e07', text: 'Tarjeta 5' },
    { id: '6', color: '#f6f613', text: 'Tarjeta 6' },
  ];

  // Duplicamos tarjetas para efecto infinito
  const cards = [
    ...originalCards.slice(-1).map(card => ({ ...card, id: `pre-${card.id}` })),
    ...originalCards,
    ...originalCards.slice(0, 1).map(card => ({ ...card, id: `post-${card.id}` })),
  ];

  const totalCards = originalCards.length;

  // Configuración inicial del scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: CARD_WIDTH + SPACING * 2, // Posición inicial (segunda tarjeta)
          animated: false,
        });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / (CARD_WIDTH + SPACING * 2));
    
    // Efecto infinito
    if (index >= cards.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: CARD_WIDTH + SPACING * 2, // Vuelve al inicio real
        animated: false,
      });
    } else if (index <= 0) {
      scrollViewRef.current?.scrollTo({
        x: (CARD_WIDTH + SPACING * 2) * (cards.length - 2), // Vuelve al final real
        animated: false,
      });
    }

    // Actualizar índice actual
    const adjustedIndex = (index - 1 + totalCards) % totalCards;
    setCurrentIndex(adjustedIndex);

    // Animación
    Animated.event(
      [{ nativeEvent: { contentOffset: { x: scrollX } } }],
      { useNativeDriver: false }
    )(event);
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / (CARD_WIDTH + SPACING * 2));
    const adjustedIndex = (index - 1 + totalCards) % totalCards;
    setCurrentIndex(adjustedIndex);
  };

  return (
     <LinearGradient
          colors={['#88D3CE', '#6E45E2', '#090FFA']}
          style={styles.container}
        >
      <View style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          decelerationRate={Platform.OS === 'ios' ? 0.99 : 0.95}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH + SPACING * 2}
          contentContainerStyle={styles.scrollContainer}
          onScroll={handleScroll}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          scrollEventThrottle={16}
          directionalLockEnabled={true}
          alwaysBounceHorizontal={false}
          bounces={false}
          overScrollMode="never"
        >
          {cards.map((card, index) => {
            const inputRange = [
              (index - 1) * (CARD_WIDTH + SPACING * 2),
              index * (CARD_WIDTH + SPACING * 2),
              (index + 1) * (CARD_WIDTH + SPACING * 2),
            ];

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.8, 0.9, 0.8],
              extrapolate: 'clamp',
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.5, 1, 0.5],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={card.id}
                style={[
                  styles.card,
                  {
                    width: CARD_WIDTH,
                    backgroundColor: card.color,
                    transform: [{ scale }],
                    opacity,
                    marginLeft: index === 0 ? MARGIN_HORIZONTAL : SPACING,
                    marginRight: index === cards.length - 1 ? MARGIN_HORIZONTAL : SPACING,
                  },
                ]}
              >
                <Text style={styles.cardText}>{card.text}</Text>
              </Animated.View>
            );
          })}
        </ScrollView>
        
        {/* Indicadores de posición */}
        <View style={styles.pagination}>
          {originalCards.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                currentIndex === index && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 320,
    marginVertical: 20,
    overflow: 'hidden',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  card: {
    height: 250,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#333',
    width: 16,
  },
});

export default MainSlideshow;