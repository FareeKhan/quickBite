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

const Vouchers = () => {
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
          <Text style={styles.headerTitle}>Vouchers</Text>
        </View>
        <View style={styles.deliveryContainer}>
          <Text style={styles.deliveryTitle}>Delivery notification</Text>
          <Text style={styles.deliveryDes}>
            Your item has been delivered. Please check your items before telling
            the OTP to Rider.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Vouchers;

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
  deliveryContainer: {
    marginTop: 40,
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
    gap: 20,
  },
  deliveryTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: Colors.white,
  },
  deliveryDes: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 13,
    color: Colors.gray,
  },
});
