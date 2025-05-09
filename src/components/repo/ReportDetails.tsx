import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '../../navigation/types';
import styles from './Reports.style';
import dayjs from 'dayjs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ReportDetailsRouteProp = RouteProp<AppStackParamList, 'ReportDetails'>;
type NavigationProp = NativeStackNavigationProp<AppStackParamList, 'ReportDetails'>;

const ReportDetails = () => {
  const route = useRoute<ReportDetailsRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { report } = route.params;

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Report Details</Text>
      </View>

      {/* Body */}
      <View style={styles.bodyContainer}>
        <Text style={styles.dateText}>
          {dayjs(report?.date).format('YYYY/MM/DD')} — {report?.reporter}
        </Text>
        <Text style={styles.description}>{report?.report}</Text>
      </View>

      {/* Footer */}
      <View style={styles.systemButtonsBand}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.footerButton}>
          <Text style={styles.footerButtonText}>BACK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReportDetails;
