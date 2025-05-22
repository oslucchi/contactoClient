import React from 'react';
import { SafeAreaView, View, StyleProp, ViewStyle } from 'react-native';
import styles from '../styles/Application.styles';

type Props = {
  header?: React.ReactNode;
  body: React.ReactNode;
  featureIcons?: React.ReactNode;
  footer?: React.ReactNode;
  bodyStyle?: StyleProp<ViewStyle>;
};

const BaseScreen: React.FC<Props> = ({ header, body, featureIcons, footer, bodyStyle }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerArea}>{header}</View>
      <View style={[styles.bodyContainer, bodyStyle]}>{body}</View>
      <View style={styles.featureIconsArea}>{featureIcons}</View>
      <View style={styles.systemButtonsBand}>{footer}</View>
    </SafeAreaView>
  );
};

export default BaseScreen;
