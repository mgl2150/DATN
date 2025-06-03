import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";

interface RightIcon {
    icon: any;
    onPress: () => void;
  } 

interface HeaderProps {
    title: string;
    onBack?: () => void;
  }
const HeaderAll = ({ title, onBack }: HeaderProps) => {
    const navigation = useNavigation();

  return (
    <View style={styles.header}>
        <TouchableOpacity
        style={styles.iconButton}
        onPress={onBack}
      >
        <Image
          source={require("../../assets/icons/icon_back.png")}
          style={styles.icon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>

    <View style={styles.actionsContainer}>
      <TouchableOpacity
        style={styles.iconButton}
      >
        <Image
          source={require("../../assets/icons/Home/icon_search_off.png")}
          style={styles.icon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
      >
        <Image
          source={require("../../assets/icons/Home/icon_notification_off.png")}
          style={styles.icon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
      >
        <Image
          source={require("../../assets/icons/Home/icon_user_off.png")}
          style={styles.icon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  </View>
  );
};

export default HeaderAll;