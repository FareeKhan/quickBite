import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StarRating from 'react-native-star-rating-widget';
import {useNavigation} from '@react-navigation/native';
import BottomSheetComponent from '../../../components/BottomSheetComponent';
import {orderSteps} from '../../../constants/data';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Orders = () => {
  const [isOpened, setisOpened] = useState(false);
  const [productRating, setProductRating] = useState(0);
  const [selectedTab, setSelectedTab] = useState('DeliveredOrders');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        source={
          selectedTab === 'LiveOrders' &&
          require('../../../assets/images/Map.png')
        }
        style={{height: '100%', width: '100%', paddingTop: 40}}>
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
          <TouchableOpacity
            onPress={() => setSelectedTab('LiveOrders')}
            activeOpacity={0.8}
            style={[
              styles.liveBtn,
              {zIndex: selectedTab === 'LiveOrders' ? 1 : 0},
              selectedTab === 'LiveOrders'
                ? styles.activeBtn
                : styles.inactiveBtn,
            ]}>
            <Text
              style={[
                styles.liveBtnText,
                selectedTab === 'LiveOrders'
                  ? styles.activeBtnText
                  : styles.inactiveBtnText,
              ]}>
              Live Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab('DeliveredOrders')}
            activeOpacity={0.8}
            style={[
              styles.deliverbtn,
              selectedTab === 'DeliveredOrders'
                ? styles.activeBtn
                : styles.inactiveBtn,
            ]}>
            <Text
              style={[
                styles.deliverbtnText,
                selectedTab === 'DeliveredOrders'
                  ? styles.activeBtnText
                  : styles.inactiveBtnText,
              ]}>
              Delivered Orders
            </Text>
          </TouchableOpacity>
        </View>
        {selectedTab === 'LiveOrders' ? (
          <View style={{position: 'absolute', bottom: '2%'}}>
            <FlatList
              data={orderSteps}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{gap: 25, paddingHorizontal: 25}}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Tracking')}
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
                          <Icons.StarLarge height={20} width={20} />
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
                </TouchableOpacity>
              )}
            />
          </View>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {isOpened ? (
              <BottomSheetComponent
                onPressMenu={() => setisOpened(!isOpened)}
                BGSheetColor={Colors.EerieBlack}
                HEIGHT={'70%'}
                marginBottom={190}
                Component={() => (
                  <>
                    <TouchableOpacity
                      onPress={() => setisOpened(!isOpened)}
                      activeOpacity={0.8}
                      style={styles.CrossIconContainer}>
                      <Icons.CrossIcon />
                    </TouchableOpacity>
                    <Text style={styles.review}>Review Required</Text>
                    <Text style={styles.reviewDesc}>
                      Please give us the feedback about your delivery rider
                    </Text>
                    <View style={styles.starsContainer}>
                      <StarRating
                        rating={productRating}
                        onChange={setProductRating}
                        maxStars={5}
                        starSize={50}
                        color={Colors.btnColor}
                        starStyle={{marginHorizontal: 0}}
                      />
                    </View>
                    <View style={styles.reviewContainer}>
                      <TextInput
                        placeholder="please let us know if you are allergic to anything or if we need to avoid anything"
                        placeholderTextColor={Colors.gray}
                        style={styles.input}
                        multiline={true}
                        numberOfLines={7}
                        textAlignVertical="top"
                      />
                    </View>
                    <Text style={styles.reviewTextCount}>50/500</Text>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.reviewBtn}>
                      <Text style={styles.reviewBtnText}>Submit Review</Text>
                    </TouchableOpacity>
                  </>
                )}
              />
            ) : null}
            <TouchableOpacity
              onPress={() => setisOpened(!isOpened)}
              activeOpacity={0.8}
              style={styles.orderCard}>
              <View style={styles.itemRow}>
                <Text style={styles.itemTitle}>
                  1x Double decker with extra cheese
                </Text>
                <Text style={styles.itemPrice}>Rs 450</Text>
              </View>
              <View style={styles.itemRow}>
                <Text style={styles.itemTitle}>
                  1x Tikka Pizza small with extra cheese
                </Text>
                <Text style={styles.itemPrice}>Rs 350</Text>
              </View>
              <View style={styles.itemRow}>
                <Text style={styles.delivery}>Delivery charge</Text>
                <Text style={styles.deliveryPrice}>Rs 100</Text>
              </View>
              <View style={styles.itemRow}>
                <Text style={styles.itemTotal}>Total</Text>
                <Text style={styles.itemTotalPrice}>Rs 900</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 30,
    alignSelf: 'center',
  },
  review: {
    fontFamily: 'Manrope-Medium',
    fontSize: 17,
    color: Colors.white,
    textAlign: 'center',
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
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
    color: Colors.white,
  },
  btnsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  liveBtn: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
    paddingVertical: 15,
  },
  liveBtnText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
  },
  deliverbtn: {
    width: '53%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
    paddingVertical: 15,
    marginLeft: -10,
  },
  deliverbtnText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
  },
  orderCard: {
    padding: 20,
    marginTop: 20,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 15,
    gap: 15,
    marginHorizontal: 20,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemTotal: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.white,
    fontSize: 16,
    width: 120,
  },
  itemTotalPrice: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.btnColor,
    fontSize: 16,
  },
  itemTitle: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.gray,
    fontSize: 13,
    width: 120,
  },
  itemPrice: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.gray,
    fontSize: 13,
  },
  delivery: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.gray,
    fontSize: 13,
    width: 120,
  },
  deliveryPrice: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.gray,
    fontSize: 13,
  },
  CrossIconContainer: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.BGColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  reviewContainer: {
    paddingHorizontal: 20,
    backgroundColor: Colors.BGColor,
    borderRadius: 15,
    paddingVertical: 10,
    marginHorizontal: 25,
    marginTop: 30,
  },
  reviewDesc: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
    textAlign: 'center',
    width: '50%',
    alignSelf: 'center',
    paddingTop: 15,
  },
  input: {
    fontFamily: 'Manrope-Medium',
    color: Colors.gray,
    fontSize: 13,
  },
  reviewTextCount: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
    alignSelf: 'flex-end',
    paddingRight: 30,
    paddingTop: 5,
  },
  reviewBtn: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginHorizontal: 25,
    marginTop: 30,
  },
  reviewBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
  detailsContainer: {
    borderRadius: 15,
    backgroundColor: Colors.EerieBlack,
    padding: 25,
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
    height: 55,
    width: 55,
    borderRadius: 50,
  },
  profileName: {
    fontFamily: 'Manrope-Regular',
    fontSize: 19,
    color: Colors.white,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ratingText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
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
    gap: 25,
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
    height: 37,
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
    fontSize: 16,
    color: Colors.white,
  },
  stepTime: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: Colors.gray,
  },
  dateText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: Colors.gray,
  },
  activeBtn: {
    backgroundColor: Colors.btnColor,
  },
  inactiveBtn: {
    backgroundColor: Colors.EerieBlack,
  },
  activeBtnText: {
    color: Colors.darkBronze,
  },
  inactiveBtnText: {
    color: Colors.gray,
  },
});
