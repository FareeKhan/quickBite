import React ,{useEffect}from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  LogBox
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {tasks} from '../../../constants/data';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Rewards = () => {
  const navigation = useNavigation();

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <Icons.Arrow />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Rewards</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Total Points</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Task Completed</Text>
          </View>
        </View>
        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:20}}
          renderItem={({item}) => (
            <View style={styles.taskContainer}>
              <View style={styles.ellipseBackground}>
                <Icons.Ellipse1 />
                <Icons.Ellipse2 style={styles.ellipse2} />
              </View>
              <View style={styles.taskDetails}>
                <Icons.Onlineorder />
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text style={styles.taskDescription}>{item.task}</Text>
              </View>
              <View style={styles.rewardActions}>
                <View style={styles.pointsBadge}>
                  <Text style={styles.pointsText}>{item.points}</Text>
                </View>
                <View style={styles.claimBadge}>
                  <Text style={styles.claimText}>Claim</Text>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerContainer: {
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
  statsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statCard: {
    paddingVertical: 25,
    paddingHorizontal: 27,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width:'48%'
  },
  statNumber: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 50,
    color: Colors.btnColor,
  },
  statLabel: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 14,
    color: Colors.white,
    width: 115,
    textAlign: 'center',
  },
  taskContainer: {
    marginTop: 20,
  },
  ellipseBackground: {
    backgroundColor: Colors.EerieBlack,
    borderRadius: 10,
  },
  ellipse2: {
    alignSelf: 'flex-end',
  },
  taskDetails: {
    position: 'absolute',
    gap: 15,
    padding: 20,
    width: '100%',
  },
  taskTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.btnColor,
  },
  taskDescription: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.white,
  },
  rewardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    position: 'absolute',
    top: '11%',
    width:'70%',
    alignSelf:"flex-end"
  },
  pointsBadge: {
    paddingHorizontal: 17,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.btnColor,
    borderRadius: 8,
    width:'42%'
  },
  pointsText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.btnColor,
  },
  claimBadge: {
    paddingHorizontal: 17,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#89898975',
    borderRadius: 8,
    width:'42%'
  },
  claimText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
  },
});
