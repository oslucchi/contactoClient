import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '../../navigation/types';
import styles from '../../styles/Application.styles';
import dayjs from 'dayjs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BaseScreen from '../BaseScreen';

type ReportDetailsRouteProp = RouteProp<AppStackParamList, 'ReportDetails'>;
type NavigationProp = NativeStackNavigationProp<AppStackParamList, 'ReportDetails'>;

const ReportDetails = () => {
  const route = useRoute<ReportDetailsRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { report } = route.params;

  const header = (
    <View style={styles.reportDetailsHeader}>
      <Text style={styles.reportDetailsHeaderText}>Report Details</Text>
    </View>
  );

  const body = (
    <View style={styles.reportDetailsBody}>
      <Text style={styles.reportDetailsDate}>
        {dayjs(report?.date).format('YYYY/MM/DD')} — {report?.reporter}
      </Text>
      <Text style={styles.reportDetailsContent}>{report?.report}</Text>
    </View>
  );

  const footer = (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.footerButton}>
      <Text style={styles.footerButtonText}>BACK</Text>
    </TouchableOpacity>
  );

  return (
    <BaseScreen header={header} body={body} footer={footer} />
  );
};

export default ReportDetails;
