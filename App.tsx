import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/Colors";
import React from "react";
import useCachedResources from "./hooks/useCachedResources";
import RootNavigation from "./navigation";
import { Provider } from "react-redux";
import { Store } from "./Store";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <SafeAreaProvider>
          <Provider store={Store}>
            <StatusBar
              backgroundColor={Colors.lightOrange}
              barStyle="light-content"
            />
            <RootNavigation />
          </Provider>
        </SafeAreaProvider>
      </>
    );
  }
}
