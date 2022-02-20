import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gap, Header, HomeTabSection } from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: { flex: 1 },
  tabContainer: {
    flex: 1,
  },
});
