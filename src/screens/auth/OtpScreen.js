import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../constants/color';
import Icons from '../../assets/icons';

const OtpScreen = () => {
  const navigation = useNavigation();

  const inputRefs = useRef([]);

  const [otpCode, setOtpCode] = useState(['', '', '', '']);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleOtpChange = (index, value) => {
    const newOtpCode = [...otpCode];
    newOtpCode[index] = value;
    setOtpCode(newOtpCode);
    if (value && index < otpCode.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && index > 0 && !otpCode[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const renderOtpInput = ({index}) => (
    <View
      style={[styles.otpInputContainer, {borderWidth: otpCode[index] ? 1 : 0}]}>
      <TextInput
        ref={ref => (inputRefs.current[index] = ref)}
        style={styles.otpInput}
        keyboardType="number-pad"
        maxLength={1}
        value={otpCode[index]}
        onChangeText={value => handleOtpChange(index, value)}
        onKeyPress={({nativeEvent}) => handleKeyPress(index, nativeEvent.key)}
      />
    </View>
  );

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
            <Icons.OtpIcon />
          </View>
          <Text style={styles.title}>OTP</Text>
          <Text style={styles.subtitle}>
            Enter the verification code we sent to your email address
          </Text>
          <View style={styles.otpContainer}>
            <FlatList
              data={otpCode}
              renderItem={renderOtpInput}
              keyExtractor={(_, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{gap: 17}}
            />
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Auth', {screen: 'ChangePassword'})
            }
            activeOpacity={0.8}
            style={styles.OtpBtn}>
            <Text style={styles.OtpBtnText}>Send Code</Text>
          </TouchableOpacity>
          <Text style={styles.resendCodeText}>Resend code in 00:00</Text>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default OtpScreen;

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
    width: '70%',
    alignSelf: 'center',
  },
  OtpBtn: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 25,
  },
  OtpBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
  resendCodeText: {
    paddingTop: 10,
    fontSize: 15,
    fontFamily: 'Manrope-SemiBold',
    color: Colors.gray,
    textAlign: 'center',
  },
  otpContainer: {
    marginTop: 10,
  },
  otpInputContainer: {
    height: 53,
    width: 75,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.btnColor,
  },
  otpInput: {
    fontFamily: 'Manrope-Medium',
    fontSize: 30,
    color: Colors.btnColor,
    top: '10%',
  },
});
