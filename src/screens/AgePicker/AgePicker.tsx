import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/navigation";
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get("window");
const ITEM_HEIGHT = 50;

const AgePicker = () => {
  const navigation = useNavigation<NavigationProps>();
  const [selectedDay, setSelectedDay] = useState(15);
  const [selectedMonth, setSelectedMonth] = useState(6);
  const [selectedYear, setSelectedYear] = useState(1995);
  
  const dayScrollRef = useRef<ScrollView>(null);
  const monthScrollRef = useRef<ScrollView>(null);
  const yearScrollRef = useRef<ScrollView>(null);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    navigation.navigate("WeightPicker");
  };

  // Generate arrays for date components
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  useEffect(() => {
    // Center the initial selections
    setTimeout(() => {
      scrollToSelected();
    }, 100);
  }, []);

  const scrollToSelected = () => {
    dayScrollRef.current?.scrollTo({
      y: (selectedDay - 1) * ITEM_HEIGHT,
      animated: true,
    });
    monthScrollRef.current?.scrollTo({
      y: (selectedMonth - 1) * ITEM_HEIGHT,
      animated: true,
    });
    const yearIndex = years.indexOf(selectedYear);
    yearScrollRef.current?.scrollTo({
      y: yearIndex * ITEM_HEIGHT,
      animated: true,
    });
  };

  const handleDayScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    setSelectedDay(days[index] || 1);
  };

  const handleMonthScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    setSelectedMonth(months[index] || 1);
  };

  const handleYearScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    setSelectedYear(years[index] || new Date().getFullYear());
  };

  const renderPickerItem = (value: number, isSelected: boolean, type: 'day' | 'month' | 'year') => {
    let displayValue = value.toString();
    if (type === 'day' || type === 'month') {
      displayValue = value.toString().padStart(2, '0');
    }
    
    return (
      <View key={value} style={styles.pickerItem}>
        <Text style={[styles.pickerText, isSelected && styles.pickerTextSelected]}>
          {displayValue}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Icon name="chevron-back" size={24} color="#E2F163" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Enter Your Date Of Birth</Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </Text>
        </View>

        {/* Date Format Display */}
        <Text style={styles.dateFormat}>DD/MM/YYYY</Text>
        
        {/* Date Picker Triangle Indicator */}
        <View style={styles.triangleIndicator} />

        {/* Date Picker Container */}
        <View style={styles.datePickerContainer}>
          {/* Day Picker */}
          <TouchableOpacity style={styles.dropdownBox}>
            <Text style={styles.dropdownLabel}>DD</Text>
            <Icon name="chevron-down" size={16} color="#000000" />
          </TouchableOpacity>

          {/* Month Picker */}
          <TouchableOpacity style={styles.dropdownBox}>
            <Text style={styles.dropdownLabel}>MM</Text>
            <Icon name="chevron-down" size={16} color="#000000" />
          </TouchableOpacity>

          {/* Year Picker */}
          <TouchableOpacity style={styles.dropdownBox}>
            <Text style={styles.dropdownLabel}>YYYY</Text>
            <Icon name="chevron-down" size={16} color="#000000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AgePicker;
