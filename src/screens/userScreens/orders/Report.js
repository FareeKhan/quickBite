import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {orderCancelReasons} from '../../../constants/data';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Report = () => {
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
          <Text style={styles.headerTitle}>Report</Text>
        </View>
        <View style={styles.orderCancelCard}>
          <Text style={styles.BSHeaderTitle}>Reason for cancelling order</Text>
          {orderCancelReasons.map((item,index) => (
            <TouchableOpacity
            key={index}
              onPress={() => handleSelectOption(item)}
              activeOpacity={0.8}
              style={styles.optionRow}>
              <View
                style={[
                  styles.optionCircle,
                  {
                    backgroundColor:
                      selectedOption === item
                        ? Colors.btnColor
                        : Colors.EerieBlack,
                  },
                ]}>
                {selectedOption === item && (
                  <View style={styles.optionInnerCircle} />
                )}
              </View>
              <Text style={styles.optionValue}>{item.title}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity 
          onPress={()=>navigation.navigate('BottomTabNavigation',{screen:'Home'})}
          activeOpacity={0.8} style={styles.orderCancelBtn}>
            <Text style={styles.orderCancelBtnText}>Cancel Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Report;

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
  orderCancelBtn: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 30,
  },
  orderCancelBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
  BSHeaderTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.white,
    top: 2,
    marginBottom: 30,
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
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  orderCancelCard: {
    padding: 30,
    backgroundColor: Colors.EerieBlack,
    marginTop: 40,
    borderRadius: 15,
  },
});
