import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface RightIcon {
  name: string;
  onPress: () => void;
}

interface HeaderProps {
  title: string;
  onBack?: () => void;
  rightIcons?: RightIcon[];
}

const Header: React.FC<HeaderProps> = ({ title, onBack, rightIcons }) => {
  return (
    <View style={styles.header}>
      {onBack && (
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightIcons}>
        {rightIcons?.map((icon, index) => (
          <TouchableOpacity key={index} onPress={icon.onPress} style={styles.iconButton}>
            <Icon name={icon.name} size={24} color="#FFFFFF" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#1A1A1A',
  },
  backButton: {
    marginRight: 8,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
});

export default Header; 