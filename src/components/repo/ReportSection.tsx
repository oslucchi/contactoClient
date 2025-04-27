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
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  event: Events;
};

const ReportSection: React.FC<Props> = ({ event }) => {
  // console.log('ReportSection');

  const [inputValue, setInputValue] = useState<string>("Valore iniziale");
  console.log('ReportSection');
  const FONT_SIZE_KEY = '@user_font_size';

  const [showTagsOnly, setShowTagsOnly] = useState(true);
  const [fontSize, setFontSize] = useState(14);

  const navigation = useNavigation<any>();

  const { data, isLoading, error } = FetchData(
    'post',
    'restcall/agenda/getReports',
    {
      idCompany: event.idCompany,
    },
  );

  useEffect(() => {
    const loadFontSize = async () => {
      try {
        const savedSize = await AsyncStorage.getItem(FONT_SIZE_KEY);
        if (savedSize !== null) {
          setFontSize(parseInt(savedSize));
        }
      } catch (e) {
        console.log('Failed to load font size:', e);
      }
    };
  
    loadFontSize();
  }, []);

  const updateFontSize = async (newSize: number) => {
    try {
      await AsyncStorage.setItem(FONT_SIZE_KEY, newSize.toString());
      setFontSize(newSize);
    } catch (e) {
      console.log('Failed to save font size:', e);
    }
  };

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
        <Text style={{ fontSize: 30 }}>Reports</Text>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => updateFontSize(Math.max(fontSize - 2, 10))}>
            <Text style={{ fontSize: 20, marginHorizontal: 5 }}>A-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => updateFontSize(Math.min(fontSize + 2, 30))}>
            <Text style={{ fontSize: 20, marginHorizontal: 5 }}>A+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addReport(event.idEvent, 1)}>
            <Icon name="pluscircleo" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.reportsContainer, { marginBottom: 120 }]}>
        <ScrollView contentContainerStyle={{ padding: 8 }}>
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
