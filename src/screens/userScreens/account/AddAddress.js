import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const AddAddress = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/Map.png')}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Welcome!</Text>
          <Text style={styles.headerSubtitle}>
            Please enter your location for delivery.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.divider} />
          <View style={styles.locationContainer}>
            <View style={styles.locationInfo}>
              <Icons.LocationYellowIcon />
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationTitle}>House No</Text>
                <Text style={styles.locationSubtitle}>Hyderabad</Text>
              </View>
            </View>
            <Icons.PenIcon />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.addressBtn}>
            <Text style={styles.addressBtnText}>Add address details</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    marginTop: 40,
    marginHorizontal: 20,
  },
  headerTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 17,
    color: Colors.white,
  },
  headerSubtitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.btnColor,
  },
  footerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  divider: {
    width: 50,
    height: 3,
    backgroundColor: Colors.btnColor,
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  locationContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#89898975',
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  locationTextContainer: {
    gap: -2,
  },
  locationTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: Colors.white,
  },
  locationSubtitle: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: Colors.gray,
  },
  addressBtn: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 40,
    marginBottom: 20,
  },
  addressBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
});
