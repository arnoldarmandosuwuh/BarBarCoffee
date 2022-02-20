import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IcStar, IcStarOn } from '../../../assets';

const Rating = ({ number }) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        star.push(<IcStarOn key={i} />);
      } else {
        star.push(<IcStar key={i} />);
      }
    }
    return star;
  };
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>{renderStar()}</View>
      <Text style={styles.numberRating}>{number}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    marginRight: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  numberRating: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#8D92A3',
  },
});
