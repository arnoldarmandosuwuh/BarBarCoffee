import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ProfilePicture } from '../../../assets';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.appName}>BarBarCoffee</Text>
        <Text style={styles.appDesc}>Let's get some coffee</Text>
      </View>
      <Image source={ProfilePicture} style={styles.profilePicture} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  appDesc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
