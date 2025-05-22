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
  const [showTagOnly, setShowTagOnly] = useState(report.showTagOnly);

  const toggleShowTagOnly = () => {
    report.showTagOnly = !report.showTagOnly;
    setShowTagOnly(report.showTagOnly);
  };

  return (
    <TouchableOpacity onPress={toggleShowTagOnly}>
      <View style={[styles.reportItemContainer, { paddingBottom: 25 }]}>
        <Text style={[styles.dateText, { fontStyle: 'italic', fontSize: 18 }]}>  
          {dayjs(report?.date).format('YYYY/MM/DD')} {' - '} {report.reporter}
        </Text>
        {showTagOnly ? (
          <Text style={[styles.description, { fontSize: 12 }]}>{report?.summary}</Text>
        ) : (
          <Text style={{ fontSize, color: '#111111' }}>{report?.report}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ReportItem;
