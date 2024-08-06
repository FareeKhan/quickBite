import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomSheetComponent from '../../../components/BottomSheetComponent';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const AddAddress = () => {
  const [isOpened, setisOpened] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);



  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/Map.png')}>
        {headerVisible && (
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Welcome!</Text>
            <Text style={styles.headerSubtitle}>
              Please enter your location for delivery.
            </Text>
          </View>
        )}
        {isOpened ? (
          <View style={styles.iconsView}>
            <TouchableOpacity activeOpacity={0.8} style={styles.icon}>
              <Icons.CrossIcon />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.icon}>
              <Icons.LiveLocationIcon />
            </TouchableOpacity>
          </View>
        ) : null}
        <View style={styles.footerContainer}>
          <View style={styles.divider} />
          <TouchableOpacity activeOpacity={0.8} style={styles.iconContainer}>
            <Icons.LiveLocationIcon />
          </TouchableOpacity>
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
          {isOpened ? (
            <BottomSheetComponent
              onPressMenu={() => setisOpened(!isOpened)}
              marginBottom={10}
              HEIGHT={isOpened?'80%':'88%'}
              Component={() => (
                <>
                  <View style={[styles.divider, {marginTop: 15}]} />
                  <View style={styles.itemRow}>
                    <TouchableOpacity
                      style={styles.backButton}
                      onPress={() => setisOpened(!isOpened)}
                      activeOpacity={0.8}>
                      <Icons.Arrow />
                    </TouchableOpacity>
                    <View style={styles.titleRow}>
                    <TextInput
                        placeholder="Latifabad No"
                        placeholderTextColor={Colors.gray}
                        style={styles.title}
                      />
                      <TouchableOpacity activeOpacity={0.8} style={styles.icon}>
                        <Icons.CrossIcon />
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              )}
              BGSheetColor={Colors.primary}
            />
          ) : null}
          <TouchableOpacity
            onPress={() => setisOpened(!isOpened)}
            activeOpacity={0.8}
            style={styles.addressBtn}>
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
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginHorizontal: 20,
  },
  iconsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:20
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
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
  backButton: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: Colors.BGColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleRow: {
    paddingHorizontal: 20,
    backgroundColor: Colors.BGColor,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    width: '80%',
  },
  title: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
    width:'70%'
  },
  footerContainer: {
    paddingHorizontal: 30,
    paddingTop: 15,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  divider: {
    width: 80,
    height: 3,
    backgroundColor: Colors.btnColor,
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 40,
  },
  locationContainer: {
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#89898975',
    paddingTop: 35,
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
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -105,
    alignSelf: 'flex-end',
    marginRight: -20,
  },
});
