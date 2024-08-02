import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomSheetComponent from '../../../components/BottomSheetComponent';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Orders = () => {
  const [isOpened, setisOpened] = useState(false);
  const navigation = useNavigation();

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
          <Text style={styles.headerTitle}>Orders</Text>
        </View>
        <View style={styles.btnsContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Orders', {screen: 'LiveOrders'})
            }
            activeOpacity={0.8}
            style={styles.liveBtn}>
            <Text style={styles.liveBtnText}>Live Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.discountBtn}>
            <Text style={styles.discountBtnText}>Delivered Orders</Text>
          </TouchableOpacity>
        </View>
        {isOpened ? (
          <BottomSheetComponent
            onPressMenu={() => setisOpened(!isOpened)}
            BGSheetColor={Colors.EerieBlack}
            HEIGHT={'70%'}
            marginBottom={190}
            Component={() => (
              <>
                <TouchableOpacity
                  onPress={() => setisOpened(!isOpened)}
                  activeOpacity={0.8}
                  style={styles.CrossIconContainer}>
                  <Icons.CrossIcon />
                </TouchableOpacity>
                <Text style={styles.review}>Review Required</Text>
                <Text style={styles.reviewDesc}>
                  Please give us the feedback about your delivery rider
                </Text>
                <View style={styles.starsContainer}>
                  <Icons.StarLarge />
                  <Icons.StarLarge />
                  <Icons.StarLarge />
                  <Icons.StarLargeBlack />
                  <Icons.StarLargeBlack />
                </View>
                <View style={styles.reviewContainer}>
                  <TextInput
                    placeholder="please let us know if you are allergic to anything or if we need to avoid anything"
                    placeholderTextColor={Colors.gray}
                    style={styles.input}
                    multiline={true}
                    numberOfLines={7}
                    textAlignVertical="top"
                  />
                </View>
                <Text style={styles.reviewTextCount}>50/500</Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.reviewBtn}>
                  <Text style={styles.reviewBtnText}>Submit Review</Text>
                </TouchableOpacity>
              </>
            )}
          />
        ) : null}
        <TouchableOpacity
          onPress={() => setisOpened(!isOpened)}
          activeOpacity={0.8}
          style={styles.orderCard}>
          <View style={styles.itemRow}>
            <Text style={styles.itemTitle}>
              1x Double decker with extra cheese
            </Text>
            <Text style={styles.itemPrice}>Rs 450</Text>
          </View>
          <View style={styles.itemRow}>
            <Text style={styles.itemTitle}>
              1x Tikka Pizza small with extra cheese
            </Text>
            <Text style={styles.itemPrice}>Rs 350</Text>
          </View>
          <View style={styles.itemRow}>
            <Text style={styles.delivery}>Delivery charge</Text>
            <Text style={styles.deliveryPrice}>Rs 100</Text>
          </View>
          <View style={styles.itemRow}>
            <Text style={styles.itemTotal}>Total</Text>
            <Text style={styles.itemTotalPrice}>Rs 900</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 30,
    alignSelf: 'center',
  },
  review: {
    fontFamily: 'Manrope-Medium',
    fontSize: 17,
    color: Colors.white,
    textAlign: 'center',
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
    gap: 100,
  },
  headerTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
    color: Colors.white,
  },
  btnsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  liveBtn: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
    paddingVertical: 15,
  },
  liveBtnText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: Colors.gray,
  },
  discountBtn: {
    width: '53%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.btnColor,
    borderRadius: 12,
    paddingVertical: 15,
    marginLeft: -10,
  },
  discountBtnText: {
    fontFamily: 'Manrope-Bold',
    color: Colors.darkBronze,
    fontSize: 15,
  },
  orderCard: {
    padding: 20,
    marginTop: 20,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 15,
    gap: 15,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemTotal: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.white,
    fontSize: 16,
    width: 120,
  },
  itemTotalPrice: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.btnColor,
    fontSize: 16,
  },
  itemTitle: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.gray,
    fontSize: 13,
    width: 120,
  },
  itemPrice: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.gray,
    fontSize: 13,
  },
  delivery: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.gray,
    fontSize: 13,
    width: 120,
  },
  deliveryPrice: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.gray,
    fontSize: 13,
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
  reviewContainer: {
    paddingHorizontal: 20,
    backgroundColor: Colors.BGColor,
    borderRadius: 15,
    paddingVertical: 10,
    marginHorizontal: 25,
    marginTop: 30,
  },
  reviewDesc: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
    textAlign: 'center',
    width: '50%',
    alignSelf: 'center',
    paddingTop: 15,
  },
  input: {
    fontFamily: 'Manrope-Medium',
    color: Colors.gray,
    fontSize: 13,
  },
  reviewTextCount: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
    alignSelf: 'flex-end',
    paddingRight: 30,
    paddingTop: 5,
  },
  reviewBtn: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginHorizontal: 25,
    marginTop: 30,
  },
  reviewBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
});
