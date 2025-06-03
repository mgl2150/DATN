import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./Style";

const Onboarding1 = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleNext = () => {
    navigation.navigate("Nutrition");
  };

  const handleSkip = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
        <MaterialIcons name="arrow-forward-ios" size={16} color="#E2F163" />
      </TouchableOpacity>

      <ImageBackground
        source={require("../../assets/imgs/Onboarding1.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.contentWrapper}>
          <View style={styles.contentContainer}>
            <Image
              source={require("../../assets/icons/Others/icon_run.png")}
              style={styles.runningIcon}
              resizeMode="contain"
            />
            <Text style={styles.title}>
              Start Your Journey Towards A{"\n"}More Active Lifestyle
            </Text>
            <View style={styles.indicatorContainer}>
              <View style={[styles.indicator, styles.activeIndicator]} />
              <View style={styles.indicator} />
              <View style={styles.indicator} />
            </View>
          </View>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Onboarding1;
