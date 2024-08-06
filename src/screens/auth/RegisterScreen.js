import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../constants/color';
import Icons from '../../assets/icons';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [securePasswordEntry, setSecurePasswordEntry] = useState(true);
  const [secureConfirmEntry, setSecureConfirmEntry] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleSecurePasswordEntry = () => {
    setSecurePasswordEntry(!securePasswordEntry);
  };

  const toggleSecureConfirmEntry = () => {
    setSecureConfirmEntry(!secureConfirmEntry);
  };

  const handleRegister = () => {
    if (fullName && email && password && confirmPassword) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('BottomTabNavigation');
      }, 100); 
    }
  };

  const buttonColor = fullName&&email&&password&&confirmPassword ? Colors.btnColor : Colors.EerieBlack;
  const buttonTextColor = fullName&&email&&password&&confirmPassword ? Colors.darkBronze : Colors.gray;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <Icons.Arrow />
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <Icons.UserPlusIcon />
          </View>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Enter your information</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <View style={styles.inputWrapper}>
              <Icons.UserIcon />
              <TextInput
                placeholder="Enter your full name"
                placeholderTextColor={Colors.gray}
                style={styles.textInput}
                value={fullName}
                onChangeText={text => setFullName(text)}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <View style={styles.inputWrapper}>
              <Icons.MailIcon />
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={Colors.gray}
                style={styles.textInput}
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputWrapper}>
              <Icons.LockIcon />
              <TextInput
                placeholder="Enter password"
                placeholderTextColor={Colors.gray}
                style={styles.textInput}
                secureTextEntry={securePasswordEntry}
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={toggleSecurePasswordEntry}>
                {securePasswordEntry ? <Icons.EyeOff /> : <Icons.EyeIcon />}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <View style={styles.inputWrapper}>
              <Icons.LockIcon />
              <TextInput
                placeholder="Enter confirm password"
                placeholderTextColor={Colors.gray}
                style={styles.textInput}
                secureTextEntry={secureConfirmEntry}
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={toggleSecureConfirmEntry}>
                {secureConfirmEntry ? <Icons.EyeOff /> : <Icons.EyeIcon />}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleRegister}
            activeOpacity={0.8}
            style={[styles.registerBtn, { backgroundColor: buttonColor }]}>
            {loading ? (
              <LottieView
                style={{ height: 30, width: 30, marginVertical: -1 }}
                source={require('../../assets/LottieFiles/whiteLoader.json')}
                autoPlay
                loop
              />
            ) : (
              <Text style={[styles.registerBtnText, { color: buttonTextColor }]}>
                Create Account
              </Text>
            )}
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 5,
    color: Colors.white,
  },
  subtitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    textAlign: 'center',
    color: Colors.gray,
    paddingBottom: 10,
  },
  inputContainer: {
    gap: 5,
    paddingTop: 13,
  },
  inputLabel: {
    color: Colors.white,
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
  },
  inputWrapper: {
    paddingVertical: 5,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  textInput: {
    fontSize: 13,
    fontFamily: 'Manrope-Medium',
    color: Colors.gray,
    width: '80%',
  },
  registerBtn: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 25,
  },
  registerBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
});
