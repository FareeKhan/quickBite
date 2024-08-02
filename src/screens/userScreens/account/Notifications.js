import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomSheetComponent from '../../../components/BottomSheetComponent';
import {useNavigation} from '@react-navigation/native';
import {notificationOptions} from '../../../constants/data';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Notifications = () => {
  const [isOpened, setisOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

  const handleSelectOption = item => {
    setSelectedOption(item);
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
          <Text style={styles.headerTitle}>Notifications</Text>
          {isOpened ? (
            <BottomSheetComponent
              onPressMenu={() => setisOpened(!isOpened)}
              BGSheetColor={Colors.primary}
              HEIGHT={'35%'}
              marginBottom={460}
              borderRadius={20}
              Component={() => (
                <View style={{padding: 30}}>
                  <View style={styles.BSHeader}>
                    <TouchableOpacity
                      style={[
                        styles.backButton,
                        {backgroundColor: Colors.BGColor},
                      ]}
                      onPress={() => setisOpened(!isOpened)}
                      activeOpacity={0.8}>
                      <Icons.Arrow />
                    </TouchableOpacity>
                    <Text style={styles.BSHeaderTitle}>
                      Notifications Settings
                    </Text>
                  </View>
                  {notificationOptions.map(item => (
                    <TouchableOpacity
                      onPress={() => handleSelectOption(item)}
                      activeOpacity={0.8}
                      style={styles.optionRow}>
                      <View
                        style={[
                          styles.optionCircle,
                          {
                            backgroundColor:
                              selectedOption === item && Colors.btnColor,
                          },
                        ]}>
                        {selectedOption === item && (
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
            onPress={() => setisOpened(!isOpened)}
            style={styles.iconContainer}>
            <Icons.settings />
          </TouchableOpacity>
        </View>
        <View style={styles.btnsContainer}>
          <TouchableOpacity activeOpacity={0.8} style={styles.unReadBtn}>
            <Text style={styles.unReadBtnText}>Unread</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.readBtn}>
            <Text style={styles.readBtnText}>Read</Text>
          </TouchableOpacity>
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

export default Notifications;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  BSHeader: {
    flexDirection: 'row',
    gap: 20,
    borderBottomWidth: 0.5,
    borderColor: '#89898975',
    paddingBottom: 15,
    marginBottom: 20,
  },
  BSHeaderTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.white,
    top: 2,
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
  backButton: {
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
    gap: 20,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
    color: Colors.white,
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  unReadBtn: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
    paddingVertical: 12,
  },
  unReadBtnText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: Colors.gray,
  },
  readBtn: {
    width: '53%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.btnColor,
    borderRadius: 12,
    paddingVertical: 12,
    marginLeft: -10,
  },
  readBtnText: {
    fontFamily: 'Manrope-Bold',
    color: Colors.darkBronze,
    fontSize: 15,
  },
  deliveryContainer: {
    marginTop: 20,
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
