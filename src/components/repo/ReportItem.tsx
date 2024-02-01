import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Reports } from '../../modules/Reports';
import dayjs from 'dayjs';

import styles from './Reports.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  report: Reports;
};


const ReportItem: React.FC<Props> = ({ report }) => {
  console.log('ReportItem');
  const [reportText, setReportText] = useState(report.showTagOnly ? report?.summary : report?.report)

  const toggleShowTagOnly= () => {
    report.showTagOnly = !report.showTagOnly;
    setReportText(report.showTagOnly ? report?.summary : report?.report);
  }
  useEffect(() => { 
    console.log('rendering   trigged') 
  }, [reportText]);

  return (
    <TouchableOpacity onPress={toggleShowTagOnly}>
    <View style={[styles.reportItem, {paddingBottom: 25}]} >
      <Text style={{ fontStyle: 'italic', fontSize: 18 }}>
        {dayjs(report?.date).format('YYYY/MM/DD')} {' - '}
        {report.reporter}
      </Text>
      <Text style={{ fontSize: 16 }}>
        {reportText}
      </Text>
    </View>
    </TouchableOpacity>
  );
};

export default ReportItem;
