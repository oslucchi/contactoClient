import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Reports } from '../../modules/Reports';
import dayjs from 'dayjs';

import styles from './Reports.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  report: Reports;
  showTagsOnly: boolean;
  fontSize: number;
};

const ReportItem: React.FC<Props> = ({ report, showTagsOnly, fontSize }) => {
  console.log('ReportItem');
  const [showTagOnly, setShowTagOnly] = useState(report.showTagOnly)

  const toggleShowTagOnly= () => {
    console.log('showTagOnly for object was ' + report.showTagOnly); 
    report.showTagOnly = !report.showTagOnly;
    setShowTagOnly(report.showTagOnly);
  }

  return (
    <TouchableOpacity onPress={toggleShowTagOnly}>
    <View style={[styles.reportItem, {paddingBottom: 25}]} >
      <Text style={{ fontStyle: 'italic', fontSize: 18 }}>
        {dayjs(report?.date).format('YYYY/MM/DD')} {' - '}
        {report.reporter}
      </Text>
      {report.showTagOnly ? (
        <Text style={{ fontSize: 12 }}>{report?.summary}</Text>
      ) : (
        <Text style={{ fontSize, color: '#111111' }}>{report?.report}</Text>
      )}
    </View>
    </TouchableOpacity>
  );
};

export default ReportItem;
