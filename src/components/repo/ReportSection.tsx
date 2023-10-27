import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import FetchData from '../../services/FetchData';
import { Reports } from '../../modules/Reports';
import ReportItem from './ReportItem';
import styles from './Reports.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Events } from '../../modules/Events';

type Props = {
  event: Events;
};

const ReportSection: React.FC<Props> = ({ event }) => {
  console.log('ReportSection');

  const [showTagsOnly, setShowTagsOnly] = useState(true);

  const navigation = useNavigation<any>();
  console.log('ReportSection');

  const { data, isLoading, error } = FetchData(
    'post',
    'restcall/agenda/getReports',
    {
      idCompany: event.idCompany,
    },
  );

  const toggleFullReportVisibilty = () => {
    setShowTagsOnly(!showTagsOnly);
  };

  const addReport = (idEvent: number, idUser: number) => {
    console.log('adding report for ', idEvent, idUser);
    navigation.navigate('ReportAddItem', { idEvent, idUser });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleFullReportVisibilty}>
          <Image
            source={require('../../../assets/icons/details.png')}
            style={styles.iconContainer}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 35 }}>Reports</Text>
        <TouchableOpacity onPress={() => addReport(event.idEvent, 1)}>
          <Image
            source={require('../../../assets/icons/add.png')}
            style={styles.iconContainer}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.reportsContainer}>
        <ScrollView>
          {data?.map((report: Reports) => (
            <ReportItem
              key={report?.idReport}
              report={report}
              showTagsOnly={showTagsOnly}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ReportSection;
