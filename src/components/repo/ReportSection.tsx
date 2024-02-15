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
import emitter from '../../services/EventManager';

type Props = {
  event: Events;
};

const ReportSection: React.FC<Props> = ({ event }) => {
  // console.log('ReportSection');

  const [showTagsOnly, setShowTagsOnly] = useState(true);
  const [inputValue, setInputValue] = useState<string>("Valore iniziale");

  const navigation = useNavigation<any>();

  const { data, isLoading, error } = FetchData(
    'post',
    'restcall/agenda/getReports',
    {
      idCompany: event.idCompany,
    },
  );

  const toggleFullReportVisibilty = () => {
    for (var count = 0; count < data.length; count++) {
      console.log('id ' + (data[count] as Reports).idReport + ' showTagOnly ' + (data[count] as Reports).showTagOnly);
      (data[count] as Reports).showTagOnly = !showTagsOnly;
      console.log('id ' + (data[count] as Reports).idReport + ' showTagOnly ' + (data[count] as Reports).showTagOnly);
    }
    setShowTagsOnly(!showTagsOnly);
  };

  useEffect(() => {
    setInputValue("valore iniziale");
    console.log("inputValue '" + inputValue + "'");
  }, []);

  useEffect(() => {
    console.log('useEffect called. showTagsOnly is ' + showTagsOnly);
  }, [showTagsOnly]);

  useEffect(() => {
    const updateInputValue = (newValue: string) => {
      setInputValue(newValue);
    };

    emitter.on('updateInput', updateInputValue);

    // Cleanup the listener
    return () => {
      emitter.off('updateInput', updateInputValue);
    };
  }, []);

  const addReport = (idEvent: number, idUser: number) => {
    console.log('adding report for ', idEvent, idUser);
    navigation.navigate('ReportAddItem', { inputValue });
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
      <View style={[styles.reportsContainer, { height: '90%' }]}>
        <ScrollView>
          {data?.map((report: Reports) => (
            <ReportItem
              key={report?.idReport}
              report={report}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ReportSection;
