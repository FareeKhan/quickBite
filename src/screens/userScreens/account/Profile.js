import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Platform
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Profile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [avatarImage,setAvatarImage]=useState('');

  const takeImageFromGallery = async () => {
    try {
      const res = await ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
        mediaType: 'photo',
      });

      if (res.path) {
        setAvatarImage(res.path);
      } else {
        console.log('No image selected');
      }
    } catch (error) {
      console.log('Error picking image:', error);
    }
  };
  

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
        <TouchableOpacity 
        onPress={takeImageFromGallery}
        activeOpacity={0.8} style={styles.profilePictureContainer}>
          <Image
            source={avatarImage ? { uri: avatarImage } : require('../../../assets/images/userProfile.png')}
            resizeMode="cover"
            style={styles.profileImage}
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.editIcon}>
            <Icons.PenIcon />
          </TouchableOpacity>
        </TouchableOpacity>
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
        <TouchableOpacity activeOpacity={0.8} style={styles.updateBtn}>
            <Text style={styles.updateBtnText}>Update</Text>
          </TouchableOpacity>
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
  updateBtn: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 30,
  },
  updateBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
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
    marginTop: 30,
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
    bottom: '35%',
    right: '6%',
  },
});
