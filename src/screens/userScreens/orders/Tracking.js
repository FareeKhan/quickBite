import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Tracking = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <Icons.Arrow />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Tracking</Text>
        </View>
        <Text style={styles.orderTrackingTitle}>Order Tracking</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.profileSection}>
            <View style={styles.profileInfo}>
              <Image
                source={require('../../../assets/images/userProfile.jpg')}
                resizeMode="cover"
                style={styles.profileImage}
              />
              <Text style={styles.profileName}>Rider Name</Text>
            </View>
            <View style={styles.actionsContainer}>
              <TouchableOpacity activeOpacity={0.8} style={styles.actionButton}>
                <Icons.MsgIcon />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.actionButton}>
                <Icons.CallIcon />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.orderDetailsContainer}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderDetailsTitle}>Order Details</Text>
              <Text style={styles.orderDate}>6-13-2024</Text>
            </View>
            <Text style={styles.orderDescription}>
              1x Double decker with extra cheese, 1x Tikka pizza with extra
              cheese.
            </Text>
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalAmount}>Rs 900</Text>
            </View>
          </View>
          <View style={styles.trackingStepsContainer}>
            <View style={styles.stepContainer}>
              <TouchableOpacity activeOpacity={0.8} style={styles.stepButton}>
                <Icons.TickIcon />
              </TouchableOpacity>
              <View style={styles.stepTextContainer}>
                <Text style={styles.stepTitle}>Order Accept</Text>
                <Text style={styles.stepTime}>7:00pm</Text>
              </View>
            </View>
            <View style={styles.stepDivider}>
              <Icons.ThumbIcon />
              <View style={[styles.dashedLine, {marginBottom: 40}]} />
            </View>
            <View style={styles.stepContainer}>
              <TouchableOpacity activeOpacity={0.8} style={styles.stepButton}>
                <Icons.tickIconGray />
              </TouchableOpacity>
              <View style={styles.stepTextContainer}>
                <Text style={styles.stepTitle}>Order Picked up</Text>
                <Text style={styles.stepTime}>7:10pm</Text>
              </View>
            </View>
            <View style={styles.stepDivider}>
              <View style={styles.dashedLine} />
            </View>
            <View style={styles.stepContainer}>
              <TouchableOpacity activeOpacity={0.8} style={styles.stepButton}>
                <Icons.tickIconGray />
              </TouchableOpacity>
              <View style={styles.stepTextContainer}>
                <Text style={styles.stepTitle}>Order delivered</Text>
                <Text style={styles.stepTime}>7:46pm</Text>
              </View>
            </View>
          </View>
          <View style={styles.otpContainer}>
            <Text style={styles.otpLabel}>OTP</Text>
            <Text style={styles.otpValue}>2234</Text>
          </View>
          <Text style={styles.otpNote}>
            Note: Do not give OTP until you received your items.
          </Text>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Report')}
            activeOpacity={0.8}
            style={styles.cancelOrderButton}>
            <Text style={styles.cancelOrderButtonText}>Cancel Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tracking;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 100,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
    color: Colors.white,
  },
  orderTrackingTitle: {
    marginTop: 40,
    marginBottom: 20,
    fontFamily: 'Manrope-Medium',
    fontSize: 17,
    color: Colors.white,
  },
  detailsContainer: {
    borderRadius: 15,
    backgroundColor: Colors.EerieBlack,
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 0.2,
    borderColor: Colors.gray,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  profileImage: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  profileName: {
    fontFamily: 'Manrope-Regular',
    fontSize: 17,
    color: Colors.white,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  actionButton: {
    height: 40,
    width: 40,
    backgroundColor: Colors.BGColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  orderDetailsContainer: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: Colors.gray,
    gap: 10,
  },
  orderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderDetailsTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.white,
  },
  orderDate: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
  },
  orderDescription: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.gray,
    width: 320,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalLabel: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: Colors.white,
  },
  totalAmount: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: Colors.btnColor,
  },
  trackingStepsContainer: {
    paddingTop: 30,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: Colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  stepContainer: {
    alignItems: 'center',
  },
  stepButton: {
    height: 40,
    width: 40,
    backgroundColor: Colors.BGColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  stepTextContainer: {
    alignItems: 'center',
  },
  stepTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 11,
    color: Colors.white,
  },
  stepTime: {
    fontFamily: 'Manrope-Medium',
    fontSize: 11,
    color: Colors.gray,
  },
  stepDivider: {
    gap: 5,
  },
  dashedLine: {
    width: 32,
    height: 35,
    borderTopWidth: 1,
    borderColor: Colors.gray,
    borderStyle: 'dashed',
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  otpLabel: {
    fontSize: 24,
    color: Colors.white,
    fontFamily: 'Inter_24pt-Regular',
  },
  otpValue: {
    fontSize: 24,
    color: Colors.btnColor,
    fontFamily: 'Inter_24pt-Regular',
  },
  otpNote: {
    fontFamily: 'Inter_24pt-Regular',
    fontSize: 12,
    color: Colors.gray,
    textAlign: 'center',
    paddingTop: 10,
  },
  cancelOrderButton: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 40,
  },
  cancelOrderButtonText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
});
