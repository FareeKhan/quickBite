import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  ScrollView,
  LogBox,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {Slider} from '@react-native-assets/slider';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';
import {
  deals,
  categories,
  restaurants,
  brands,
  Popular,
  HotAndSpicy,
} from '../../../constants/data';
import Restaurants from './restaurant/Restaurants';

const Home = () => {
  const navigation = useNavigation();
  const [popular, setPopular] = useState(Popular);
  const [hotAndSpicy, setHotAndSpicy] = useState(HotAndSpicy);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [sliderValue, setSliderValue] = useState(6);

  const handlePopularQtyChange = (index, newQty) => {
    if (newQty >= 0) {
      const updatedProducts = [...popular];
      updatedProducts[index].qty = newQty;
      setPopular(updatedProducts);
    }
  };
  const handleHotAndSpicyQtyChange = (index, newQty) => {
    if (newQty >= 0) {
      const updatedProducts = [...hotAndSpicy];
      updatedProducts[index].qty = newQty;
      setHotAndSpicy(updatedProducts);
    }
  };

  const handleCategoryPress = index => {
    setSelectedCategory(index === selectedCategory ? -1 : index);
  };

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.screen}>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <View style={styles.headerContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AddAddress')}
                activeOpacity={0.8}
                style={styles.locationBtn}>
                <Icons.LocationIcon />
                <Text style={styles.locationText}>Hyderabad, Sindh</Text>
                <Icons.DownArrow />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Favourites')}
                activeOpacity={0.8}
                style={styles.heartBtn}>
                <Icons.HeartIcon />
              </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
              <View style={styles.searchInputContainer}>
                <Icons.SearchIcon />
                <TextInput
                  placeholder="Search food, restaurants"
                  placeholderTextColor={Colors.gray}
                  style={styles.searchInput}
                />
              </View>
              <Icons.FilterIcon />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Tracking')}
              activeOpacity={0.8}
              style={styles.section}>
              <View style={styles.trackingCard}>
                <View style={styles.trackingRow}>
                  <Text style={styles.trackingTitle}>Order Tracking</Text>
                  <Text style={styles.trackTime}>10 mins</Text>
                </View>
                <Slider
                  value={sliderValue}
                  minimumValue={1}
                  maximumValue={10}
                  step={1}
                  minimumTrackTintColor={Colors.btnColor}
                  maximumTrackTintColor={Colors.BGColor}
                  style={styles.slider}
                  thumbStyle={styles.sliderThumb}
                  trackStyle={styles.sliderTrack}
                  minTrackStyle={styles.minTrack}
                  maxTrackStyle={styles.maxTrack}
                  enabled={false}
                />
                <Icons.ThumbIcon
                  style={{
                    position: 'absolute',
                    bottom: '55%',
                    left: (sliderValue - 0.5) * 10 + '%',
                  }}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.section}>
              <Text style={styles.sectionTitleText}>Today’s Deal</Text>
              <View style={styles.dealContainer}>
                <FlatList
                  data={deals}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{gap: 15, paddingHorizontal: 20}}
                  renderItem={({item}) => (
                    <View style={styles.dealContentContainer}>
                      <View style={styles.dealContentRow}>
                        <View style={styles.dealTextContainer}>
                          <Text style={styles.dealTitle}>{item.title}</Text>
                          <View>
                            {item.items.map((text, index) => (
                              <Text key={index} style={styles.dealItemText}>
                                {text}
                              </Text>
                            ))}
                          </View>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.orderBtn}>
                            <Text style={styles.orderBtnText}>
                              {item.btnText}
                            </Text>
                          </TouchableOpacity>
                        </View>
                        {item.image}
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitleText}>Shop Now</Text>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginHorizontal: 20,
                }}>
                <View style={{width: '48%'}}>
                  <Image
                    source={require('../../../assets/images/BG.png')}
                    style={{
                      width: '100%',
                      height: 120,
                      borderRadius: 12,
                      backgroundColor: Colors.EerieBlack,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Restaurants')}
                    activeOpacity={0.8}
                    style={styles.shopContent}>
                    <Icons.Restaurant />
                    <Text style={styles.shopTitle}>All Restaurants</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width: '48%'}}>
                  <Image
                    source={require('../../../assets/images/BG.png')}
                    style={{
                      width: '100%',
                      height: 120,
                      borderRadius: 12,
                      backgroundColor: Colors.EerieBlack,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('DiscountedOffers')}
                    activeOpacity={0.8}
                    style={styles.shopContent}>
                    <Icons.Pricetag />
                    <Text style={styles.shopTitle}>DiscountedOffers</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitleText}>Category</Text>
              <View style={{marginTop: 20}}>
                <FlatList
                  data={categories}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{gap: 15, paddingHorizontal: 20}}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      onPress={() => handleCategoryPress(index)}
                      style={[
                        styles.categoryCard,
                        {
                          backgroundColor:
                            selectedCategory === index
                              ? Colors.btnColor
                              : Colors.EerieBlack,
                        },
                      ]}>
                      {item.image}
                      <Text
                        style={[
                          styles.categoryTitle,
                          {
                            color:
                              selectedCategory === index
                                ? Colors.primary
                                : Colors.white,
                          },
                        ]}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitleText}>
                  Restaurants near you
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Restaurants')}
                  activeOpacity={0.8}
                  style={styles.viewAllContainer}>
                  <Text style={styles.viewAllText}>View All</Text>
                  <Icons.RightArrow style={{top: 2}} />
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}}>
                <FlatList
                  data={restaurants}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{gap: 15, paddingHorizontal: 20}}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => navigation.navigate('RestaurantDetail')}>
                      <Image
                        source={item.image}
                        resizeMode="cover"
                        style={styles.restaurantImage}
                      />
                      <View style={styles.restaurantDetails}>
                        <View>
                          <Text style={styles.restaurantTitle}>
                            {item.title}
                          </Text>
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
                        <Text style={styles.restaurantDistance}>
                          {item.distance}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitleText}>Popular this week</Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.viewAllContainer}>
                  <Text style={styles.viewAllText}>View All</Text>
                  <Icons.RightArrow style={{top: 2}} />
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}}>
                <FlatList
                  data={popular}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{gap: 15, paddingHorizontal: 20}}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ItemDetail')}
                      activeOpacity={0.8}>
                      <View style={{paddingTop: 30}}>
                        <View style={styles.itemCard}>
                          <View style={styles.itemTextContainer}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemRestaurant}>
                              {item.restaurant}
                            </Text>
                            <Text style={styles.itemPrice}>{item.price}</Text>
                          </View>
                          <View style={styles.qtyContainer}>
                            <TouchableOpacity
                              onPress={() =>
                                handlePopularQtyChange(index, item.qty - 1)
                              }
                              activeOpacity={0.8}
                              style={styles.qtyIconContainer}>
                              <Icons.MinusIcon />
                            </TouchableOpacity>
                            <Text style={styles.itemQuantity}>{item.qty}</Text>
                            <TouchableOpacity
                              onPress={() =>
                                handlePopularQtyChange(index, item.qty + 1)
                              }
                              activeOpacity={0.8}
                              style={styles.qtyIconContainer}>
                              <Icons.PlusIcon />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                      <Image
                        source={item.image}
                        resizeMode="cover"
                        style={styles.itemImage}
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitleText}>Hot & Spicy</Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.viewAllContainer}>
                  <Text style={styles.viewAllText}>View All</Text>
                  <Icons.RightArrow style={{top: 2}} />
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}}>
                <FlatList
                  data={hotAndSpicy}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{gap: 15, paddingHorizontal: 20}}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ItemDetail')}
                      activeOpacity={0.8}>
                      <View style={{paddingTop: 30}}>
                        <View style={styles.itemCard}>
                          <View style={styles.itemTextContainer}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemRestaurant}>
                              {item.restaurant}
                            </Text>
                            <Text style={styles.itemPrice}>{item.price}</Text>
                          </View>
                          <View style={styles.qtyContainer}>
                            <TouchableOpacity
                              onPress={() =>
                                handleHotAndSpicyQtyChange(index, item.qty - 1)
                              }
                              activeOpacity={0.8}
                              style={styles.qtyIconContainer}>
                              <Icons.MinusIcon />
                            </TouchableOpacity>
                            <Text style={styles.itemQuantity}>{item.qty}</Text>
                            <TouchableOpacity
                              onPress={() =>
                                handleHotAndSpicyQtyChange(index, item.qty + 1)
                              }
                              activeOpacity={0.8}
                              style={styles.qtyIconContainer}>
                              <Icons.PlusIcon />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                      <Image
                        source={item.image}
                        resizeMode="cover"
                        style={styles.itemImage}
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitleText}>Top Brands</Text>
              <View style={{marginTop: 20}}>
                <FlatList
                  data={brands}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{gap: 15, paddingHorizontal: 20}}
                  renderItem={({item}) => (
                    <View style={styles.brandCard}>
                      {item.image}
                      <View style={styles.brandInfo}>
                        <Text style={styles.brandTitle}>{item.title}</Text>
                        <View style={styles.brandRatingWrapper}>
                          <View style={styles.ratingStars}>
                            <Icons.StarIcon />
                            <Icons.StarIcon />
                            <Icons.StarIcon />
                            <Icons.StarIcon />
                            <Icons.StarIcon />
                          </View>
                          <Text style={styles.brandTime}>{item.time}</Text>
                        </View>
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingTop: 40,
    paddingBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  trackingCard: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    marginHorizontal: 20,
  },
  trackingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  trackingTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.white,
  },
  trackTime: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.btnColor,
  },
  locationBtn: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 6,
    backgroundColor: Colors.EerieBlack,
    width: '60%',
  },
  locationText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.white,
    width: '70%',
  },
  heartBtn: {
    height: 49,
    width: 49,
    borderRadius: 10,
    backgroundColor: Colors.EerieBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  searchInput: {
    fontFamily: 'Manrope-Regular',
    color: Colors.gray,
    fontSize: 14,
    width: '83%',
  },
  section: {
    paddingTop: 40,
  },
  sectionTitleText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 20,
    color: Colors.white,
    paddingHorizontal: 20,
  },
  dealContainer: {
    paddingTop: 20,
  },
  dealContentContainer: {
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: Colors.btnColor,
    paddingVertical: 10,
  },
  dealContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dealTextContainer: {
    gap: 13,
  },
  dealTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 19,
    color: Colors.BGColor,
  },
  dealItemText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: Colors.BGColor,
    maxWidth: 155,
  },
  orderBtn: {
    backgroundColor: Colors.BGColor,
    borderRadius: 15,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  orderBtnText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 12,
    color: Colors.btnColor,
  },
  shopBackground: {
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
  },
  shopContent: {
    alignItems: 'center',
    gap: 5,
    height: 120,
    width: '48%',
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
  },
  shopImage: {
    height: 50,
    width: 50,
  },
  shopTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: Colors.white,
  },
  categoryCard: {
    padding: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  categoryTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
  },
  viewAllContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  viewAllText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.btnColor,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  restaurantImage: {
    height: 150,
    width: 300,
    borderRadius: 25,
  },
  restaurantDetails: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    width: '100%',
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
  brandCard: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 25,
    gap: 10,
    height: 140,
  },
  brandInfo: {
    gap: 3,
  },
  brandTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 17,
    color: Colors.white,
  },
  brandRatingWrapper: {
    flexDirection: 'row',
    gap: 20,
  },
  brandTime: {
    fontFamily: 'Manrope-ExtraBold',
    color: Colors.white,
    fontSize: 12,
  },
  itemCard: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingTop: 50,
  },
  itemTextContainer: {
    alignItems: 'center',
    gap: 5,
  },
  itemName: {
    fontFamily: 'Manrope-Medium',
    fontSize: 16,
    color: Colors.white,
  },
  itemRestaurant: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: Colors.gray,
  },
  itemPrice: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: Colors.white,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  qtyIconContainer: {
    height: 25,
    width: 25,
    backgroundColor: Colors.BGColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  itemQuantity: {
    fontFamily: 'Onest-Bold',
    fontSize: 18,
    color: Colors.white,
  },
  itemImage: {
    height: 70,
    width: 80,
    position: 'absolute',
    left: '20%',
  },
  slider: {
    marginTop: 40,
  },
  sliderThumb: {
    height: 40,
    width: 40,
    marginBottom: 70,
    backgroundColor: 'transparent',
    marginLeft: -20,
  },
  sliderTrack: {
    height: 20,
  },
  minTrack: {
    borderRadius: 8,
  },
  maxTrack: {
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
  },
});
