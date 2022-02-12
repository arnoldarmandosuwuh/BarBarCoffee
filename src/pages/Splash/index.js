import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '../../assets';
import { Gap } from '../../components';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <Logo />
      <Gap height={30} />
      <Text style={styles.title}>BarBarCoffee</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#CFDDDB',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#043C4B',
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
