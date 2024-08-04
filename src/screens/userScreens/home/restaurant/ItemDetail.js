import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import BottomSheetComponent from '../../../../components/BottomSheetComponent';
import { drinks, cheese, orderCancelOptions } from '../../../../constants/data';
import { Colors } from '../../../../constants/color';
import Icons from '../../../../assets/icons';

const ItemDetail = () => {
  const [qty, setQty] = useState(0);
  const [selectedDrinks, setSelectedDrinks] = useState([]); 
  const [selectedCheese, setSelectedCheese] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpened, setIsOpened] = useState(false);
  const navigation = useNavigation();

  const handleSelectDrink = (drink) => {
    if (selectedDrinks.includes(drink)) {
      setSelectedDrinks(selectedDrinks.filter((d) => d !== drink));
    } else {
      setSelectedDrinks([...selectedDrinks, drink]);
    }
  };

  const handleSelectCheese = (item) => {
    setSelectedCheese(item);
  };

  const handleSelectOption = (item) => {
    setSelectedOption(item);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
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
          <Text style={styles.optionSubtitle}>Select one or more</Text>
          {drinks.map((drink) => (
            <TouchableOpacity
              key={drink.name}
              style={styles.optionItem}
              onPress={() => handleSelectDrink(drink)}
              activeOpacity={0.8}
            >
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}
              >
                <View
                  style={[
                    styles.optionCircle,
                    {
                      backgroundColor: selectedDrinks.includes(drink)
                        ? Colors.btnColor
                        : Colors.EerieBlack,
                    },
                  ]}
                >
                  {selectedDrinks.includes(drink) && (
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
          {cheese.map((item) => (
            <TouchableOpacity
              key={item.name}
              style={styles.optionItem}
              onPress={() => handleSelectCheese(item)}
              activeOpacity={0.8}
            >
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}
              >
                <View
                  style={[
                    styles.optionCircle,
                    {
                      backgroundColor: selectedCheese === item ? Colors.btnColor : Colors.EerieBlack,
                    },
                  ]}
                >
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
        {isOpened ? (
          <BottomSheetComponent
            onPressMenu={() => setIsOpened(!isOpened)}
            marginBottom={15}
            Component={() => (
              <>
                <TouchableOpacity
                  onPress={() => setIsOpened(!isOpened)}
                  activeOpacity={0.8}
                  style={styles.CrossIconContainer}
                >
                  <Icons.CrossIcon />
                </TouchableOpacity>
                <View style={{ paddingHorizontal: 20 }}>
                  <Text style={styles.BSTitle}>
                    If this product is not available
                  </Text>
                  {orderCancelOptions.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => handleSelectOption(item)}
                      activeOpacity={0.8}
                      style={styles.optionRow}
                    >
                      <View
                        style={[
                          styles.optionCircle,
                          {
                            backgroundColor:
                              selectedOption === item ? Colors.btnColor : Colors.EerieBlack,
                          },
                        ]}
                      >
                        {selectedOption === item && (
                          <View style={styles.optionInnerCircle} />
                        )}
                      </View>
                      <Text style={styles.optionValue}>{item.title}</Text>
                    </TouchableOpacity>
                  ))}
                  <TouchableOpacity
                    onPress={() => setIsOpened(!isOpened)}
                    activeOpacity={0.8}
                    style={styles.applyBtn}
                  >
                    <Text style={styles.applyBtnText}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
            BGSheetColor={Colors.primary}
          />
        ) : null}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setIsOpened(!isOpened);
          }}
          style={styles.removeFromOrderContainer}
        >
          <Text style={styles.removeFromOrderText}>
            Remove it from my order
          </Text>
          <Icons.DropdownRight />
        </TouchableOpacity>
        <View style={{ marginTop: 40 }}>
          <View style={styles.addToCartContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('BottomTabNavigation', { screen: 'MyCart' })}
              activeOpacity={0.8}
              style={[
                styles.addToCartButton,
                { backgroundColor: qty > 0 ? Colors.btnColor : Colors.BGColor },
              ]}
            >
              <Text
                style={[
                  styles.addToCartButtonText,
                  {
                    fontFamily: qty > 0 ? 'Manrope-Bold' : 'Manrope-Regular',
                    color: qty > 0 ? Colors.darkBronze : Colors.gray,
                  },
                ]}
              >
                Add to cart
              </Text>
            </TouchableOpacity>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() => {
                  if (qty > 0) {
                    setQty(qty - 1);
                  }
                }}
                activeOpacity={0.8}
                style={styles.quantityIcon}
              >
                <Icons.MinusIcon />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{qty}</Text>
              <TouchableOpacity
                onPress={() => setQty(qty + 1)}
                activeOpacity={0.8}
                style={styles.quantityIcon}
              >
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
  },
  optionValue: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.gray,
  },
  applyBtn: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.btnColor,
    marginVertical: 20,
  },
  applyBtnText: {
    fontFamily: 'Manrope-Bold',
    color: Colors.darkBronze,
    fontSize: 17,
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
  BSTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 17,
    color: Colors.white,
    marginBottom: 25,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
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
