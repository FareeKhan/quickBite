import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Orders = () => {
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
          <TouchableOpacity activeOpacity={0.8} style={styles.liveBtn}>
            <Text style={styles.liveBtnText}>Live Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.discountBtn}>
            <Text style={styles.discountBtnText}>Delivered Orders</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.orderCard}>
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
        </View>
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
});
