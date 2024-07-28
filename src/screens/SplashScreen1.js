import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../constants/color';
import Icons from '../assets/icons';

const SplashScreen1 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Splash2');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.bg1Container}>
        <Icons.BG1 />
      </View>
      <View style={styles.iconContainer}>
        <Icons.AppIcon />
      </View>
      <View style={styles.bg2Container}>
        <Icons.BG2 />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen1;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
  },
  bg1Container: {
    alignItems: 'flex-end',
    height: '30%',
    top: '-4%',
  },
  iconContainer: {
    alignItems: 'center',
    height: '40%',
  },
  bg2Container: {
    alignItems: 'flex-start',
    height: '30%',
    left: '-15%',
    bottom: '-5%',
  },
});
