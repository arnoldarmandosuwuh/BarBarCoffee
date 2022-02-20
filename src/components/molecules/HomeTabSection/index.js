import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ItemList } from '..';

const renderTabBar = (props) => {
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBar}
    tabStyle={styles.tabStyle}
    renderLabel={({ route, focused }) => (
      <Text style={styles.tabText(focused)}>{route.title}</Text>
    )}
  />;
};

const Coffee = () => {
  return (
    <View style={styles.containerItem}>
      <ItemList />
    </View>
  );
};

const NonCoffee = () => {
  return (
    <View style={styles.containerItem}>
      <ItemList />
    </View>
  );
};

const Snack = () => {
  return (
    <View style={styles.containerItem}>
      <ItemList />
    </View>
  );
};

const initialLayout = { width: Dimensions.get('window').width };

const HomeTabSection = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: '1', title: 'Coffee' },
    { key: '2', title: 'Non Coffee' },
    { key: '3', title: 'Snack' },
  ]);

  const renderScene = SceneMap({
    1: Coffee,
    2: NonCoffee,
    3: Snack,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabView}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: '#043C4B',
    height: 3,
    width: '15%',
    marginLeft: '3%',
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  tabStyle: { width: 'auto' },
  tabText: (focused) => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? '#020202' : '#8D92A3',
  }),
  containerItem: {
    paddingTop: 8,
    paddingHorizontal: 24,
  },
  tabView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
