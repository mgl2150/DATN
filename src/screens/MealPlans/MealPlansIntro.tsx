import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import Icon from 'react-native-vector-icons/Ionicons';

const MealPlansIntro = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleKnowYourPlan = () => {
    navigation.navigate("MealPlans");
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../assets/imgs/nutrition/MealPlansIntro.png')} 
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerIcon} onPress={handleBack}>
            <Icon name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.headerIcon}>
              <Icon name="notifications-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon}>
              <Icon name="person-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Purple Card */}
        <View style={styles.cardSection}>
          <View style={styles.mealCard}>
            <View style={styles.titleContainer}>
              <View style={styles.iconContainer}>
                <Icon name="nutrition-outline" size={24} color="#E7FF3F" />
              </View>
              <Text style={styles.mealTitle}>Meal Plans</Text>
            </View>
            <Text style={styles.mealSubtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Text>
          </View>
        </View>

        {/* Know Your Plan Button */}
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.knowButton} onPress={handleKnowYourPlan}>
            <Text style={styles.knowButtonText}>Know Your Plan</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  headerRight: {
    flexDirection: 'row',
  },
  headerIcon: {
    padding: 8,
  },
  cardSection: {
    position: 'absolute',
    top: '35%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  mealCard: {
    backgroundColor: '#B3A0FF',
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconContainer: {
    marginRight: 8,
  },
  mealTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  mealSubtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    opacity: 0.9,
  },
  buttonSection: {
    position: 'absolute',
    top: '55%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  knowButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    width: '60%',
    alignItems: 'center',
  },
  knowButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default MealPlansIntro;