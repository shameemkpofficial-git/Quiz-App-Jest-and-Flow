// @flow

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import type {Node} from 'react';
import Colors from '../common/color';
import Button from './button';
import type {ScoreType} from '../common/type';
import celebrate from '../assets/images/celebrate.png';
import oops from '../assets/images/oops.png';

const ScoreScreen = ({score, handleRetry}: ScoreType): Node => {
  const [scoreColor, setScoreColor] = useState('#05b052');

  const percentage = (Number(score) / 5) * 100;

  return (
    <View style={Styles.container}>
      <View style={Styles.innerContainer}>
        <Image
          source={percentage >= 40 ? celebrate : oops}
          resizeMode={'contain'}
          style={Styles.image}
        />
        {/* <HandleWishText /> */}
        {percentage >= 40 ? (
          <Text style={Styles.congratsText}>Congrats!</Text>
        ) : (
          <Text style={Styles.congratsText}>Better luck next time!</Text>
        )}
        {/* <HandleScoreText /> */}
        <Text
          style={[
            Styles.scoreText,
            {color: percentage >= 40 ? scoreColor : 'red'},
          ]}>
          {percentage}% Score
        </Text>
        {/* <HandleDescriptionText /> */}
        <Text style={Styles.quizComplete}>Quiz completed successfully</Text>
        <Text
          numberOfLines={2}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'row',
            width: '85%',
          }}>
          <Text style={Styles.description}>You attempt </Text>
          <Text
            style={[Styles.description, {color: '#2257a3', fontWeight: '800'}]}>
            5 questions{' '}
          </Text>
          <Text style={Styles.description}>and from that </Text>
          <Text
            style={[Styles.description, {color: '#05b052', fontWeight: '800'}]}>
            {score} answer{' '}
          </Text>
          <Text style={Styles.description}>is correct</Text>
        </Text>
      </View>
      {/* <RenderRetryButton /> */}
      <Button
        title="Retry"
        onPress={handleRetry}
        tilteStyle={Styles.submitText}
        style={Styles.submitButton}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  innerContainer: {
    backgroundColor: Colors.secondaryColor,
    width: '100%',
    height: '70%',
    borderRadius: 25,
    alignItems: 'center',
  },
  congratsText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#05b052',
    marginBottom: 20,
  },
  quizComplete: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    height: '30%',
    width: '70%',
    margin: 20,
  },
  description: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    height: 60,
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 15,
    position: 'absolute',
    bottom: 20,
  },
  submitText: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
  },
});

export default ScoreScreen;
