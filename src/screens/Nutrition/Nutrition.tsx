import React, { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import { styles } from "./Style";
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderAll from "../../components/HeaderAll";
interface RecipeCardProps {
  title: string;
  minutes: number;
  calories: number;
  image: string;
  video?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, minutes, calories, image, video = false }) => (
  <TouchableOpacity style={styles.recipeCard}>
    <Image source={{ uri: image }} style={styles.recipeImage} />
    {video && <Icon name="play-circle" size={24} color="white" style={styles.playIcon} />}
    <Text style={styles.recipeTitle}>{title}</Text>
    <View style={styles.recipeInfo}>
      <Icon name="time-outline" size={12} color="#666" />
      <Text style={styles.recipeInfoText}>{minutes} Minutes</Text>
      <Icon name="flame-outline" size={12} color="#666" />
      <Text style={styles.recipeInfoText}>{calories} Cal</Text>
    </View>
  </TouchableOpacity>
);

const Nutrition: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>

      <HeaderAll title="Nutrition" onBack={() => navigation.goBack()} />
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab]}
          onPress={() => navigation.navigate("MealPlans")}
        >
          <Text style={[styles.tabText]}>
            Meal Plans
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab]}
        >
          <Text style={[styles.tabText]}>
            Meal Ideas
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Recipe of the Day */}
        <View style={styles.wrapperRecipeOfDay}>
                 <View style={styles.recipeOfDay}>
          <Image 
            source={require("../../assets/imgs/nutrition/recipeoftheday.png")}
            style={styles.recipeOfDayImage}
          />
          <View style={styles.recipeOfDayOverlay}>
            <View style={styles.recipeOfDayBadge}>
              <Text style={styles.badgeText}>Recipe Of The Day</Text>
            </View>
            <Text style={styles.recipeOfDayTitle}>Carrot And Orange Smoothie</Text>
            <View style={styles.recipeInfo}>
              <Icon name="time-outline" size={14} color="white" />
              <Text style={styles.recipeOfDayInfo}>10 Minutes</Text>
              <Icon name="flame-outline" size={14} color="white" />
              <Text style={styles.recipeOfDayInfo}>70 Cal</Text>
            </View>
          </View>
        </View> 
        </View>

      <View style={styles.wrapperblack}>
        
     
        {/* Recommended Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recommendedScroll}>
            <RecipeCard
              title="Fruit Smoothie"
              minutes={12}
              calories={120}
              image={require("../../assets/imgs/nutrition/nuocdau.png")}
              video={true}
            />
            <RecipeCard
              title="Salads With Quinoa"
              minutes={12}
              calories={120}
              image="https://example.com/quinoa-salad.jpg"
              video={true}
            />
              <RecipeCard
              title="Salads With Quinoa"
              minutes={12}
              calories={120}
              image="https://example.com/quinoa-salad.jpg"
              video={true}
            />
          </ScrollView>
        </View>

        {/* Recipes For You */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recipes For You</Text>
          <View style={styles.recipesForYou}>
            <TouchableOpacity style={styles.recipeForYouCard}>
              <View style={styles.recipeForYouInfo}>
                <Text style={styles.recipeForYouTitle}>Delights With Greek Yogurt</Text>
                <View style={styles.recipeInfo}>
                  <Icon name="time-outline" size={12} color="#666" />
                  <Text style={styles.recipeInfoText}>6 Minutes</Text>
                  <Icon name="flame-outline" size={12} color="#666" />
                  <Text style={styles.recipeInfoText}>200 Cal</Text>
                </View>
              </View>
              <Image 
                source={{ uri: 'https://example.com/greek-yogurt.jpg' }}
                style={styles.recipeForYouImage}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.recipeForYouCard}>
              <View style={styles.recipeForYouInfo}>
                <Text style={styles.recipeForYouTitle}>Baked Salmon</Text>
                <View style={styles.recipeInfo}>
                  <Icon name="time-outline" size={12} color="#666" />
                  <Text style={styles.recipeInfoText}>30 Minutes</Text>
                  <Icon name="flame-outline" size={12} color="#666" />
                  <Text style={styles.recipeInfoText}>350 Cal</Text>
                </View>
              </View>
              <Image 
                source={{ uri: 'https://example.com/baked-salmon.jpg' }}
                style={styles.recipeForYouImage}
              />
            </TouchableOpacity>
          </View>
        </View> 
        </View>
      </ScrollView>
    </View>
  );
};

export default Nutrition;
