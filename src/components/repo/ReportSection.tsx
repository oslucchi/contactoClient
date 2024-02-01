import { View, Text, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import FetchData from '../../services/FetchData';
import { Reports } from '../../modules/Reports';
import ReportItem from './ReportItem';
import styles from './Reports.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Events } from '../../modules/Events';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  event: Events;
};

const ReportSection: React.FC<Props> = ({ event }) => {
  console.log('ReportSection');

  const [showTagsOnly, setShowTagsOnly] = useState(true);

  const navigation = useNavigation<any>();

  const { data, isLoading, error } = FetchData(
    'post',
    'restcall/agenda/getReports',
    {
      idCompany: event.idCompany,
    },
  );

  const toggleFullReportVisibilty = () => {
    setShowTagsOnly(!showTagsOnly);
    data.forEach((item: Reports) => {
      item.showTagOnly = showTagsOnly;
    })
  };

  useEffect(() => {
    console.log('useEffect called. showTagsOnly is ' + showTagsOnly);
  }, [showTagsOnly]);

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
            style={styles.iconContainerSmall}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 35 }}>Reports</Text>
        <TouchableOpacity onPress={() => addReport(event.idEvent, 1)}>
          <Icon name="pluscircleo" size={35} />
        </TouchableOpacity>
      </View>
      <View style={[styles.reportsContainer]}>
        <ScrollView>
          {data?.map((report: Reports) => (
            <ReportItem
              key={report?.idReport}
              report={report}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Text>{ }</Text>
      </View>
    </View>
  );
};

export default ReportSection;
