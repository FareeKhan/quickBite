import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  LogBox,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';
import {discountedRestaurants} from '../../../constants/data';

const DiscountedOffers = () => {
  const navigation = useNavigation();
  const [favoriteStates, setFavoriteStates] = useState([]);

  const toggleFavorite = index => {
    const newFavoriteStates = [...favoriteStates];
    newFavoriteStates[index] = !newFavoriteStates[index];
    setFavoriteStates(newFavoriteStates);
  };

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <Icons.Arrow />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Discounted Offers</Text>
        </View>
        <FlatList
          data={discountedRestaurants}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{gap: 15, paddingVertical: 40}}
          renderItem={({item, index}) => (
            <View>
              <Image
                source={item.image}
                resizeMode="cover"
                style={styles.restaurantImage}
              />
              <View style={styles.restaurantDetails}>
                <View>
                  <Text style={styles.restaurantTitle}>{item.title}</Text>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>Rating</Text>
                    <View style={styles.ratingStars}>
                      <Icons.StarIcon />
                      <Icons.StarIcon />
                      <Icons.StarIcon />
                      <Icons.StarIcon />
                      <Icons.StarIcon />
                    </View>
                  </View>
                </View>
                <Text style={styles.restaurantDistance}>{item.distance}</Text>
              </View>
              <View style={styles.discountRow}>
                <View style={styles.discountContainer}>
                  <Icons.DiscountIcon />
                  <Text style={styles.discountText}>{item.discount}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => toggleFavorite(index)}
                  activeOpacity={0.8}
                  style={styles.iconContainer}>
                  {favoriteStates[index] ? (
                    <Icons.YellowHeart />
                  ) : (
                    <Icons.HeartIcon />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscountedOffers;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 70,
  },
  headerTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
    color: Colors.white,
  },
  restaurantImage: {
    height: 200,
    width: '100%',
    borderRadius: 25,
  },
  restaurantDetails: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#00000045',
    paddingVertical: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  restaurantTitle: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 18,
    color: Colors.white,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ratingText: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 12,
    color: Colors.white,
  },
  ratingStars: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  restaurantDistance: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 12,
    color: Colors.white,
  },
  iconContainer: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: Colors.EerieBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    width: '100%',
    top: '8%',
  },
  discountContainer: {
    paddingVertical: 5,
    paddingRight: 20,
    paddingLeft: 10,
    backgroundColor: Colors.btnColor,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  discountText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: Colors.primary,
  },
});
