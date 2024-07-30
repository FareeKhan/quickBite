import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../../constants/color';
import Icons from '../../../../assets/icons';
import {
  productData,
  categoryBtns,
  availableDeals,
} from '../../../../constants/data';

const RestaurantDetail = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryPress = index => {
    setSelectedCategory(index === selectedCategory ? -1 : index);
  };

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
          <View style={styles.iconsContainer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.iconContainer}>
              <Icons.Share />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.iconContainer}>
              <Icons.HeartYellowNF />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.iconContainer}>
              <Icons.SearchYellow />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <View>
            <Icons.Kababjees style={{top: -3}} />
            <Text style={styles.restaurantName}>
              Kababjees Bakers - Autobhan
            </Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>2km away</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>Rs 129 Delivery</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>Rs 199 Minimum</Text>
            </View>
          </View>
        </View>
        <View style={styles.ratingDeliverySection}>
          <View style={styles.ratingContainer}>
            <Icons.StarLarge style={styles.ratingIcon} />
            <Text style={styles.ratingLabel}>Ratings</Text>
            <View style={styles.ratingInfo}>
              <Text style={styles.ratingValue}>4.7</Text>
              <Text style={styles.ratingCount}>1000+</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.deliveryContainer}>
            <Icons.ThumbIcon style={styles.deliveryIcon} />
            <Text style={styles.deliveryLabel}>Delivery</Text>
            <Text style={styles.deliveryTime}>10 - 25 min</Text>
          </View>
        </View>
        <View style={styles.dealsSection}>
          <Text style={styles.sectionTitle}>Available Deals</Text>
          <FlatList
            data={availableDeals}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dealsList}
            renderItem={({item}) => (
              <View style={styles.dealItem}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                  <Icons.PercentRound style={styles.dealIcon} />
                  <Text style={styles.dealDiscount}>{item.discount}</Text>
                </View>
                <Text style={styles.dealDescription}>{item.desc}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.categoriesSection}>
          <FlatList
            data={categoryBtns}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
            renderItem={({item, index}) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleCategoryPress(index)}
                style={[
                  styles.categoryButton,
                  {
                    backgroundColor:
                      selectedCategory === index
                        ? Colors.btnColor
                        : Colors.EerieBlack,
                  },
                ]}>
                <Text
                  style={[
                    styles.categoryButtonText,
                    {
                      color:
                        selectedCategory === index
                          ? Colors.darkBronze
                          : Colors.gray,
                    },
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <FlatList
          data={productData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.productList}
          renderItem={({item}) => (
            <View style={styles.productItem}>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDescription}>{item.desc}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.productPrice}>{item.price}</Text>
                  <View style={styles.quantityContainer}>
                    <Icons.MinusIcon style={styles.quantityIcon} />
                    <Text style={styles.quantityText}>1</Text>
                    <Icons.PlusIcon style={styles.quantityIcon} />
                  </View>
                </View>
              </View>
              <Icons.Burger style={styles.productImage} />
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingVertical: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer: {
    backgroundColor: Colors.EerieBlack,
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 35,
    marginTop: 20,
    gap: 10,
    marginHorizontal: 20,
  },
  restaurantImage: {
    width: '100%',
  },
  restaurantName: {
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
    color: Colors.white,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: -5,
  },
  infoBox: {
    padding: 10,
    backgroundColor: Colors.BGColor,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 13,
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
  ratingDeliverySection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.EerieBlack,
    borderRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },
  ratingContainer: {
    alignItems: 'center',
    gap: 5,
  },
  ratingIcon: {
    marginBottom: -3,
  },
  ratingLabel: {
    fontFamily: 'Manrope-Regular',
    fontSize: 13,
    color: Colors.white,
  },
  ratingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ratingValue: {
    fontFamily: 'Manrope-Regular',
    fontSize: 13,
    color: Colors.white,
  },
  ratingCount: {
    fontFamily: 'Manrope-Regular',
    fontSize: 13,
    color: Colors.gray,
  },
  divider: {
    height: '100%',
    backgroundColor: Colors.gray,
    width: 0.5,
  },
  deliveryContainer: {
    alignItems: 'center',
    gap: 5,
  },
  deliveryIcon: {
    marginBottom: -3,
  },
  deliveryLabel: {
    fontFamily: 'Manrope-Regular',
    fontSize: 13,
    color: Colors.white,
  },
  deliveryTime: {
    fontFamily: 'Manrope-Regular',
    fontSize: 13,
    color: Colors.white,
  },
  dealsSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
    color: Colors.white,
    paddingHorizontal: 20,
  },
  dealsList: {
    gap: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dealItem: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 15,
  },
  dealIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  dealDiscount: {
    fontFamily: 'Manrope-Medium',
    color: Colors.white,
    fontSize: 17,
  },
  dealDescription: {
    fontFamily: 'Manrope-Medium',
    fontSize: 10,
    color: Colors.gray,
    width: 150,
  },
  categoriesSection: {
    marginVertical: 20,
  },
  categoryList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    gap: 15,
  },
  categoryButton: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButtonText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 13,
  },
  productList: {
    gap: 15,
  },
  productItem: {
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: Colors.EerieBlack,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 5,
  },
  productName: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: Colors.white,
  },
  productDescription: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
    width: 200,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    paddingTop: 15,
  },
  productPrice: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.btnColor,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  quantityIcon: {
    height: 25,
    width: 25,
    backgroundColor: Colors.BGColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  quantityText: {
    fontFamily: 'Onest-Bold',
    fontSize: 18,
    color: Colors.white,
  },
});
