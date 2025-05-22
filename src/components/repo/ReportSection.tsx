import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import ReportItem from './ReportItem';
import { Reports } from '../../modules/Reports';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/types';
import styles from '../../styles/Application.styles';
import BaseScreen from '../BaseScreen';

type NavigationProp = NativeStackNavigationProp<AppStackParamList, 'ReportSection'>;
type RoutePropType = RouteProp<AppStackParamList, 'ReportSection'>;

const ReportSection = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  const { data, event } = route.params;

  const [showTagsOnly, setShowTagsOnly] = useState(false);
  const [fontSize, setFontSize] = useState(14);

  const toggleFullReportVisibilty = () => {
    setShowTagsOnly(prev => !prev);
  };

  const addReport = (eventId: number, flag: number) => {
    navigation.navigate('ReportAddItem', { idEvent: eventId, idUser: 1 });
  };

  const header = (
    <View style={styles.reportHeader}>
      <TouchableOpacity onPress={toggleFullReportVisibilty}>
        <Image
          source={require('../../../assets/icons/details.png')}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>

      <Text style={styles.reportTitle}>Reports</Text>

      <View style={styles.reportHeaderControls}>
        <TouchableOpacity onPress={() => setFontSize(Math.max(fontSize - 2, 10))}>
          <Text style={styles.reportControlButtonText}>A-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFontSize(Math.min(fontSize + 2, 30))}>
          <Text style={styles.reportControlButtonText}>A+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addReport(event.idEvent, 1)}>
          <Icon name="pluscircleo" size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );


  const body = (
    <ScrollView contentContainerStyle={{ padding: 8, paddingBottom: 80 }}>
      {data?.map((report: Reports) => (
        <TouchableOpacity
          key={report?.idReport}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('ReportDetails', { report })}
        >
          <ReportItem
            report={report}
            showTagsOnly={showTagsOnly}
            fontSize={fontSize}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <BaseScreen
      header={header}
      body={body}
      featureIcons={null}
      footer={null}
    />
  );
};

export default ReportSection;
