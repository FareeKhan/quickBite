import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const HelpCenter = () => {
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
          <Text style={styles.headerTitle}>Help Center</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <TouchableOpacity activeOpacity={0.8} style={styles.iconContainer}>
              <Icons.CallIcon />
            </TouchableOpacity>
            <Text style={styles.infoText}>+92347987456</Text>
          </View>
          <View style={styles.infoRow}>
            <TouchableOpacity activeOpacity={0.8} style={styles.iconContainer}>
              <Icons.MailIconYellow />
            </TouchableOpacity>
            <Text style={styles.infoText}>helpcenter@gmail.com</Text>
          </View>
          <View style={styles.infoRow}>
            <TouchableOpacity activeOpacity={0.8} style={styles.iconContainer}>
              <Icons.LocationYellowIcon />
            </TouchableOpacity>
            <Text style={styles.infoText}>Address</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
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
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    marginTop: 40,
    gap: 15,
  },
  infoRow: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  infoText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 17,
    color: Colors.btnColor,
  },
});
