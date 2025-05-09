import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Reports.style';
import Icon from 'react-native-vector-icons/AntDesign';
import ReportItem from './ReportItem';
import { Reports } from '../../modules/Reports';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/types';

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
    console.log('addReport called with', eventId, flag);
    navigation.navigate('ReportAddItem', { idEvent: eventId, idUser: 1 }); 
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleFullReportVisibilty}>
          <Image
            source={require('../../../assets/icons/details.png')}
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 30 }}>Reports</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setFontSize(Math.max(fontSize - 2, 10))}>
            <Text style={{ fontSize: 20, marginHorizontal: 5 }}>A-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFontSize(Math.min(fontSize + 2, 30))}>
            <Text style={{ fontSize: 20, marginHorizontal: 5 }}>A+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addReport(event.idEvent, 1)}>
            <Icon name="pluscircleo" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bodyContainer}>
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
      </View>
    </View>
  );
};

export default ReportSection;
