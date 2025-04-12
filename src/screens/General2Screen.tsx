import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSlideshow from '../presentation/components/MainSlideshow'
const General2Screen = () => {
  return (
    <View style={styles.container}>
      <MainSlideshow/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default General2Screen;
