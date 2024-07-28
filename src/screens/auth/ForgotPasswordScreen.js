import React from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../constants/color';
import Icons from '../../assets/icons';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

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
            <Icons.LockLarge />
          </View>
          <Text style={styles.title}>Forget Password</Text>
          <Text style={styles.subtitle}>
            Please enter your email address for a verification code
          </Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <View style={styles.inputWrapper}>
              <Icons.MailIcon />
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={Colors.gray}
                style={styles.textInput}
              />
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.forgotBtn}>
            <Text style={styles.forgotBtnText}>Send Code</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;

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
    width:'70%',
    alignSelf:"center"
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
  forgotBtn: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 25,
  },
  forgotBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
});
