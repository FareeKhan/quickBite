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

const Account = () => {
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
          <Text style={styles.headerTitle}>Account</Text>
        </View>
        <View style={styles.userInfo}>
          <Image
            source={require('../../../assets/images/userProfile.png')}
            resizeMode="cover"
            style={styles.userProfile}
          />
          <View style={{gap: -4}}>
            <Text style={styles.accountName}>Account Name</Text>
            <Text style={styles.accountEmail}>demo@gmail.com</Text>
          </View>
        </View>
        <View style={styles.btnsContainer}>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Icons.Notification />
            <Text style={styles.btnText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Icons.LocationYellowIcon height={32} width={31} />
            <Text style={styles.btnText}>Addresses</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Icons.HeartYellowNF height={32} width={31} />
            <Text style={styles.btnText}>Favourites</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.creditContainer}>
          <View style={styles.creditRow}>
            <Icons.CreditIcon />
            <Text style={styles.creditText}>Credit</Text>
          </View>
          <Text style={styles.creditPrice}>Rs 0.00</Text>
        </View>
        <View style={{marginTop: 40}}>
          <Text style={styles.Title}>General</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.item}>
            <View style={styles.itemRow}>
              <Icons.Profile />
              <Text style={styles.itemTitle}>Profile settings</Text>
            </View>
            <Icons.RightGrayDropDown />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.item}>
            <View style={styles.itemRow}>
              <Icons.Global />
              <Text style={styles.itemTitle}>Language</Text>
            </View>
            <Icons.RightGrayDropDown />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.item}>
            <View style={styles.itemRow}>
              <Icons.Help />
              <Text style={styles.itemTitle}>Help center</Text>
            </View>
            <Icons.RightGrayDropDown />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.item}>
            <View style={styles.itemRow}>
              <Icons.Notes />
              <Text style={styles.itemTitle}>Terms & policies</Text>
            </View>
            <Icons.RightGrayDropDown />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 40}}>
          <Text style={styles.Title}>Benefits for you</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.item}>
            <View style={styles.itemRow}>
              <Icons.Trophy />
              <Text style={styles.itemTitle}>Rewards</Text>
            </View>
            <Icons.RightGrayDropDown />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.item}>
            <View style={styles.itemRow}>
              <Icons.Gift />
              <Text style={styles.itemTitle}>Vouchers</Text>
            </View>
            <Icons.RightGrayDropDown />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.item}>
            <View style={styles.itemRow}>
              <Icons.Gift />
              <Text style={styles.itemTitle}>Invite friends</Text>
            </View>
            <Icons.RightGrayDropDown />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.logOut}>
          <Text style={styles.logOutText}>Log out</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.deleteBtn}>
          <Text style={styles.deleteBtnText}>Delete Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  creditContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: Colors.EerieBlack,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  creditRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  creditText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
  },
  creditPrice: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.white,
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
  logOut: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 70,
    borderWidth: 1,
    borderColor: Colors.btnColor,
  },
  logOutText: {
    color: Colors.btnColor,
    fontSize: 15,
    fontFamily: 'Manrope-Medium',
  },
  deleteBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  deleteBtnText: {
    color: Colors.red,
    fontSize: 15,
    fontFamily: 'Manrope-Medium',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingTop: 40,
    paddingBottom: 20,
  },
  userProfile: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  accountName: {
    fontFamily: 'Manrope-Medium',
    fontSize: 22,
    color: Colors.white,
  },
  accountEmail: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
  },
  btnsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 15,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    width: '32%',
  },
  btnText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
  },
  Title: {
    fontFamily: 'Manrope-Medium',
    fontSize: 17,
    color: Colors.white,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: '#89898975',
  },
  itemTitle: {
    fontFamily: 'Manrope-Meidum',
    fontSize: 13,
    color: Colors.gray,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
