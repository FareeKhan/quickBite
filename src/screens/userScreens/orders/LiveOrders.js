import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {orderSteps} from '../../../constants/data';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const LiveOrders = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/Map.png')}>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
              activeOpacity={0.8}>
              <Icons.Arrow />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Orders</Text>
          </View>
          <View style={styles.btnsContainer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.liveBtn}>
              <Text style={styles.liveBtnText}>Live Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Orders', {screen: 'OrdersScreen'})
              }
              activeOpacity={0.8}
              style={styles.discountBtn}>
              <Text style={styles.discountBtnText}>Delivered Orders</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={orderSteps}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal:35,gap:35}}
          renderItem={({item}) => (
             <TouchableOpacity
             onPress={()=>navigation.navigate('Tracking')}
             activeOpacity={0.8}
              style={styles.detailsContainer}>
              <View style={styles.profileHeader}>
                <View style={styles.profileInfo}>
                  <Image
                    source={require('../../../assets/images/userProfile.png')}
                    resizeMode="cover"
                    style={styles.profileImage}
                  />
                  <View>
                    <Text style={styles.profileName}>John</Text>
                    <View style={styles.ratingContainer}>
                      <Icons.StarLarge height={15} width={15} />
                      <Text style={styles.ratingText}>4.1/5.0</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.actionContainer}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.actionButton}>
                    <Icons.MsgIcon />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.actionButton}>
                    <Icons.CallIcon />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.orderStepsContainer}>
                <FlatList
                  data={orderSteps}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item, index}) => (
                    <View style={styles.stepContainer}>
                      <View>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={styles.stepIcon}>
                          <Icons.TickIcon />
                        </TouchableOpacity>
                        {index < orderSteps.length - 1 && (
                          <View style={styles.dashLine} />
                        )}
                      </View>
                      <View style={styles.stepTextContainer}>
                        <Text style={styles.stepTitle}>{item.title}</Text>
                        <Text style={styles.stepTime}>{item.time}</Text>
                      </View>
                    </View>
                  )}
                />
                <Text style={styles.dateText}>6-13-2024</Text>
              </View>
            </TouchableOpacity>)}
        /> 
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LiveOrders;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 100,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
    color: Colors.white,
  },
  btnsContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  liveBtn: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.btnColor,
    borderRadius: 12,
    paddingVertical: 15,
    zIndex: 1,
  },
  liveBtnText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: Colors.darkBronze,
  },
  discountBtn: {
    width: '53%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
    paddingVertical: 15,
    marginLeft: -20,
  },
  discountBtnText: {
    fontFamily: 'Manrope-Bold',
    color: Colors.gray,
    fontSize: 15,
  },
  detailsContainer: {
    borderRadius: 15,
    backgroundColor: Colors.EerieBlack,
    paddingVertical: 15,
    marginTop:90,
    marginBottom:15,
    paddingHorizontal:25,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderColor: Colors.gray,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  profileName: {
    fontFamily: 'Manrope-Regular',
    fontSize: 18,
    color: Colors.white,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ratingText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: Colors.gray,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  actionButton: {
    height: 40,
    width: 40,
    backgroundColor: Colors.BGColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  orderStepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
  },
  stepContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  stepIcon: {
    height: 40,
    width: 40,
    backgroundColor: Colors.BGColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  dashLine: {
    height: 35,
    width: 10,
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.btnColor,
    marginLeft: 20,
  },
  stepTextContainer: {
    gap: 2,
  },
  stepTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.white,
  },
  stepTime: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
  },
  dateText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
  },
});
