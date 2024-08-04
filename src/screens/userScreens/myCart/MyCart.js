import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {deliveryOptions, cartData} from '../../../constants/data';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const MyCart = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [cart, setCart] = useState(cartData);
  const navigation = useNavigation();

  const handleSelectOption = item => {
    setSelectedOption(item);
  };

  const handleQtyChange = (index, newQty) => {
    if (newQty >= 0) {
      const updatedProducts = [...cart];
      updatedProducts[index].qty = newQty;
      setCart(updatedProducts);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <Icons.Arrow />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>MyCart</Text>
        </View>
        <FlatList
          data={cartData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{gap: 15}}
          renderItem={({item, index}) => (
            <View style={styles.cartItemCard}>
              <View style={styles.cartItemContent}>
                {item.image}
                <View style={styles.cartItemDetails}>
                  <View>
                    <Text style={styles.itemTitle}>{item.name}</Text>
                    <Text style={styles.itemDescription}>{item.desc}</Text>
                  </View>
                  <View style={styles.quantityControl}>
                    <TouchableOpacity
                      onPress={() => handleQtyChange(index, item.qty - 1)}
                      activeOpacity={0.8}
                      style={styles.quantityButton}>
                      <Icons.MinusIcon />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.qty}</Text>
                    <TouchableOpacity
                      onPress={() => handleQtyChange(index, item.qty + 1)}
                      activeOpacity={0.8}
                      style={styles.quantityButton}>
                      <Icons.PlusIcon />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.priceContainer}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.deleteButton}>
                    <Icons.DeleteIcon />
                  </TouchableOpacity>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                </View>
              </View>
            </View>
          )}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('BottomTabNavigation', {screen: 'Home'})
          }
          activeOpacity={0.8}
          style={styles.addMoreWrapper}>
          <Text style={styles.addMoreText}>Add more items</Text>
          <TouchableOpacity
            style={[
              styles.quantityButton,
              {backgroundColor: Colors.EerieBlack},
            ]}>
            <Icons.PlusIcon />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.deliveryOptionsContainer}>
          <Icons.ThumbIcon
            style={{alignSelf: 'center'}}
            height={60}
            width={60}
          />
          <Text style={styles.deliveryTitle}>Choose Delivery Method</Text>
          {deliveryOptions.map((item, index) => (
            <View
              style={[
                styles.deliveryOption,
                {
                  borderBottomWidth:
                    index < deliveryOptions.length - 1 ? 0.2 : 0,
                },
              ]}
              key={index}>
              <TouchableOpacity
                onPress={() => handleSelectOption(item)}
                activeOpacity={0.8}
                style={styles.optionRow}>
                <View
                  style={[
                    styles.optionCircle,
                    {
                      backgroundColor:
                        selectedOption === item
                          ? Colors.btnColor
                          : Colors.EerieBlack,
                    },
                  ]}>
                  {selectedOption === item && (
                    <View style={styles.optionInnerCircle} />
                  )}
                </View>
                <View>
                  <Text style={styles.deliveryType}>{item.title}</Text>
                  <Text style={styles.deliveryInfo}>
                    {item.time}
                    {'  '}|{'    '}
                    {item.date}
                    {'   '}
                    <Icons.GrayDownArrow />
                  </Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.deliveryPrice}>{item.price}</Text>
            </View>
          ))}
        </View>
        <View style={styles.promoCodeContainer}>
          <TextInput
          placeholder='Enter Promo Code'
          style={styles.promoCodeText}
          placeholderTextColor={Colors.gray}
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.applyBtn}>
            <Text style={styles.applyBtnText}>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalPrice}>Rs 900.00</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Checkout')}
          activeOpacity={0.8}
          style={styles.confirmOrderBtn}>
          <Text style={styles.confirmOrderBtnText}>Confirm Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  goBackButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 100,
    marginBottom: 25,
  },
  headerTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
    color: Colors.white,
  },
  cartItemCard: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
    marginTop: 15,
  },
  cartItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartItemDetails: {
    gap: 20,
  },
  itemTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: Colors.white,
  },
  itemDescription: {
    fontFamily: 'Manrope-Regular',
    fontSize: 13,
    color: Colors.gray,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  quantityButton: {
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
  priceContainer: {
    alignItems: 'flex-end',
    gap: 20,
  },
  deleteButton: {
    height: 40,
    width: 40,
    backgroundColor: Colors.BGColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  itemPrice: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.btnColor,
    fontSize: 17,
  },
  optionRow: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 15,
  },
  optionInnerCircle: {
    height: 11,
    width: 11,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 50,
  },
  optionCircle: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: Colors.btnColor,
    borderRadius: 50,
    top: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryOptionsContainer: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 15,
  },
  promoCodeContainer: {
    marginTop: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  promoCodeText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: Colors.gray,
    width:'50%'
  },
  totalContainer: {
    marginTop: 25,
    paddingTop: 15,
    borderTopWidth: 0.5,
    borderColor: Colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 18,
    color: Colors.white,
  },
  totalPrice: {
    fontFamily: 'Manrope-Regular',
    fontSize: 18,
    color: Colors.btnColor,
  },
  applyBtn: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BGColor,
    borderRadius: 6,
  },
  applyBtnText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 13,
    color: Colors.white,
  },
  deliveryTitle: {
    paddingTop: 10,
    paddingBottom: 20,
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.white,
    textAlign: 'center',
  },
  deliveryType: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.white,
  },
  deliveryInfo: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
  },
  deliveryPrice: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: Colors.white,
    top: 5,
  },
  deliveryOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: Colors.gray,
    paddingTop: 10,
  },
  addMoreWrapper: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  addMoreText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.btnColor,
  },
  confirmOrderBtn: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 40,
    marginBottom:30,
  },
  confirmOrderBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
});
