import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomSheetComponent from '../../../components/BottomSheetComponent';
import {useNavigation} from '@react-navigation/native';
import {notificationOptions} from '../../../constants/data';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Notifications = () => {
  const [isOpened, setisOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showUnread, setShowUnread] = useState(true);
  const navigation = useNavigation();

  const notifications = [
    {id: 1, title: 'Your item has been shipped.', read: false},
    {id: 2, title: 'Your delivery is scheduled.', read: true},
    {id: 3, title: 'Your delivery is scheduled.', read: true},
    {id: 4, title: 'Your delivery is scheduled.', read: true},
    {id: 5, title: 'Your order has been delivered.', read: false},
  ];

  const filteredNotifications = notifications.filter(
    notification => notification.read !== !showUnread,
  );

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
          <Text style={styles.headerTitle}>Notifications</Text>
          {isOpened ? (
            <BottomSheetComponent
              onPressMenu={() => setisOpened(!isOpened)}
              BGSheetColor={Colors.primary}
              HEIGHT={'35%'}
              marginBottom={460}
              borderRadius={20}
              Component={() => (
                <View style={{padding: 30}}>
                  <View style={styles.BSHeader}>
                    <TouchableOpacity
                      style={[
                        styles.backButton,
                        {backgroundColor: Colors.BGColor},
                      ]}
                      onPress={() => setisOpened(!isOpened)}
                      activeOpacity={0.8}>
                      <Icons.Arrow />
                    </TouchableOpacity>
                    <Text style={styles.BSHeaderTitle}>
                      Notifications Settings
                    </Text>
                  </View>
                  {notificationOptions.map(item => (
                    <TouchableOpacity
                      onPress={() => handleSelectOption(item)}
                      activeOpacity={0.8}
                      style={styles.optionRow}>
                      <View
                        style={[
                          styles.optionCircle,
                          {
                            backgroundColor:
                              selectedOption === item && Colors.btnColor,
                          },
                        ]}>
                        {selectedOption === item && (
                          <View style={styles.optionInnerCircle} />
                        )}
                      </View>
                      <Text style={styles.optionValue}>{item.title}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            />
          ) : null}
          <TouchableOpacity
            onPress={() => setisOpened(!isOpened)}
            style={styles.iconContainer}>
            <Icons.settings />
          </TouchableOpacity>
        </View>
        <View style={styles.btnsContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.unReadBtn,
              {
                backgroundColor: showUnread
                  ? Colors.btnColor
                  : Colors.EerieBlack,
                zIndex: showUnread ? 1 : 0,
              },
            ]}
            onPress={() => setShowUnread(true)}>
            <Text
              style={[
                styles.unReadBtnText,
                {color: showUnread ? Colors.darkBronze : Colors.gray},
              ]}>
              Unread
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.readBtn,
              {
                backgroundColor: !showUnread
                  ? Colors.btnColor
                  : Colors.EerieBlack,
              },
            ]}
            onPress={() => setShowUnread(false)}>
            <Text
              style={[
                styles.readBtnText,
                {color: !showUnread ? Colors.darkBronze : Colors.gray},
              ]}>
              Read
            </Text>
          </TouchableOpacity>
        </View>
          {filteredNotifications.length > 0 ? (
            <FlatList
              data={filteredNotifications}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{gap:15}}
              renderItem={({item}) => (
                <View style={styles.deliveryContainer}>
                <Text key={item.id} style={styles.deliveryDes}>
                  {item.title}
                </Text>
        </View>
              )}
            />
          ) : (
            <Text style={styles.deliveryDes}>No notifications available.</Text>
          )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  BSHeader: {
    flexDirection: 'row',
    gap: 20,
    borderBottomWidth: 0.5,
    borderColor: '#89898975',
    paddingBottom: 15,
    marginBottom: 20,
  },
  BSHeaderTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.white,
    top: 2,
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
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  btnsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:20
  },
  unReadBtn: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
    paddingVertical: 12,
  },
  unReadBtnText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
  },
  readBtn: {
    width: '53%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
    paddingVertical: 12,
    marginLeft: -10,
  },
  readBtnText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 15,
  },
  deliveryContainer: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
  },
  deliveryTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: Colors.white,
  },
  deliveryDes: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 13,
    color: Colors.gray,
  },
});
