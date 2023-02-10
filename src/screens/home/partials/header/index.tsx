import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../../../../constants/Colors";
import { withBadge, Icon } from "react-native-elements";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const HomeScreenHeader = () => {
  const navigation = useNavigation();
  const BadgeIcon = withBadge(2)(Icon);

  return (
    <View style={styles.container}>
      <Entypo
        name="menu"
        size={32}
        color={Colors.white}
        onPress={() => navigation.toggleDrawer()}
      />
      <Text style={styles.headerHeading}>FoodieFit</Text>
      <BadgeIcon
        type="material-community"
        name="cart"
        size={32}
        color={Colors.white}
      />
    </View>
  );
};

export default HomeScreenHeader;
