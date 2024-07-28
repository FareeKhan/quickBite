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

const LoginScreen = () => {
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
            <Icons.SheildIcon />
          </View>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Login to continue using the app</Text>
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
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputWrapper}>
              <Icons.LockIcon />
              <TextInput
                placeholder="Enter password"
                placeholderTextColor={Colors.gray}
                style={styles.textInput}
              />
              <Icons.EyeIcon />
            </View>
          </View>
          <Text
            onPress={() =>
              navigation.navigate('Auth', {screen: 'ForgotPassword'})
            }
            style={styles.forgotPassword}>
            Forget Password?
          </Text>
          <TouchableOpacity
          onPress={()=>navigation.navigate('BottomTabNavigation')}
           activeOpacity={0.8} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.createAccount}>
            Don’t have an account?{'  '}
            <Text
              onPress={() => navigation.navigate('Auth', {screen: 'Register'})}
              style={styles.createAccountLink}>
              Create
            </Text>
          </Text>
          <View style={styles.orContainer}>
            <View style={styles.separator} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.separator} />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.googleLoginButton}>
            <Icons.GoogleIcon />
            <Text style={styles.googleLoginText}>Login with Google</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

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
  forgotPassword: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.gray,
    textAlign: 'right',
    paddingVertical: 10,
  },
  loginButton: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
  },
  loginButtonText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
  createAccount: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    paddingTop: 10,
    textAlign: 'center',
    color: Colors.gray,
  },
  createAccountLink: {
    color: Colors.white,
  },
  orContainer: {
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    width: '44%',
    backgroundColor: Colors.gray,
    height: 1,
  },
  orText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.gray,
  },
  googleLoginButton: {
    paddingVertical: 17,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    gap: 15,
    flexDirection: 'row',
  },
  googleLoginText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 16,
    color: Colors.gray,
  },
});
