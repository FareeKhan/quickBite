import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../../constants/color';
import Icons from '../../../../assets/icons';
import {drinks, cheese} from '../../../../constants/data';

const ItemDetail = () => {
  const [qty, setQty] = useState(0);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [selectedCheese, setSelectedCheese] = useState(null);
  const navigation = useNavigation();

  const handleSelectDrink = drink => {
    setSelectedDrink(drink);
  };

  const handleSelectCheese = item => {
    setSelectedCheese(item);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}>
          <Icons.Arrow />
        </TouchableOpacity>
        <Icons.Burger style={styles.burgerIcon} height={150} width={150} />
        <View style={styles.itemHeader}>
          <Text style={styles.itemTitle}>Double Decker</Text>
          <Text style={styles.itemPrice}>Rs 350</Text>
        </View>
        <Text style={styles.itemDescription}>
          Our best selling double decker beef burger with 2 beef patty and
          special sauce.
        </Text>
        <View style={styles.optionContainer}>
          <View style={styles.optionHeader}>
            <Text style={styles.optionTitle}>Add drink</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.optionalButton}>
              <Text style={styles.optionalButtonText}>optional</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.optionSubtitle}>Select one</Text>
          {drinks.map(drink => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={drink.name}
              style={styles.optionItem}
              onPress={() => handleSelectDrink(drink)}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <View style={styles.optionCircle}>
                  {selectedDrink === drink && (
                    <View style={styles.optionInnerCircle} />
                  )}
                </View>
                <Text style={styles.optionText}>{drink.name}</Text>
              </View>
              <Text style={styles.optionPrice}>+ Rs {drink.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.cheeseContainer}>
          <View style={styles.optionHeader}>
            <Text style={styles.optionTitle}>Add cheese slice</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.optionalButton}>
              <Text style={styles.optionalButtonText}>optional</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.optionSubtitle}>Select one</Text>
          {cheese.map(item => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={item.name}
              style={styles.optionItem}
              onPress={() => handleSelectCheese(item)}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <View style={styles.optionCircle}>
                  {selectedCheese === item && (
                    <View style={styles.optionInnerCircle} />
                  )}
                </View>
                <Text style={styles.optionText}>{item.name}</Text>
              </View>
              <Text style={styles.optionPrice}>+ Rs {item.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.instructionsTitle}>Special instructions</Text>
        <View style={styles.instructionsContainer}>
          <TextInput
            placeholder="please let us know if you are allergic to anything or if we need to avoid anything"
            placeholderTextColor={Colors.gray}
            style={styles.instructionsInput}
            multiline={true}
            numberOfLines={6}
            textAlignVertical="top"
          />
        </View>
        <Text style={styles.instructionsCount}>0/500</Text>
        <Text style={styles.productAvailabilityTitle}>
          If this product is not available
        </Text>
        <View style={styles.removeFromOrderContainer}>
          <Text style={styles.removeFromOrderText}>
            Remove it from my order
          </Text>
          <Icons.DropdownRight />
        </View>
        <View style={{marginTop: 40}}>
          <View style={styles.addToCartContainer}>
            <View
              style={[
                styles.addToCartButton,
                {backgroundColor: qty > 0 ? Colors.btnColor : Colors.BGColor},
              ]}>
              <Text
                style={[
                  styles.addToCartButtonText,
                  {
                    fontFamily: qty > 0 ? 'Manrope-Bold' : 'Manrope-Regular',
                    color: qty > 0 ? Colors.darkBronze : Colors.gray,
                  },
                ]}>
                Add to cart
              </Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() => {
                  if (qty > 0) {
                    setQty(qty - 1);
                  }
                }}
                activeOpacity={0.8}
                style={styles.quantityIcon}>
                <Icons.MinusIcon />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{qty}</Text>
              <TouchableOpacity
                onPress={() => setQty(qty + 1)}
                activeOpacity={0.8}
                style={styles.quantityIcon}>
                <Icons.PlusIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  screen: {
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
  burgerIcon: {
    alignSelf: 'center',
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 15,
  },
  itemTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 20,
    color: Colors.white,
  },
  itemPrice: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 20,
    color: Colors.btnColor,
  },
  itemDescription: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.gray,
  },
  optionContainer: {
    marginVertical: 15,
    paddingTop: 15,
    borderTopWidth: 0.5,
    borderColor: Colors.gray,
    borderBottomWidth: 0.5,
    paddingBottom: 20,
  },
  optionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.white,
  },
  optionalButton: {
    paddingHorizontal: 12,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
  },
  optionalButtonText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 13,
    color: Colors.white,
  },
  optionSubtitle: {
    fontFamily: 'Manrope-Regular',
    fontSize: 15,
    color: Colors.gray,
    paddingTop: 5,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
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
    backgroundColor: Colors.btnColor,
  },
  optionInnerCircle: {
    height: 11,
    width: 11,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 50,
  },
  optionText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: Colors.gray,
  },
  optionPrice: {
    fontFamily: 'Manrope-Medium',
    color: Colors.gray,
    fontSize: 14,
  },
  cheeseContainer: {
    borderColor: Colors.gray,
    borderBottomWidth: 0.5,
    paddingBottom: 20,
  },
  instructionsTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 17,
    color: Colors.white,
    paddingVertical: 15,
  },
  instructionsContainer: {
    paddingHorizontal: 20,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 15,
    paddingVertical: 10,
  },
  instructionsInput: {
    fontFamily: 'Manrope-Medium',
    color: Colors.gray,
    fontSize: 13,
  },
  instructionsCount: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingTop: 5,
  },
  productAvailabilityTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 17,
    color: Colors.white,
  },
  removeFromOrderContainer: {
    padding: 20,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  removeFromOrderText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    color: Colors.white,
  },
  addToCartContainer: {
    padding: 15,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addToCartButton: {
    paddingVertical: 8,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  addToCartButtonText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 13,
    color: Colors.darkBronze,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  quantityIcon: {
    height: 25,
    width: 25,
    backgroundColor: Colors.BGColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  quantityText: {
    fontFamily: 'Onest-Bold',
    fontSize: 16,
    color: Colors.white,
  },
});
