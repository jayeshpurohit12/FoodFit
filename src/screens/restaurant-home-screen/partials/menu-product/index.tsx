import { View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { MenuData } from "../../../home/mock";
import { TabView, TabBar } from "react-native-tab-view";
import { useNavigation, useRoute } from "@react-navigation/native";
import Route1, {
  Route2,
  Route3,
  Route4,
  Route5,
  Route6,
  Route7,
  Route8,
} from "../restaurant-tab-route";

const MenuModal = ({ setModalVisible }) => {
  const layout = useWindowDimensions();
  const navigation = useNavigation();
  // const route = useRoute();
  const [index, setIndex] = useState(0);
  const [routes] = useState(MenuData);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "1":
        return <Route1 setModalVisible={setModalVisible} />;
      case "2":
        return <Route2 name={navigation} />;
      case "3":
        return <Route3 name={navigation} />;
      case "4":
        return <Route4 name={navigation} />;
      case "5":
        return <Route5 name={navigation} />;
      case "6":
        return <Route6 name={navigation} />;
      case "7":
        return <Route7 name={navigation} />;
      case "8":
        return <Route8 name={navigation} />;

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={layout}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            scrollEnabled
            style={styles.tabBar}
            labelStyle={styles.tabLabel}
          />
        )}
        tabBarPosition="top"
      />
    </View>
  );
};

export default MenuModal;
