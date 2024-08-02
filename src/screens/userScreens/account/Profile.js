import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Profile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <Icons.Arrow />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
        <View style={styles.profilePictureContainer}>
          <Image
            source={require('../../../assets/images/userProfile.png')}
            resizeMode="cover"
            style={styles.profileImage}
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.editIcon}>
            <Icons.PenIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.accountInfoContainer}>
          <Text style={styles.accountName}>Account Name</Text>
          <Text style={styles.accountEmail}>demo@gmail.com</Text>
        </View>
        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Account name"
                style={styles.input}
                placeholderTextColor={Colors.gray}
                value={name}
                onChangeText={setName}
              />
              <Icons.PenIcon />
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="demo@gmail.com"
                style={styles.input}
                placeholderTextColor={Colors.gray}
                value={email}
                onChangeText={setEmail}
              />
              <Icons.PenIcon />
            </View>
          </View>
        </View>
        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder=".................."
                style={styles.input}
                placeholderTextColor={Colors.gray}
                value={password}
                onChangeText={setPassword}
              />
              <Icons.PenIcon />
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="+123456789"
                style={styles.input}
                placeholderTextColor={Colors.gray}
                value={phoneNo}
                onChangeText={setPhoneNo}
              />
              <Icons.PenIcon />
            </View>
          </View>
        </View>
        <Text style={styles.connectAccountsTitle}>Connect Accounts</Text>
        <View>
          <TouchableOpacity activeOpacity={0.8} style={styles.googleButton}>
            <Icons.GoogleIcon />
            <Text style={styles.googleButtonText}>Google</Text>
          </TouchableOpacity>
          <Text style={styles.connectButtonText}>Connect</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    gap: 100,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
    color: Colors.white,
  },
  profilePictureContainer: {
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: '35%',
  },
  accountInfoContainer: {
    alignItems: 'center',
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
  inputGroup: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
  inputLabel: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.white,
    marginBottom: 5,
  },
  inputContainer: {
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  input: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: Colors.gray,
    width: 118,
  },
  connectAccountsTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 17,
    color: Colors.white,
    marginTop: 40,
    marginBottom: 20,
  },
  googleButton: {
    paddingVertical: 17,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  googleButtonText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 16,
    color: Colors.gray,
  },
  connectButtonText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.btnColor,
    position: 'absolute',
    bottom: '25%',
    right: '6%',
  },
});
