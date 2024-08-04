import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import BottomSheetComponent from '../../../components/BottomSheetComponent';
import {paymentMethods,deliveryMethods} from '../../../constants/data';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Checkout = () => {
  const [orderSuccessfulBS, setOrderSuccessfulBS] = useState(false);
  const [paymentSelectionBS, setPaymentSelectionBS] = useState(false);
  const [deliverySelectionBS, setDeliverySelectionBS] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(null);

  const navigation = useNavigation();

  const handleSelectedPaymentMethod = item => {
    setSelectedPaymentMethod(item);
  };

  const handleSelectedDeliveryMethod = item => {
    setSelectedDeliveryMethod(item);
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
          <Text style={styles.headerTitle}>Checkout</Text>
        </View>
        <View style={styles.deliveryAddressContainer}>
          <View style={styles.deliveryAddressHeader}>
            <View style={styles.deliveryAddressTextContainer}>
              <Icons.LocationYellowIcon />
              <Text style={styles.deliveryAddressText}>Delivery address</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.changeButton}>
              <Text style={styles.changeButtonText}>change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.deliveryAddressImageContainer}>
            <Image
              source={require('../../../assets/images/MapPak.png')}
              resizeMode="cover"
              style={styles.deliveryAddressImage}
            />
          </View>
        </View>
        {paymentSelectionBS ? (
          <BottomSheetComponent
            onPressMenu={() => setPaymentSelectionBS(!paymentSelectionBS)}
            BGSheetColor={Colors.primary}
            HEIGHT={'25%'}
            marginBottom={10}
            Component={() => (
              <View style={{paddingHorizontal: 20, paddingVertical: 30}}>
                <Text
                  style={{
                    fontFamily: 'Manrope-SemiBold',
                    color: Colors.white,
                    fontSize: 18,
                    marginBottom: 20,
                  }}>
                  Select Payment Method
                </Text>
                {paymentMethods.map(item => (
                  <TouchableOpacity
                    onPress={() => handleSelectedPaymentMethod(item)}
                    activeOpacity={0.8}
                    style={styles.optionRow}>
                    <View
                      style={[
                        styles.optionCircle,
                        {
                          backgroundColor:
                            selectedPaymentMethod === item && Colors.btnColor,
                        },
                      ]}>
                      {selectedPaymentMethod === item && (
                        <View style={styles.optionInnerCircle} />
                      )}
                    </View>
                    <Text style={styles.optionValue}>{item.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          />
        ) : null}
        <TouchableOpacity
          onPress={() => setPaymentSelectionBS(!paymentSelectionBS)}
          activeOpacity={0.8}
          style={styles.paymentMethodContainer}>
          <View style={styles.paymentMethodTextContainer}>
            <Text style={styles.paymentMethodTitle}>Payment Method</Text>
            <View style={styles.paymentMethodDetails}>
              <Icons.ThumbIcon height={32} width={32} />
              <Text style={styles.paymentMethodText}>{selectedPaymentMethod?.title??'Cash on delivery'}</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.changeButton}>
            <Text style={styles.changeButtonText}>change</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        {deliverySelectionBS ? (
          <BottomSheetComponent
            onPressMenu={() => setDeliverySelectionBS(!deliverySelectionBS)}
            BGSheetColor={Colors.primary}
            HEIGHT={'25%'}
            marginBottom={10}
            Component={() => (
              <View style={{paddingHorizontal: 20, paddingVertical: 30}}>
                <Text
                  style={{
                    fontFamily: 'Manrope-SemiBold',
                    color: Colors.white,
                    fontSize: 18,
                    marginBottom: 20,
                  }}>
                  Select Delivery Method
                </Text>
                {deliveryMethods.map(item => (
                  <TouchableOpacity
                    onPress={() => handleSelectedDeliveryMethod(item)}
                    activeOpacity={0.8}
                    style={styles.optionRow}>
                    <View
                      style={[
                        styles.optionCircle,
                        {
                          backgroundColor:
                            selectedDeliveryMethod === item && Colors.btnColor,
                        },
                      ]}>
                      {selectedDeliveryMethod === item && (
                        <View style={styles.optionInnerCircle} />
                      )}
                    </View>
                    <Text style={styles.optionValue}>{item.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          />
        ) : null}
        <TouchableOpacity
        onPress={() => setDeliverySelectionBS(!deliverySelectionBS)}
        activeOpacity={0.8}
         style={styles.deliveryMethodContainer}>
          <View style={styles.deliveryMethodTextContainer}>
            <Text style={styles.deliveryMethodTitle}>Delivery method</Text>
            <View style={styles.deliveryMethodDetails}>
              <Icons.ThumbIcon height={32} width={32} />
              <Text style={styles.deliveryMethodText}>{selectedDeliveryMethod?.title??'Home delivery'}</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.changeButton}>
            <Text style={styles.changeButtonText}>change</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.orderSummaryContainer}>
          <Text style={styles.orderSummaryTitle}>Order Summary</Text>
          <View style={styles.orderSummaryItems}>
            <View style={styles.orderSummaryItem}>
              <Text style={styles.orderSummaryItemText}>
                1x Double decker with extra cheese
              </Text>
              <Text style={styles.orderSummaryItemPrice}>Rs 450</Text>
            </View>
            <View style={styles.orderSummaryItem}>
              <Text style={styles.orderSummaryItemText}>
                1x Tikka Pizza small with extra cheese
              </Text>
              <Text style={styles.orderSummaryItemPrice}>Rs 350</Text>
            </View>
            <View style={styles.orderSummaryItem}>
              <Text style={styles.orderSummaryItemText}>Delivery charge</Text>
              <Text style={styles.orderSummaryItemPrice}>Rs 100</Text>
            </View>
            <View style={styles.orderSummaryItem}>
              <Text style={styles.orderSummaryItemText}>Promo code</Text>
              <Text style={styles.orderSummaryItemPrice}>Rs 50</Text>
            </View>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalPrice}>Rs 900.00</Text>
          </View>
        </View>
        {orderSuccessfulBS ? (
          <BottomSheetComponent
            onPressMenu={() => setOrderSuccessfulBS(!orderSuccessfulBS)}
            BGSheetColor={Colors.EerieBlack}
            HEIGHT={'95%'}
            marginBottom={10}
            Component={() => (
              <>
                <ImageBackground
                  style={{width: '100%', height: 350}}
                  source={require('../../../assets/images/BG.png')}>
                  <TouchableOpacity
                    onPress={() => setOrderSuccessfulBS(!orderSuccessfulBS)}
                    activeOpacity={0.8}
                    style={styles.CrossIconContainer}>
                    <Icons.CrossIcon />
                  </TouchableOpacity>
                  <Image
                    source={require('../../../assets/images/Whatsapp.png')}
                    resizeMode="cover"
                    style={{alignSelf: 'center', marginBottom: 40}}
                  />
                </ImageBackground>
                <Text style={styles.thankYouText}>THANK YOU</Text>
                <Text style={styles.orderSuccessText}>Order Successful</Text>
                <Text style={styles.orderPlaceText}>
                  Your Order has been placed successfully{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Tracking')}
                  activeOpacity={0.8}
                  style={styles.trackBtn}>
                  <Text style={styles.trackBtnText}>Track Order</Text>
                </TouchableOpacity>
              </>
            )}
          />
        ) : null}
        <TouchableOpacity
          onPress={() => setOrderSuccessfulBS(!orderSuccessfulBS)}
          activeOpacity={0.8}
          style={styles.orderPlaceBtn}>
          <Text style={styles.orderPlaceBtnText}>Place Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;

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
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  optionCircle: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: Colors.btnColor,
    borderRadius: 50,
    top: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionValue: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.gray,
  },
  optionInnerCircle: {
    height: 11,
    width: 11,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 50,
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
  totalContainer: {
    marginTop: 25,
    paddingTop: 15,
    borderTopWidth: 0.5,
    borderColor: '#89898975',
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
  orderPlaceBtn: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 40,
    marginBottom: 30,
  },
  orderPlaceBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
  trackBtn: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 40,
    marginHorizontal: 20,
  },
  trackBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
  deliveryAddressContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 15,
  },
  deliveryAddressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deliveryAddressTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  deliveryAddressText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.white,
  },
  changeButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: Colors.BGColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeButtonText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: Colors.btnColor,
  },
  deliveryAddressImageContainer: {
    paddingTop: 20,
    borderTopWidth: 0.25,
    borderColor: '#89898930',
    marginTop: 10,
  },
  deliveryAddressImage: {
    width: '100%',
    borderRadius: 10,
  },
  paymentMethodContainer: {
    padding: 30,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 15,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentMethodTextContainer: {
    gap: 2,
  },
  paymentMethodTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.white,
  },
  paymentMethodDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  paymentMethodText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.gray,
  },
  deliveryMethodContainer: {
    padding: 30,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 15,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deliveryMethodTextContainer: {
    gap: 2,
  },
  deliveryMethodTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.white,
  },
  deliveryMethodDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  deliveryMethodText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.gray,
  },
  orderSummaryContainer: {
    padding: 30,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 15,
    marginTop: 20,
  },
  orderSummaryTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.white,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: '#89898975',
  },
  orderSummaryItems: {
    paddingTop: 15,
    gap: 20,
    marginBottom: -10,
  },
  orderSummaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderSummaryItemText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 15,
    color: Colors.gray,
    width: 150,
  },
  orderSummaryItemPrice: {
    fontFamily: 'Manrope-Regular',
    fontSize: 15,
    color: Colors.gray,
  },
  CrossIconContainer: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.BGColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  thankYouText: {
    fontFamily: 'Manrope-Bold',
    color: Colors.btnColor,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
  },
  orderSuccessText: {
    fontFamily: 'Manrope-Bold',
    color: Colors.btnColor,
    fontSize: 30,
    marginTop: 30,
    textAlign: 'center',
  },
  orderPlaceText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 30,
  },
});
