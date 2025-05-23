import React from 'react';
import {
  SafeAreaView,
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../navigation/types';
import styles from '../styles/Application.styles';

type Props = {
  header?: React.ReactNode;
  body: React.ReactNode;
  featureIcons?: React.ReactNode;
  footer?: React.ReactNode;
  bodyStyle?: StyleProp<ViewStyle>;
  showBackButton?: boolean;
  showHomeButton?: boolean;
  showRefreshButton?: boolean;
};

const BaseScreen: React.FC<Props> = ({
  header,
  body,
  featureIcons,
  footer,
  bodyStyle,
  showBackButton = true,
  showHomeButton = true,
  showRefreshButton = true,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoHome = () => {
    navigation.navigate('Agenda');
  };

  const handleRefresh = () => {
    navigation.navigate('Agenda');
  };


  const renderDefaultFooter = () => (
    <View style={styles.footerButtons}>
      {showBackButton && (
        <TouchableOpacity onPress={handleGoBack}>
          <Image
            source={require('../../assets/images/back.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
      {showHomeButton && (
        <TouchableOpacity onPress={handleGoHome}>
          <Image
            source={require('../../assets/images/home.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
      {showRefreshButton && (
        <TouchableOpacity onPress={handleRefresh}>
          <Image
            source={require('../../assets/images/refresh.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerArea}>{header}</View>
      <View style={[styles.bodyContainer, bodyStyle]}>{body}</View>
      <View style={styles.featureIconsArea}>{featureIcons}</View>
      <View style={styles.systemButtonsBand}>
        {footer ?? renderDefaultFooter()}
      </View>
    </SafeAreaView>
  );
};

export default BaseScreen;
