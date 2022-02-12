import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  IcHome,
  IcHomeOn,
  IcOrder,
  IcOrderOn,
  IcProfile,
  IcProfileOn,
} from '../../../assets';

const Icon = ({ label, focus }) => {
  switch (label) {
    case 'Home':
      return focus ? <IcHomeOn /> : <IcHome />;
    case 'Order':
      return focus ? <IcOrderOn /> : <IcOrder />;
    case 'Profile':
      return focus ? <IcProfileOn /> : <IcProfile />;
    default:
      return <IcHomeOn />;
  }
};

const BottomNavigator = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
});
