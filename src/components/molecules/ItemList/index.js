import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { Rating } from '..';
import { ArenLatte } from '../../../assets';

const ItemList = () => {
  return (
    <View style={styles.container}>
      <Image source={ArenLatte} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>Aren Latte</Text>
        <Text style={styles.price}>IDR 25.000</Text>
      </View>
      <Rating number={4.0} />
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  price: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  content: {
    flex: 1,
  },
});
